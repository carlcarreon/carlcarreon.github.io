export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-6rem)] w-full items-center justify-center overflow-hidden py-6">
      <div className="flex -translate-y-2 flex-col items-center">
        <svg
          viewBox="0 0 1200 500"
          aria-label="404"
          role="img"
          className="h-auto w-full max-w-[min(100vw,100rem)] overflow-visible"
        >
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="none"
            stroke="var(--foreground)"
            strokeWidth="14"
            strokeLinejoin="round"
            strokeLinecap="round"
            paintOrder="stroke"
            style={{
              fontFamily: "Geist Variable, sans-serif",
              fontSize: "500px",
              fontWeight: 900,
              letterSpacing: "0.02em",
            }}
          >
            404
          </text>
        </svg>

        <p className="font-mono text-xl uppercase tracking-[0.32em] text-muted-foreground">
          Not Found
        </p>
      </div>
    </main>
  )
}
