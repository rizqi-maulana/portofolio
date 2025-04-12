import "animate.css";
import { poppins } from "@/assets/fonts/fonts";
import Header from "@/components/elements/header";
import { Metadata } from "next";
import { GetPassword } from "@/providers/getPasswords";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./Context";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mauln",
    template: "%s | Mauln",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} dark`}>
        <UserProvider>
          <Header />
          <GetPassword>{children}</GetPassword>
        </UserProvider>
      </body>
    </html>
  );
}
