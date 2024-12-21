import { ProjectDialog } from "@/components/projects/project-dialog"
import { ProjectTable } from "@/components/projects/project-table"
import { addProject } from "../actions/addProject"

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <ProjectDialog action={addProject} />
      </div>
      <div className="bg-card rounded-lg shadow-md p-6">
        <ProjectTable />
      </div>
    </div>
  )
}
