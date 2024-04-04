import 'animate.css';
import "@globals";
import { poppins } from "@/assets/fonts/fonts";
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
      <body className={`${poppins.className} container mx-auto`}>
        <GetPassword>
          {children}
        </GetPassword>
      </body>
    </html>
  );
}
