export type TechnologyIcon =
  | "alpine"
  | "aws"
  | "inbox"
  | "docker"
  | "digitalocean"
  | "flutter"
  | "laravel"
  | "livewire"
  | "pdf"
  | "react"
  | "send"
  | "shield"
  | "scan"
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

const projectDefinitions: Project[] = [
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
    name: "QueueConnect",
    description:
      "Designed to improve appointment and queue management through a centralized system connected to a self-service kiosk. QueueConnect allows users to book appointments online, select services, monitor queue status, and receive real-time updates, while staff can manage appointments and serve queued users. The system also supports online and offline synchronization to maintain operations even with limited internet connectivity.",
    images: [
      "/qms/landing.png",
      "/qms/appointment-calendar.png",
      "/qms/seting-date-to-appointment.png",
      "/qms/approving-appointment.png",
    ],
    stack: [
      { name: "Laravel", url: "https://laravel.com/docs", icon: "laravel" },
      { name: "React.js", url: "https://react.dev/", icon: "react" },
      {
        name: "Laravel Reverb",
        url: "https://laravel.com/docs/reverb",
        icon: "laravel",
      },
      {
        name: "Google SMTP",
        url: "https://support.google.com/a/answer/176600",
        icon: "send",
      },
      {
        name: "Flutter",
        url: "https://flutter.dev/",
        icon: "flutter",
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
  {
    name: "DocSync",
    description:
      "Designed to centralize and organize digital and physical records in one document management system. DocSync allows users to upload, merge, categorize, search, and share documents while recording their physical cabinet and drawer locations. It also supports PDF processing, OCR-based search, document metadata, controlled sharing, and tracking to make records easier to locate, manage, and maintain.",
    images: [
      "/docsync/landing.png",
      "/docsync/filescan-indexing.png",
      "/docsync/cabinets.png",
    ],
    stack: [
      { name: "Laravel", url: "https://laravel.com/docs", icon: "laravel" },
      { name: "Vue.js", url: "https://vuejs.org/", icon: "vue" },
      {
        name: "Email SMTP",
        url: "https://support.google.com/a/answer/176600",
        icon: "send",
      },
      {
        name: "Tesseract OCR",
        url: "https://github.com/tesseract-ocr/tesseract",
        icon: "scan",
      },
      {
        name: "pdf.js",
        url: "https://mozilla.github.io/pdf.js/",
        icon: "pdf",
      },
    ],
  },
  {
    name: "PLCHUB",
    description:
      "Designed as a campus-focused social platform that connects students and users through real-time communication and interactive content. PLCHUB allows users to follow others, send real-time messages, participate in voting, view advertisements, and interact with a personalized newsfeed. The system was built to provide a centralized online community where campus users can communicate, share content, and stay connected.",
    images: [],
    stack: [
      { name: "Alpine.js", url: "https://alpinejs.dev/", icon: "alpine" },
      {
        name: "Livewire",
        url: "https://livewire.laravel.com/",
        icon: "livewire",
      },
      { name: "Laravel", url: "https://laravel.com/docs", icon: "laravel" },
      {
        name: "Email SMTP",
        url: "https://support.google.com/a/answer/176600",
        icon: "send",
      },
      { name: "Docker", url: "https://www.docker.com/", icon: "docker" },
      {
        name: "Laravel Reverb",
        url: "https://laravel.com/docs/reverb",
        icon: "laravel",
      },
      {
        name: "DigitalOcean",
        url: "https://www.digitalocean.com/",
        icon: "digitalocean",
      },
    ],
  },
]

function compareProjectTechnology(
  left: ProjectTechnology,
  right: ProjectTechnology,
) {
  const categoryPriority = (technology: ProjectTechnology) => {
    if (technology.icon === "laravel") return 0

    if (
      technology.icon === "react" ||
      technology.icon === "vue" ||
      technology.icon === "alpine" ||
      technology.icon === "livewire" ||
      technology.icon === "flutter"
    ) {
      return 1
    }

    return 2
  }

  const categoryDelta = categoryPriority(left) - categoryPriority(right)

  if (categoryDelta !== 0) {
    return categoryDelta
  }

  return left.name.localeCompare(right.name)
}

export const projects: Project[] = projectDefinitions.map((project) => ({
  ...project,
  stack: [...project.stack].sort(compareProjectTechnology),
}))
