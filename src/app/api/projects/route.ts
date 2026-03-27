import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Project } from "@/models/Project";

export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    return NextResponse.json(projects);
  } catch {
    return NextResponse.json({ error: "获取项目失败" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    
    if (data._id) {
      await Project.findByIdAndUpdate(data._id, { ...data, updatedAt: new Date() });
      return NextResponse.json({ success: true, message: "更新成功" });
    } else {
      await Project.create(data);
      return NextResponse.json({ success: true, message: "创建成功" });
    }
  } catch {
    return NextResponse.json({ error: "操作失败" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    if (!id) {
      return NextResponse.json({ error: "缺少ID" }, { status: 400 });
    }
    
    await Project.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "删除成功" });
  } catch {
    return NextResponse.json({ error: "删除失败" }, { status: 500 });
  }
}
