import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingCTA } from "@/components/floating-cta";
import {
  CONTACT_EMAIL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  TELEGRAM_URL,
} from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Content, educators, community management, websites, and learning products for ambitious IAS coaching academies.",
  keywords: [
    "IAS coaching",
    "UPSC preparation",
    "CSE study materials",
    "UPSC educators",
    "IAS academy website",
    "UPSC Telegram",
    "IAS coaching services",
  ],
  authors: [{ name: "Approaches to IAS" }],
  creator: "Approaches to IAS",
  publisher: "Approaches to IAS",
  category: "Education",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      "A coherent operating system for IAS coaching content, educators, community, websites, and learning products.",
    images: [
      {
        url: "/images/og-gallery.png",
        width: 1200,
        height: 630,
        alt: "Approaches to IAS. UPSC and Beyond.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      "A coherent operating system for IAS coaching content, educators, community, websites, and learning products.",
    images: ["/images/og-gallery.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "EducationalOrganization"],
  name: SITE_NAME,
  slogan: SITE_TAGLINE,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.svg`,
  email: CONTACT_EMAIL,
  description:
    "Services and learning products for the UPSC coaching ecosystem.",
  sameAs: [TELEGRAM_URL],
  knowsAbout: [
    "UPSC Civil Services Examination",
    "IAS coaching",
    "Study materials",
    "Education technology",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-[100dvh] flex-col antialiased">
        <a
          href="#main-content"
          className="fixed left-3 top-3 z-[60] -translate-y-20 rounded-[4px] bg-primary px-4 py-3 text-sm font-semibold text-on-primary focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
