import { Layers3 } from "lucide-react"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export default function TechStack() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-2xl py-6">
      <Empty className="min-h-[60vh]">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Layers3 />
          </EmptyMedia>
          <EmptyTitle>Tech stack coming soon</EmptyTitle>
          <EmptyDescription>
            I’m organizing the tools and technologies I use across frontend,
            backend, databases, and deployment.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </main>
  )
}
