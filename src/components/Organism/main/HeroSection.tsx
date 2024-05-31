import Profile from "@/components/elements/profile"

export default function HeroSection() {
  return (
    <section className="md:px-10 lg:px-56 px-3 pt-5">
      <main>
        <Profile />
      </main>
      <div className="mt-10 w-full h-[1px] bg-[#919191]" />
    </section>
  )
}