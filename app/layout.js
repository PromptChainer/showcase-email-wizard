import "./globals.css";
import { Inter } from "next/font/google";
import GoogleAnalytics from "../components/GoogleAnalytics"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EmailWizard by PromptChainer",
  description: "Powered by PromptChainer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
        <GoogleAnalytics
          GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID}
        />
      )}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
