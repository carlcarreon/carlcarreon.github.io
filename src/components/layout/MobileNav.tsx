import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { SidebarActions, SidebarNavigation } from "./Sidebar"

type MobileNavProps = {
  isDark: boolean
  onToggleTheme: () => void
}

export default function MobileNav({
  isDark,
  onToggleTheme,
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-background px-5 lg:hidden">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="text-base font-medium tracking-[-0.04em] text-foreground"
        >
          CJ
        </NavLink>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="flex size-10 items-center justify-center rounded-md text-foreground"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </header>

      {/* Mobile Menu */}
      <aside
        className={`
          fixed inset-x-0 bottom-0 top-16 z-40
          flex flex-col
          overflow-y-auto
          border-t border-border
          bg-background
          px-5 py-6
          transition-transform duration-300 ease-in-out
          lg:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Navigation at top */}
        <SidebarNavigation onNavigate={closeMenu} />

        {/* Actions at bottom */}
        <div className="mt-auto pt-8">
          <SidebarActions
            isDark={isDark}
            onToggleTheme={onToggleTheme}
          />
        </div>
      </aside>
    </>
  )
}