import { useEffect, useState } from "react"
import { GitHubCalendar } from "react-github-calendar"

export default function GitHubContributions() {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  )
  const [calendarSize, setCalendarSize] = useState({
    blockSize: 5,
    blockMargin: 1,
    fontSize: 12,
  })

  useEffect(() => {
    const updateCalendarSize = () => {
      const isSmallScreen = window.innerWidth < 640

      setCalendarSize(
        isSmallScreen
          ? { blockSize: 8, blockMargin: 1, fontSize: 12 }
          : { blockSize: 10.7, blockMargin: 2, fontSize: 14 },
      )
    }

    updateCalendarSize()
    window.addEventListener("resize", updateCalendarSize)

    return () => window.removeEventListener("resize", updateCalendarSize)
  }, [])

  useEffect(() => {
    const updateColorScheme = () => {
      setColorScheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light",
      )
    }

    window.addEventListener("themechange", updateColorScheme)
    return () => window.removeEventListener("themechange", updateColorScheme)
  }, [])

  return (
    <section className="py-10 w-full max-w-3xl overflow-x-hidden">
      <GitHubCalendar
        username="carlcarreon"
        blockSize={calendarSize.blockSize}
        blockMargin={calendarSize.blockMargin}
        fontSize={calendarSize.fontSize}
        colorScheme={colorScheme}
        showWeekdayLabels={false}
        showColorLegend={false}
        theme={{
          light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
          dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
        }}
      />
    </section>
  )
}
