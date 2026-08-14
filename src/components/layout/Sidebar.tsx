import { NavLink } from "react-router-dom"

export default function Sidebar() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `flex py-2 items-center rounded-xl transition-colors ${isActive
      ? "text-white"
      : "text-zinc-400 hover:text-zinc-300"
    }`
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[256px] flex-col border-r border-white/10 bg-[#0d0d0d] px-8 py-10 lg:flex">
      <NavLink
        to="/"
        className="mb-10 flex items-center rounded-xl text-lg tracking-[-0.04em] text-slate-50"
      >
        Carl Justin Carreon
      </NavLink>

      <nav className="flex flex-col">
        <NavLink to="/projects" className={navClass}>
          Projects
        </NavLink>
        <NavLink to="/tech-stack" className={navClass}>
          Tech Stack
        </NavLink>
      </nav>
    </aside>
  )
}
