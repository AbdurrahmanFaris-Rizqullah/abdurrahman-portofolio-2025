import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/projects/[id]
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const project = await prisma.project.findUnique({
      where: { id: params.id },
    });
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching project" }, { status: 500 });
  }
}

// PUT /api/projects/[id]
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const json = await request.json();
    const project = await prisma.project.update({
      where: { id: params.id },
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
    return NextResponse.json({ error: "Error updating project" }, { status: 500 });
  }
}

// DELETE /api/projects/[id]
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await prisma.project.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Project deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Error deleting project" }, { status: 500 });
  }
}
