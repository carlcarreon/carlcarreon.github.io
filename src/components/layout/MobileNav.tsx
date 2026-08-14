import { NavLink } from "react-router-dom"

export default function MobileNav() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    [
      "flex items-center justify-center rounded-xl bg-white/5 px-3 py-3 text-sm text-white/85 transition",
      isActive ? "bg-sky-500/15 text-white" : "",
    ]
      .filter(Boolean)
      .join(" ")

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-[#0a0a0af2] px-3 py-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>
        <NavLink to="/projects" className={navClass}>
          Projects
        </NavLink>
        <NavLink to="/tech-stack" className={navClass}>
          Tech Stack
        </NavLink>
      </div>
    </nav>
  )
}
