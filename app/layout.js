import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import "react-day-picker/dist/style.css";
import { Toaster } from "sonner";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { BackgroundBeams } from "@/components/ui/background-beams"; // Ensure correct path
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trackr",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
        variables: {
          colorPrimary: "#3b82f6",
          colorBackground: "#1a202c",
          colorInputBackground: "#2D3748",
          colorInputText: "#F3F4F6",
        },
        elements: {
          formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-white",
          card: "bg-gray-800",
          headerTitle: "text-blue-400",
          headerSubtitle: "text-gray-400",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.className} relative`}>
          {/* Render the BackgroundBeams component as the full-page background */}
          <BackgroundBeams className="absolute inset-0 -z-10" />
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            <footer className="bg-gray-900 py-12 mt-16">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p className="mt-2">Made with ❤️ by Ayush</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}