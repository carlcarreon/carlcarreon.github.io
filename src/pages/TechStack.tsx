import { BsOpenai } from "react-icons/bs"
import {
  SiCss,
  SiDigitalocean,
  SiDocker,
  SiGit,
  SiGithub,
  SiGodaddy,
  SiHtml5,
  SiInertia,
  SiJavascript,
  SiLaravel,
  SiLinux,
  SiLivewire,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiPrettier,
  SiPwa,
  SiRailway,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si"
import { TbApi } from "react-icons/tb"
import { VscVscode } from "react-icons/vsc"

import { Badge } from "@/components/ui/badge"
import {
  techStackCategories,
  type TechStackIcon,
} from "@/data/tech-stack"

const techStackIcons = {
  codex: BsOpenai,
  css: SiCss,
  digitalocean: SiDigitalocean,
  docker: SiDocker,
  git: SiGit,
  github: SiGithub,
  godaddy: SiGodaddy,
  html: SiHtml5,
  inertia: SiInertia,
  javascript: SiJavascript,
  laravel: SiLaravel,
  linux: SiLinux,
  livewire: SiLivewire,
  mysql: SiMysql,
  php: SiPhp,
  postgresql: SiPostgresql,
  prettier: SiPrettier,
  pwa: SiPwa,
  railway: SiRailway,
  react: SiReact,
  rest: TbApi,
  shadcn: SiShadcnui,
  supabase: SiSupabase,
  tailwind: SiTailwindcss,
  vscode: VscVscode,
  vercel: SiVercel,
  vue: SiVuedotjs,
} satisfies Record<TechStackIcon, React.ElementType>

export default function TechStack() {
  return (
    <main className="mx-auto min-h-[calc(100vh-6rem)] w-full max-w-3xl">
      <header className="flex flex-col gap-4 pb-10">
        <h1 className="m-0 text-3xl text-foreground">Tech Stack</h1>
        <p className="max-w-3xl text-sm leading-7 text-foreground/85 lg:text-base">
          I work with technologies that help me build reliable, maintainable,
          and practical applications—from backend development and databases to
          responsive frontend interfaces and deployment.
        </p>
      </header>

      <div className="flex flex-col gap-10">
        {techStackCategories.map((category) => (
          <section key={category.name} aria-labelledby={`tech-${category.name}`}>
            <h2
              id={`tech-${category.name}`}
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              {category.name}
            </h2>

            <ul className="mt-4 flex list-none flex-wrap gap-3">
              {category.technologies.map((technology) => {
                const TechnologyIcon = techStackIcons[technology.icon]

                return (
                  <li key={technology.name}>
                    <a
                      href={technology.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${technology.name} official website (opens in a new tab)`}
                    >
                      <Badge
                        variant="outline"
                        className="h-auto gap-1.5 rounded-md bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        <TechnologyIcon
                          aria-hidden="true"
                          className="size-3 shrink-0"
                        />
                        {technology.name}
                      </Badge>
                    </a>
                  </li>
                )
              })}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
