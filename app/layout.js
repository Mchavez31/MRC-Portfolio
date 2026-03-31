import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import BootIntro from "@/app/components/BootIntro";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Michael Chavez | Portfolio",
  description:
    "Software engineer and AI developer portfolio — projects, experience, and contact.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className={`${dmSans.className} min-h-full flex flex-col`}>
        <BootIntro />
        {children}
      </body>
    </html>
  );
}
