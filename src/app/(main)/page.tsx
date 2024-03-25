import Header from "../../components/elements/header"
import Profile from "../../components/elements/profile"
import Contributions from "@/components/Contributions/Contributions"

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