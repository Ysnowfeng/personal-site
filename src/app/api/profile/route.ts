import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Profile } from "@/models/Profile";

export async function GET() {
  try {
    await connectDB();
    let profile = await Profile.findOne();
    
    // If no profile exists, create default
    if (!profile) {
      profile = await Profile.create({
        name: "小增老师",
        title: "全栈开发者 & 技术写作者",
        bio: "热爱 Node.js 和 TypeScript，专注于构建优雅的 Web 应用。",
        avatar: "👨‍💻",
        email: "xiaozeng@example.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
        juejin: "https://juejin.cn",
        skills: ["React", "Vue.js", "TypeScript", "Node.js", "Next.js"],
      });
    }
    
    return NextResponse.json(profile);
  } catch {
    return NextResponse.json({ error: "获取资料失败" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    
    // Get existing profile or create new
    const profile = await Profile.findOne();
    
    if (profile) {
      await Profile.findByIdAndUpdate(profile._id, { ...data, updatedAt: new Date() });
    } else {
      await Profile.create(data);
    }
    
    return NextResponse.json({ success: true, message: "保存成功" });
  } catch {
    return NextResponse.json({ error: "保存失败" }, { status: 500 });
  }
}
