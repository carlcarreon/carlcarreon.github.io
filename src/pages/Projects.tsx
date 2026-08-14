import { FolderOpen } from "lucide-react"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export default function Projects() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-2xl py-6">
      <Empty className="min-h-[60vh]">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <FolderOpen />
          </EmptyMedia>
          <EmptyTitle>Projects coming soon</EmptyTitle>
          <EmptyDescription>
            I’m preparing detailed case studies of the applications and systems
            I’ve built. Check back soon.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </main>
  )
}
