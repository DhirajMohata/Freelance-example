import { NextResponse } from 'next/server'
import projectsData from '@/data/projects.json'

export async function GET() {
  return NextResponse.json(projectsData.projects)
}

export async function POST(request: Request) {
    
  console.log(request)
  const body = await request.json()
  const newProject = {
    id: Date.now().toString(),
    ...body
  }
  projectsData.projects.push(newProject)
  
  return NextResponse.json(newProject)
}
