import GitHubContributions from "../components/GitHubContributions"
import { Separator } from "@/components/ui/separator"
import {
  homeIntroParagraphs,
  homeName,
  homeSectionTitle,
} from "@/data/home"

export default function Home() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-3xl flex-col items-start justify-start py-6">
      <h1 className="m-0 text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.06em] text-slate-50">
        {homeName}
      </h1>

      <div className="mt-6 max-w-2xl space-y-5 text-base leading-7 text-white/85 lg:text-lg">
        {homeIntroParagraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph.map((segment, segmentIndex) =>
              segment.strong ? (
                <span key={segmentIndex} className="font-semibold text-white">
                  {segment.text}
                </span>
              ) : (
                <span key={segmentIndex}>{segment.text}</span>
              ),
            )}
          </p>
        ))}
      </div>

      <Separator className="my-4 w-full max-w-2xl bg-white/10" />

      <h2 className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-400">
        {homeSectionTitle}
      </h2>

      <GitHubContributions />
    </section>
  )
}
