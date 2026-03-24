import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Post } from "@/models/Post";

// GET all posts
export async function GET() {
  try {
    await connectDB();
    const posts = await Post.find().sort({ date: -1 });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: "获取文章失败" }, { status: 500 });
  }
}

// POST create/update post
export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    
    if (data._id) {
      // Update
      await Post.findByIdAndUpdate(data._id, { ...data, updatedAt: new Date() });
      return NextResponse.json({ success: true, message: "更新成功" });
    } else {
      // Create
      await Post.create(data);
      return NextResponse.json({ success: true, message: "创建成功" });
    }
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json({ error: "Slug 已存在" }, { status: 400 });
    }
    return NextResponse.json({ error: "操作失败" }, { status: 500 });
  }
}

// DELETE post
export async function DELETE(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    if (!id) {
      return NextResponse.json({ error: "缺少ID" }, { status: 400 });
    }
    
    await Post.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "删除成功" });
  } catch (error) {
    return NextResponse.json({ error: "删除失败" }, { status: 500 });
  }
}
