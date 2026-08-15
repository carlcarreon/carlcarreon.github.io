import { NavLink } from "react-router-dom"
import { Download, Mail, Moon, Sun } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const brandIconClass = "size-4 shrink-0"

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={brandIconClass} aria-hidden="true">
      <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.82.58A12 12 0 0 0 12 .3Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={brandIconClass} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={brandIconClass} aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.23 2.68.23v2.98h-1.51c-1.49 0-1.96.93-1.96 1.88v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07Z" />
    </svg>
  )
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/carlcarreon",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/cj-carreon-296173343/",
    icon: LinkedInIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/carreon.carll/",
    icon: FacebookIcon,
  },
]

type SidebarProps = {
  isDark: boolean
  onToggleTheme: () => void
}

export default function Sidebar({ isDark, onToggleTheme }: SidebarProps) {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `relative flex w-fit items-center rounded-xl py-2 transition-colors ${isActive
      ? "text-foreground after:absolute after:bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-current after:content-[''] after:animate-[sidebar-underline-grow_400ms_ease-out_forwards]"
      : "text-muted-foreground hover:text-foreground"
    }`
  const navTextClass = (isActive: boolean) =>
    isActive
      ? "-translate-y-1.5 animate-[sidebar-nav-float_400ms_ease-out_forwards]"
      : ""
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[232px] flex-col border-r border-border bg-background px-6 pt-10 pb-6 lg:flex">
      <NavLink
        to="/"
        className="mb-6 flex items-center rounded-xl text-base tracking-[-0.04em] text-foreground"
      >
        Carl Justin Carreon
      </NavLink>

      <nav className="flex flex-col text-sm">
        <NavLink to="/projects" className={navClass}>
          {({ isActive }) => (
            <span className={navTextClass(isActive)}>Projects</span>
          )}
        </NavLink>
        <NavLink to="/tech-stack" className={navClass}>
          {({ isActive }) => (
            <span className={navTextClass(isActive)}>Tech Stack</span>
          )}
        </NavLink>
        <NavLink to="/experience" className={navClass}>
          {({ isActive }) => (
            <span className={navTextClass(isActive)}>Experience</span>
          )}
        </NavLink>
      </nav>

      <div className="mt-auto space-y-3">
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={onToggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          </Button>

          <a
            href="/CV.pdf"
            download="Carl-Justin-Carreon-CV.pdf"
            className={buttonVariants({ className: "flex-1" })}
          >
            <Download data-icon="inline-start" aria-hidden="true" />
            Download CV
          </a>
        </div>

        <Separator className="my-5" />

        <div className="flex flex-col gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon />
              {label}
            </a>
          ))}
        </div>

        <a
          href="mailto:carreon.carll@gmail.com"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Mail className="size-4 shrink-0" aria-hidden="true" />
          carreon.carll@gmail.com
        </a>
      </div>
    </aside>
  )
}
