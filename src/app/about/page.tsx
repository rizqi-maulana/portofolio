import { Metadata } from "next";
import AboutElement from "./AboutElement";

export const metadata: Metadata = {
    title: 'About',
    description: "about me, explaining about myself starting from who I am, education, starting my career and the skills that I have."
};

export default function About() {
    return (
        <AboutElement />
    )
}
