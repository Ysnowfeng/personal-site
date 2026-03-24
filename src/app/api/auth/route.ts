import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/db";
import { Admin } from "@/models/Admin";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-this";

export async function POST(request: Request) {
  try {
    await connectDB();
    const { username, password, action } = await request.json();

    // Register (first time only)
    if (action === "register") {
      const existing = await Admin.findOne({ username });
      if (existing) {
        return NextResponse.json({ error: "用户已存在" }, { status: 400 });
      }
      const admin = await Admin.create({ username, password });
      const token = jwt.sign({ id: admin._id, username }, JWT_SECRET, { expiresIn: "7d" });
      
      const response = NextResponse.json({ success: true, message: "注册成功" });
      response.cookies.set("admin_token", token, { httpOnly: true, maxAge: 60 * 60 * 24 * 7 });
      return response;
    }

    // Login
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return NextResponse.json({ error: "用户名或密码错误" }, { status: 401 });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return NextResponse.json({ error: "用户名或密码错误" }, { status: 401 });
    }

    const token = jwt.sign({ id: admin._id, username }, JWT_SECRET, { expiresIn: "7d" });
    const response = NextResponse.json({ success: true, message: "登录成功" });
    response.cookies.set("admin_token", token, { httpOnly: true, maxAge: 60 * 60 * 24 * 7 });
    return response;
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const token = request.cookies.get("admin_token")?.value;
    if (!token) {
      return NextResponse.json({ authenticated: false });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    return NextResponse.json({ authenticated: true, username: decoded.username });
  } catch {
    return NextResponse.json({ authenticated: false });
  }
}
