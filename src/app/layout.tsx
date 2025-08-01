import "animate.css";
import { poppins } from "@/assets/fonts/fonts";
import Header from "@/components/elements/header";
import { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./Context";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Maulana",
    template: "%s | Maulana",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <UserProvider>
          <Header />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
