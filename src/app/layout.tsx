import 'animate.css';
import "@globals";
import { poppins } from "@/assets/fonts/fonts";
import { Metadata } from "next";
import { GetPassword } from '@/providers/getPasswords';

export const metadata: Metadata = {
  title: {
    default: "Rizqi Maulana | Maulanya",
    template: '%s | Maulanya',
  },
  description: "Hi, I'm Rizqi Maulana or often called Maulana and I'm a web developer, this is my portfolio, explaining my area of ​​expertise and what projects I've created.",
  keywords: 'Rizqi Maulana Portofolio Maulanya',
  openGraph: {
    title: 'Rizqi Maulana Portofolio',
    description: "Hi, I'm Rizqi Maulana or often called Maulana and I'm a web developer, this is my portfolio, explaining my area of ​​expertise and what projects I've created.",
    url: 'https://maulanya.com',
    siteName: 'Maulanya',
    images: [
      {
        url: 'https://discord.com/channels/887719589914501150/887719589914501153/1206814875305779230',
        width: 1200,
        height: 630
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <GetPassword>
          {children}
        </GetPassword>
      </body>
    </html>
  );
}
