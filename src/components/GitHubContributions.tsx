import { useEffect, useState } from "react"
import { GitHubCalendar } from "react-github-calendar"

export default function GitHubContributions() {
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
          ? { blockSize: 5, blockMargin: 1, fontSize: 12 }
          : { blockSize: 10, blockMargin: 2, fontSize: 14 },
      )
    }

    updateCalendarSize()
    window.addEventListener("resize", updateCalendarSize)

    return () => window.removeEventListener("resize", updateCalendarSize)
  }, [])

  return (
    <section className="mt-10 w-full max-w-3xl overflow-x-hidden">
      <GitHubCalendar
        username="carlcarreon"
        blockSize={calendarSize.blockSize}
        blockMargin={calendarSize.blockMargin}
        fontSize={calendarSize.fontSize}
        colorScheme="dark"
        showWeekdayLabels={false}
        showColorLegend={false}
        theme={{
          dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
        }}
      />
    </section>
  )
}
