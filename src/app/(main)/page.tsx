import Main from "@/components/template/main/Main"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Rizqi Maulana',
    description: "Hi, I'm Rizqi Maulana or often called Maulana and I'm a web developer, this is my portfolio, explaining my area of ​​expertise and what projects I've created.",
    keywords: 'Muhammad Rizqi Maulana Portofolio Maulanya',
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
}

export default function Home() {
    return (
        <Main />
    )
}