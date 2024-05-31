import Contributions from "@/components/Contributions/Contributions"

export const ContributionsSection = () => {
  return (
    <section className="md:px-10 lg:px-56 px-3 mt-5">
      {
        process.env.GITHUB_USERNAME ? <Contributions username={process.env.GITHUB_USERNAME} /> : null
      }
    </section>
  )
}