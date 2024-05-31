import 'animate.css';
import "@globals";
import { poppins } from "@/assets/fonts/fonts";
import Header from '@/components/elements/header';
import { Metadata } from "next";
import { GetPassword } from '@/providers/getPasswords';

export const metadata: Metadata = {
  title: {
    default: "Maulanya",
    template: '%s | Maulanya',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <GetPassword>
          {children}
        </GetPassword>
      </body>
    </html>
  );
}
