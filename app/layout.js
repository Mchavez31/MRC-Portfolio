import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import BootIntro from "@/app/components/BootIntro";
import CustomCursor from "@/app/components/CustomCursor";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Michael Chavez | Software Engineer & AI Developer",
  description:
    "Software Engineer with M.S. in Software Engineering specializing in full-stack development, AI/ML, and building data-driven solutions. 10+ years engineering experience. Seeking software engineering roles in Houston, TX.",
  keywords: [
    "software engineer",
    "full stack developer",
    "AI developer",
    "machine learning",
    "React",
    "Next.js",
    "Python",
    "JavaScript",
    "Houston TX",
    "portfolio"
  ],
  authors: [{ name: "Michael Chavez" }],
  openGraph: {
    title: "Michael Chavez | Software Engineer & AI Developer",
    description: "Software Engineer with M.S. in Software Engineering specializing in full-stack development and AI/ML.",
    url: "https://my-portfolio-mchavez31s-projects.vercel.app",
    siteName: "Michael Chavez Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Chavez | Software Engineer & AI Developer",
    description: "Software Engineer specializing in full-stack development and AI/ML",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
      style={{ background: 'black' }}
    >
      <body className={`${dmSans.className} min-h-full flex flex-col`}>
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        <BootIntro />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
