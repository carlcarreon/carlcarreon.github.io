import { useState } from "react"
import GitHubContributions from "../components/GitHubContributions"
import { Link } from "react-router-dom"
import {
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react"
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useAnimate,
} from "motion/react"
import { BsOpenai } from "react-icons/bs"
import {
  SiInertia,
  SiLaravel,
  SiLivewire,
  SiReact,
  SiTailwindcss,
  SiVuedotjs,
} from "react-icons/si"
import {
  homeIntroParagraphs,
  homeExperienceTitle,
  homeProjectsTitle,
  homeName,
  homeSectionTitle,
  homeTechStackPreviewCount,
  homeTechStack,
} from "@/data/home"
import { experienceGroups } from "@/data/experience"
import { projects } from "@/data/project"

const homeTechLinks = {
  Livewire: {
    url: "https://livewire.laravel.com/",
    icon: SiLivewire,
  },
  Codex: {
    url: "https://developers.openai.com/codex/",
    icon: BsOpenai,
  },
  Laravel: {
    url: "https://laravel.com/",
    icon: SiLaravel,
  },
  "Vue.js": {
    url: "https://vuejs.org/",
    icon: SiVuedotjs,
  },
  React: {
    url: "https://react.dev/",
    icon: SiReact,
  },
  "Inertia.js": {
    url: "https://inertiajs.com/",
    icon: SiInertia,
  },
  "Laravel Reverb": {
    url: "https://laravel.com/docs/reverb",
    icon: SiLaravel,
  },
  "Tailwind CSS": {
    url: "https://tailwindcss.com/",
    icon: SiTailwindcss,
  },
}

function getExperienceYears(period: string) {
  const years = period.match(/\d{4}|Present/g) ?? []
  return [...new Set(years)].join(" – ")
}

function HomeProjectSliderContent() {
  const [scope, animate] = useAnimate()
  const [cardOrder, setCardOrder] = useState(() =>
    projects.map((_, index) => index),
  )
  const [imageIndexes, setImageIndexes] = useState(() =>
    projects.map(() => 0),
  )
  const [isAnimating, setIsAnimating] = useState(false)
  const hasSeparatePreviousCard = projects.length > 2

  function getCardOffset(position: number) {
    if (position === 0) return "0%"

    const percentage = position * 100
    const gap = Math.abs(position)

    return position > 0
      ? `calc(${percentage}% + ${gap}rem)`
      : `calc(${percentage}% - ${gap}rem)`
  }

  function changeProjectImage(card: number, direction: -1 | 1) {
    const imageCount = projects[card].images.length
    if (imageCount < 2) return

    setImageIndexes((current) => {
      const next = [...current]
      next[card] = (next[card] + direction + imageCount) % imageCount
      return next
    })
  }

  async function showNextProject() {
    if (projects.length < 2 || isAnimating) return

    const outgoingCard = `[data-home-project-card="${cardOrder[0]}"]`
    const previousCardIndex = cardOrder[cardOrder.length - 1]
    const previousCard = `[data-home-project-card="${previousCardIndex}"]`
    const nextOrder = [...cardOrder.slice(1), cardOrder[0]]
    const forwardCards = hasSeparatePreviousCard
      ? cardOrder.slice(1, -1)
      : cardOrder.slice(1)

    setIsAnimating(true)

    try {
      await Promise.all([
        animate(
          outgoingCard,
          { x: getCardOffset(-0.5), y: 0 },
          { duration: 0.22, ease: "easeInOut" },
        ),
        ...forwardCards.map((cardIndex, position) =>
          animate(
            `[data-home-project-card="${cardIndex}"]`,
            { x: getCardOffset(position + 0.5), y: 0 },
            { duration: 0.22, ease: "easeInOut" },
          ),
        ),
        ...(hasSeparatePreviousCard
          ? [
              animate(
                previousCard,
                { x: getCardOffset(-1.5), y: 0 },
                { duration: 0.22, ease: "easeInOut" },
              ),
            ]
          : []),
      ])

      setCardOrder(nextOrder)

      await Promise.all([
        animate(
          outgoingCard,
          { x: getCardOffset(-1), y: 0 },
          { duration: 0.28, ease: "easeInOut" },
        ),
        ...forwardCards.map((cardIndex, position) =>
          animate(
            `[data-home-project-card="${cardIndex}"]`,
            { x: getCardOffset(position), y: 0 },
            { duration: 0.28, ease: "easeInOut" },
          ),
        ),
        ...(hasSeparatePreviousCard
          ? [
              animate(
                previousCard,
                { x: getCardOffset(-2), y: 0 },
                { duration: 0.28, ease: "easeInOut" },
              ),
            ]
          : []),
      ])

      if (hasSeparatePreviousCard) {
        await animate(
          previousCard,
          { x: getCardOffset(projects.length - 2), y: 0 },
          { duration: 0 },
        )
      } else {
        await animate(
          outgoingCard,
          { x: getCardOffset(projects.length - 1), y: 0 },
          { duration: 0 },
        )
      }
    } finally {
      setIsAnimating(false)
    }
  }

  async function showPreviousProject() {
    if (projects.length < 2 || isAnimating) return

    const previousCardIndex = cardOrder[cardOrder.length - 1]
    const previousCard = `[data-home-project-card="${previousCardIndex}"]`
    const nextOrder = [previousCardIndex, ...cardOrder.slice(0, -1)]

    setIsAnimating(true)

    try {
      if (!hasSeparatePreviousCard) {
        await animate(
          previousCard,
          { x: getCardOffset(-1), y: 0 },
          { duration: 0 },
        )
      }

      await Promise.all([
        ...cardOrder.slice(0, -1).map((cardIndex, position) =>
          animate(
            `[data-home-project-card="${cardIndex}"]`,
            { x: getCardOffset(position + 0.5), y: 0 },
            { duration: 0.22, ease: "easeInOut" },
          ),
        ),
        animate(
          previousCard,
          { x: getCardOffset(-0.5), y: 0 },
          { duration: 0.22, ease: "easeInOut" },
        ),
      ])

      setCardOrder(nextOrder)

      await Promise.all([
        animate(
          previousCard,
          { x: getCardOffset(0), y: 0 },
          { duration: 0.28, ease: "easeInOut" },
        ),
        ...cardOrder.slice(0, -1).map((cardIndex, position) =>
          animate(
            `[data-home-project-card="${cardIndex}"]`,
            { x: getCardOffset(position + 1), y: 0 },
            { duration: 0.28, ease: "easeInOut" },
          ),
        ),
      ])

      if (hasSeparatePreviousCard) {
        const cardMovingToPrevious = cardOrder[cardOrder.length - 2]

        await animate(
          `[data-home-project-card="${cardMovingToPrevious}"]`,
          { x: getCardOffset(-1), y: 0 },
          { duration: 0 },
        )
      }
    } finally {
      setIsAnimating(false)
    }
  }

  return (
    <div ref={scope} className="mt-6 w-full">
      <div className="grid w-full overflow-hidden">
        {projects.map((project, card) => {
          const position = cardOrder.indexOf(card)
          const isFront = position === 0
          const isNext = position === 1
          const isPrevious =
            hasSeparatePreviousCard && position === cardOrder.length - 1
          const visiblePosition = isPrevious ? -1 : position
          const activeImage = project.images[imageIndexes[card]]

          return (
            <motion.div
              key={project.name}
              data-home-project-card={card}
              aria-current={isFront ? "true" : undefined}
              initial={{
                x: getCardOffset(visiblePosition),
                y: 0,
              }}
              className={`relative col-start-1 row-start-1 flex flex-col border border-border p-6 text-left ${hasSeparatePreviousCard ? "ml-16 w-[calc(100%-8rem)] sm:ml-[16.666%] sm:w-2/3" : "w-[calc(100%-5rem)] sm:w-[calc(66.666%-1rem)]"} ${isFront ? "bg-card shadow-xl" : isNext || isPrevious ? "bg-muted hover:brightness-95 dark:hover:brightness-110" : "bg-muted"}`}
            >
              <span className="text-xl font-semibold tracking-[-0.025em] text-foreground">
                {project.name}
              </span>
              <span className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
                {project.description}
              </span>

              {activeImage ? (
                <span className="group/image relative mt-6 aspect-video w-full overflow-hidden border border-border bg-muted/30">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.img
                      key={activeImage}
                      src={activeImage}
                      alt={`${project.name} screenshot ${imageIndexes[card] + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="size-full origin-top scale-[1.35] object-cover object-top"
                    />
                  </AnimatePresence>

                  {isFront && project.images.length > 1 ? (
                    <>
                      <button
                        type="button"
                        aria-label={`Show previous ${project.name} image`}
                        onClick={() => changeProjectImage(card, -1)}
                        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-black/65 p-1.5 text-white opacity-0 transition-opacity group-hover/image:opacity-100 focus-visible:opacity-100"
                      >
                        <ChevronLeft aria-hidden="true" className="size-4" />
                      </button>

                      <button
                        type="button"
                        aria-label={`Show next ${project.name} image`}
                        onClick={() => changeProjectImage(card, 1)}
                        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-black/65 p-1.5 text-white opacity-0 transition-opacity group-hover/image:opacity-100 focus-visible:opacity-100"
                      >
                        <ChevronRight aria-hidden="true" className="size-4" />
                      </button>
                    </>
                  ) : null}
                </span>
              ) : (
                <span className="mt-6 flex aspect-video w-full flex-col items-center justify-center gap-3 border border-dashed border-border bg-muted/50 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <ImageIcon aria-hidden="true" className="size-6" />
                  Image placeholder
                </span>
              )}

              {isNext || isPrevious ? (
                <button
                  type="button"
                  aria-label={`Bring ${project.name} forward`}
                  disabled={isAnimating}
                  onClick={() =>
                    void (isPrevious
                      ? showPreviousProject()
                      : showNextProject())
                  }
                  className="absolute inset-0 z-20 cursor-pointer disabled:pointer-events-none"
                >
                  <span className="sr-only">Bring {project.name} forward</span>
                </button>
              ) : null}
            </motion.div>
          )
        })}
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Show previous project"
          disabled={isAnimating || projects.length < 2}
          onClick={() => void showPreviousProject()}
          className="text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
        >
          <ChevronLeft aria-hidden="true" className="size-5" />
        </button>

        <span className="min-w-12 text-center font-mono text-xs text-muted-foreground">
          {cardOrder[0] + 1} / {projects.length}
        </span>

        <button
          type="button"
          aria-label="Show next project"
          disabled={isAnimating || projects.length < 2}
          onClick={() => void showNextProject()}
          className="text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
        >
          <ChevronRight aria-hidden="true" className="size-5" />
        </button>
      </div>
    </div>
  )
}

function HomeProjectSlider() {
  return (
    <MotionConfig reducedMotion={import.meta.env.PROD ? "user" : "never"}>
      <HomeProjectSliderContent />
    </MotionConfig>
  )
}

export default function Home() {
  const visibleTechStack = homeTechStack.slice(0, homeTechStackPreviewCount)
  const hiddenTechCount = homeTechStack.length - visibleTechStack.length
  const visibleExperience = experienceGroups
    .flatMap((group) =>
      group.roles.map((role) => ({ ...role, company: group.company })),
    )
    .slice(0, 2)

  return (
    <section className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-2xl flex-col items-start justify-start py-6">
      <h1 className="m-0 text-[clamp(2rem,4.5vw,3.75rem)] leading-tight tracking-[0.04em] text-foreground">
        {homeName}
      </h1>

      <div className="max-w-2xl space-y-5 py-10 text-base leading-7 text-foreground/85 lg:text-base">
        {homeIntroParagraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph.map((segment, segmentIndex) =>
              segment.strong ? (
                <span key={segmentIndex} className="font-semibold text-foreground">
                  {segment.text}
                </span>
              ) : (
                <span key={segmentIndex}>{segment.text}</span>
              ),
            )}
          </p>
        ))}
      </div>

      <div className="w-full max-w-2xl py-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
            {homeProjectsTitle}
          </h2>

          <Link
            to="/projects"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            All Projects
          </Link>
        </div>

        <HomeProjectSlider />
      </div>

      <div className="w-full max-w-2xl py-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
            {homeSectionTitle}
          </h2>

          <Link
            to="/tech-stack"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View All
          </Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {visibleTechStack.map((tech) => {
            const details = homeTechLinks[tech as keyof typeof homeTechLinks]
            const TechIcon = details.icon

            return (
              <a
                key={tech}
                href={details.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${tech} official website (opens in a new tab)`}
                className="inline-flex h-auto items-center gap-1.5 rounded-md border border-border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <TechIcon aria-hidden="true" className="size-3 shrink-0" />
                {tech}
              </a>
            )
          })}
          {hiddenTechCount > 0 ? (
            <span className="inline-flex h-auto items-center rounded-md border border-border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
              + {hiddenTechCount} more
            </span>
          ) : null}
        </div>
      </div>

      <div className="w-full max-w-2xl py-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
            {homeExperienceTitle}
          </h2>

          <Link
            to="/experience"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View All
          </Link>
        </div>

        <ul className="mt-6 divide-y divide-border border-y border-border">
          {visibleExperience.map((role) => (
            <li
              key={`${role.title}-${role.period}`}
              className="grid grid-cols-[7rem_minmax(0,1fr)] items-center gap-x-4 gap-y-1 py-4 sm:grid-cols-[7rem_minmax(0,1fr)_auto]"
            >
              <p className="font-mono text-xs whitespace-nowrap text-muted-foreground">
                {getExperienceYears(role.period)}
              </p>
              <p className="min-w-0 text-sm font-medium text-foreground lg:text-base">
                {role.title}
              </p>
              <p className="col-start-2 text-sm text-muted-foreground sm:col-start-auto sm:text-right sm:whitespace-nowrap">
                {role.company}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <GitHubContributions />
    </section>
  )
}
