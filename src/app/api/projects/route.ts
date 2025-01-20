import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/projects
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching projects" }, { status: 500 });
  }
}

// POST /api/projects
export async function POST(request: Request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const json = await request.json();
    const project = await prisma.project.create({
      data: {
        title: json.title,
        description: json.description,
        technologies: json.technologies,
        githubUrl: json.githubUrl,
        liveUrl: json.liveUrl,
        imageUrl: json.imageUrl,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: "Error creating project" }, { status: 500 });
  }
}
