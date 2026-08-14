import { NavLink } from "react-router-dom"

export default function MobileNav() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    [
      "flex items-center justify-center rounded-xl bg-muted px-3 py-3 text-sm text-foreground/85 transition",
      isActive ? "bg-sky-500/15 text-foreground" : "",
    ]
      .filter(Boolean)
      .join(" ")

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 px-3 py-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-4 gap-2">
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>
        <NavLink to="/projects" className={navClass}>
          Projects
        </NavLink>
        <NavLink to="/tech-stack" className={navClass}>
          Tech Stack
        </NavLink>
        <NavLink to="/experience" className={navClass}>
          Experience
        </NavLink>
      </div>
    </nav>
  )
}
