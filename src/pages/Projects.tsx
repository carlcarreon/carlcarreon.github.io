import { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  Inbox,
  Send,
  ShieldCheck,
} from "lucide-react"
import { motion, MotionConfig, useAnimate } from "motion/react"
import { FaAws } from "react-icons/fa"
import { SiLaravel, SiReact, SiVuedotjs } from "react-icons/si"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { projects } from "@/data/project"

const technologyIcons = {
  aws: FaAws,
  inbox: Inbox,
  laravel: SiLaravel,
  react: SiReact,
  send: Send,
  shield: ShieldCheck,
  vue: SiVuedotjs,
}

type ProjectImageStackProps = {
  name: string
  images: string[]
}

function ProjectImageStack({ name, images }: ProjectImageStackProps) {
  const cards: Array<string | null> =
    images.length > 0 ? images : [null, null]
  const [scope, animate] = useAnimate()
  const [cardOrder, setCardOrder] = useState(() =>
    cards.map((_, index) => index),
  )
  const [isAnimating, setIsAnimating] = useState(false)
  const offsetStep = cards.length > 1 ? 64 / (cards.length - 1) : 0

  async function bringCardForward(card: number) {
    if (card === cardOrder[0] || isAnimating) return

    const outgoingCard = `[data-project-card="${cardOrder[0]}"]`
    const incomingCard = `[data-project-card="${card}"]`
    const nextOrder = [card, ...cardOrder.filter((item) => item !== card)]

    setIsAnimating(true)

    try {
      await Promise.all([
        animate(
          outgoingCard,
          { x: -16, y: 16 },
          { duration: 0.2, ease: "easeOut" },
        ),
        animate(
          incomingCard,
          { x: 80, y: 24 },
          { duration: 0.2, ease: "easeOut" },
        ),
      ])

      await Promise.all(
        nextOrder.map((cardIndex, position) =>
          animate(
            `[data-project-card="${cardIndex}"]`,
            { zIndex: 30 - position },
            { duration: 0 },
          ),
        ),
      )
      setCardOrder(nextOrder)

      await Promise.all(
        nextOrder.map((cardIndex, position) =>
          animate(
            `[data-project-card="${cardIndex}"]`,
            { x: position * offsetStep, y: position * offsetStep },
            {
              type: "spring",
              stiffness: 260,
              damping: 24,
              mass: 0.8,
            },
          ),
        ),
      )
    } finally {
      setIsAnimating(false)
    }
  }

  return (
    <div ref={scope} className="mb-10 mt-6 w-full">
      <figure
        aria-label={`${name} image gallery`}
        className="relative aspect-video w-full"
      >
        {cards.map((image, card) => {
          const position = cardOrder.indexOf(card)
          const isFront = position === 0

          return (
            <motion.button
              key={card}
              type="button"
              data-project-card={card}
              aria-label={
                isFront
                  ? `${name} image ${card + 1}, active`
                  : `Bring ${name} image ${card + 1} forward`
              }
              aria-pressed={isFront}
              disabled={isAnimating || isFront}
              initial={{
                x: position * offsetStep,
                y: position * offsetStep,
                zIndex: 30 - position,
              }}
              onClick={() => void bringCardForward(card)}
              className={`absolute bottom-16 left-0 right-16 top-0 flex items-center justify-center overflow-hidden border border-border bg-card ${isFront ? "cursor-default shadow-xl" : "cursor-pointer hover:brightness-95 dark:hover:brightness-110"}`}
            >
              {image ? (
                <img
                  src={image}
                  alt={`${name} screenshot ${card + 1}`}
                  className="size-full origin-top scale-[1.2] object-cover object-top"
                />
              ) : (
                <ImageIcon
                  aria-hidden="true"
                  className="size-7 text-muted-foreground/60"
                />
              )}
            </motion.button>
          )
        })}
      </figure>

      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label={`Show previous ${name} image`}
          disabled={isAnimating || cards.length < 2}
          onClick={() =>
            void bringCardForward(
              (cardOrder[0] - 1 + cards.length) % cards.length,
            )
          }
          className="text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
        >
          <ChevronLeft aria-hidden="true" className="size-5" />
        </button>

        <span className="min-w-12 text-center font-mono text-xs text-muted-foreground">
          {cardOrder[0] + 1} / {cards.length}
        </span>

        <button
          type="button"
          aria-label={`Show next ${name} image`}
          disabled={isAnimating || cards.length < 2}
          onClick={() =>
            void bringCardForward((cardOrder[0] + 1) % cards.length)
          }
          className="text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
        >
          <ChevronRight aria-hidden="true" className="size-5" />
        </button>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <MotionConfig reducedMotion={import.meta.env.PROD ? "user" : "never"}>
      <main className="mx-auto min-h-[calc(100vh-6rem)] w-full max-w-3xl">
        <header className="flex flex-col gap-4 pb-10">
          <h1 className="m-0 text-3xl text-foreground">Projects</h1>
          <p className="max-w-3xl text-sm leading-7 text-foreground/85 lg:text-base">
            I enjoy turning ideas into practical software — especially tools that solve real problems and become something people can actually use every day.
          </p>
        </header>

        <article className="flex flex-col gap-30">
          {projects.map((project) => (
            <div key={project.name}>
              <h2 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                {project.name}
              </h2>
              <p className="mt-2 w-full text-sm leading-7 text-foreground/75 lg:text-base">
                {project.description}
              </p>

              <ProjectImageStack
                name={project.name}
                images={project.images}
              />

              <Separator />

              <section className="py-4" aria-label="Technology stack">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Built with
                </p>
                <ul className="mt-3 flex list-none flex-wrap gap-2">
                  {project.stack.map((technology) => {
                    const TechnologyIcon = technologyIcons[technology.icon]

                    return (
                      <li key={technology.name}>
                        <a
                          href={technology.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${technology.name} official documentation (opens in a new tab)`}
                        >
                          <Badge
                            variant="outline"
                            className="h-auto rounded-md bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                          >
                            <TechnologyIcon aria-hidden="true" />
                            {technology.name}
                          </Badge>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </section>

              <Separator />
            </div>
          ))}
        </article>
      </main>
    </MotionConfig>
  )
}
