import "./globals.css";
import Navbar from "@/components/Navbar";

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
      </body>
    </html>
  );
}
