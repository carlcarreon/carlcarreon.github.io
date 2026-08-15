export type TechnologyIcon =
  | "aws"
  | "inbox"
  | "laravel"
  | "react"
  | "send"
  | "shield"
  | "vue"

export type ProjectTechnology = {
  name: string
  url: string
  icon: TechnologyIcon
}

export type Project = {
  name: string
  description: string
  images: string[]
  stack: ProjectTechnology[]
}

export const projects: Project[] = [
  {
    name: "DocTrack",
    description:
      "Designed to improve document visibility and accountability across municipal offices by allowing users to track document status, current location, and responsible personnel. It helps reduce delays, prevent misplaced records, and support a more efficient and transparent document processing workflow.",
    images: [
      "/doctrack/landing.png",
      "/doctrack/documents.png",
      "/doctrack/tracking.png",
    ],
    stack: [
      { name: "Vue.js", url: "https://vuejs.org/", icon: "vue" },
      { name: "Laravel", url: "https://laravel.com/docs", icon: "laravel" },
      { name: "AWS S3", url: "https://aws.amazon.com/s3/", icon: "aws" },
      {
        name: "Spatie Rules & Permission",
        url: "https://spatie.be/docs/laravel-permission",
        icon: "shield",
      },
      {
        name: "Google SMTP",
        url: "https://support.google.com/a/answer/176600",
        icon: "send",
      },
    ],
  },
  {
    name: "Filing",
    description:
      "Designed to streamline filing and form management through automated email integration and form handling. The system retrieves and matches confirmation receipts with generated BIR forms, supports quarterly and annual filings, sends completed documents via SMTP, and includes a flexible form builder for different filing requirements.",
    images: [
      "/filing/landing.png",
      "/filing/dashboard.png",
      "/filing/tracking.png",
    ],
    stack: [
      { name: "React.js", url: "https://react.dev/", icon: "react" },
      { name: "Laravel", url: "https://laravel.com/docs", icon: "laravel" },
      {
        name: "Google IMAP",
        url: "https://support.google.com/mail/answer/7126229",
        icon: "inbox",
      },
      {
        name: "Google SMTP",
        url: "https://support.google.com/a/answer/176600",
        icon: "send",
      },
      {
        name: "Spatie Rules & Permission",
        url: "https://spatie.be/docs/laravel-permission",
        icon: "shield",
      },
      { name: "AWS S3", url: "https://aws.amazon.com/s3/", icon: "aws" },
    ],
  },
]
