import { Skillcard } from "./skillcard";
import { useState, useEffect } from "react";

export const Skillcontainer = () => {
    const [skillsData, setSkillsData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await fetch('/api/skills', {
                    method: "GET"
                });
                const data = await response.json();
                if (data) {
                    setSkillsData(data);

                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching skills:", error);
                setLoading(false);
            }
        };
        fetchSkills();
    }, []);

    useEffect(() => {
        async function getLoader() {
            const { cardio } = await import('ldrs')
            cardio.register()
        }
        getLoader()
    }, [])

    return (
        <div className="mt-2 lg:w-[800px]">
            {loading ? (
                <l-cardio
                    size="45"
                    speed="2"
                    color="white"
                ></l-cardio>
            ) : (
                <div className="w-full">
                    <Skillcard items={skillsData} />
                    <Skillcard items={skillsData} direction="right" />
                    <Skillcard items={skillsData} />
                </div>
            )}
        </div>
    );
};
