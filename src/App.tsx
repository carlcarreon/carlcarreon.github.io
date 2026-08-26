import { lazy, Suspense, type ReactNode, useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import Layout from "./components/layout/Layout"
import { Skeleton } from "./components/ui/skeleton"

const Home = lazy(() => import("./pages/Home"))
const Projects = lazy(() => import("./pages/Projects"))
const TechStack = lazy(() => import("./pages/TechStack"))
const Experience = lazy(() => import("./pages/Experience"))
const NotFound = lazy(() => import("./pages/NotFound"))

function PageSkeleton({ wide = false }: { wide?: boolean }) {
  return (
    <div
      role="status"
      aria-label="Loading page"
      className={`mx-auto w-full py-6 ${wide ? "max-w-5xl" : "max-w-2xl"}`}
    >
      <span className="sr-only">Loading…</span>
      <Skeleton className="h-10 w-48" />

      <div className="space-y-3 py-10">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      <Skeleton className="aspect-video w-full" />
    </div>
  )
}

function PageBoundary({
  children,
  wide = false,
}: {
  children: ReactNode
  wide?: boolean
}) {
  return (
    <Suspense fallback={<PageSkeleton wide={wide} />}>
      {children}
    </Suspense>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <PageBoundary>
                <Home />
              </PageBoundary>
            }
          />
          <Route
            path="/projects"
            element={
              <PageBoundary wide>
                <Projects />
              </PageBoundary>
            }
          />
          <Route
            path="/tech-stack"
            element={
              <PageBoundary>
                <TechStack />
              </PageBoundary>
            }
          />
          <Route
            path="/experience"
            element={
              <PageBoundary>
                <Experience />
              </PageBoundary>
            }
          />
          <Route
            path="*"
            element={
              <PageBoundary>
                <NotFound />
              </PageBoundary>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
