import Header from "../../components/elements/header"
import Profile from "../../components/elements/profile"
import Contributions from "@/components/Contributions/Contributions"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Rizqi Maulana',
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
}

export default function Home() {
    return (
        <>
            <Header />
            <section className="md:px-56 px-3 pt-5">
                <main>
                    <Profile />
                </main>
                <div className="mt-10 w-full h-[1px] bg-[#919191]" />
            </section>
            <section className="md:px-56 px-3 mt-5">
                {
                    process.env.GITHUB_USERNAME ? <Contributions username={process.env.GITHUB_USERNAME} /> : null
                }
            </section>
        </>
    )
}