import { Metadata } from "next";
import AboutElement from "../../components/template/about/AboutElement";

export const metadata: Metadata = {
  title: "About",
  description:
    "about me, explaining about myself starting from who I am, education, starting my career and the skills that I have.",
  keywords: "About Rizqi Maulana Portofolio Mauln",
};

export default function About() {
  return <AboutElement />;
}
