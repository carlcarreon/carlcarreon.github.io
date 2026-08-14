import { useState, type CSSProperties, type PointerEvent } from "react"
import { Outlet } from "react-router-dom"
import MobileNav from "./MobileNav"
import Sidebar from "./Sidebar"

export default function Layout() {
  const [isContentHovered, setIsContentHovered] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  function updateCursorPosition(event: PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect()

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white lg:pl-[256px]">
      <Sidebar />
      <MobileNav />

      <main
        className="relative min-h-screen overflow-hidden bg-[#0A0A0A] px-5 py-6 pb-24 lg:px-10 lg:py-10"
        onPointerEnter={(event) => {
          setIsContentHovered(true)
          updateCursorPosition(event)
        }}
        onPointerMove={updateCursorPosition}
        onPointerLeave={() => setIsContentHovered(false)}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1.5px_1.5px,rgba(255,255,255,0.1)_1.5px,transparent_0)] bg-[size:28px_28px] opacity-55"
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1.5px_1.5px,rgba(255,255,255,0.22)_1.5px,transparent_0)] bg-[size:28px_28px] opacity-0 mix-blend-screen transition-opacity duration-150 ${isContentHovered ? "opacity-[0.82]" : ""}`}
          style={
            {
              WebkitMaskImage: `radial-gradient(circle 72px at ${cursorPosition.x}px ${cursorPosition.y}px, #000 0, #000 46%, transparent 100%)`,
              maskImage: `radial-gradient(circle 72px at ${cursorPosition.x}px ${cursorPosition.y}px, #000 0, #000 46%, transparent 100%)`,
            } as CSSProperties
          }
        />
        <div className="relative z-10">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
