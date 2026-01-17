import "./globals.css";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Taksh Shah | Portfolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
