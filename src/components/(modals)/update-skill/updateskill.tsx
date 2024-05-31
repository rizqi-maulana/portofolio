'use client'

import { FaRocket } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";

export default function UpdateSkill({ closeModal }: any) {
    const [MySkills, setMySkills] = useState<{ name: string, icon: string }[]>([]);
    const outside = useRef(null)


    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (e.target === outside.current) {
                closeModal(false)
            }
        })

    }, [closeModal])

    useEffect(() => {
        const fetchSkill = async () => {


            const response = await fetch('/api/fetch-update-skill', {
                method: "GET"
            })
            const data = await response.json()
            setMySkills(data);
            const FetchMySkills = data.map((data: any) => data)
            setMySkills(FetchMySkills)
            FetchMySkills.forEach((data: any) => {
                const checkbox = document.getElementById(data.name) as HTMLInputElement;
                if (checkbox) {
                    checkbox.checked = true;
                }
            });
        }
        fetchSkill()
    }, [])

    const handleCheckboxChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;

        if (checked) {
            // Code untuk menambahkan skill
            const formdata = new FormData()
            formdata.append('name', name)
            const response = await fetch('/api/tech', {
                method: "POST",
                body: formdata
            })
            const data = await response.json()

            setMySkills(prevSelection => ([
                ...prevSelection,
                { name: name, icon: data }
            ]));
        } else {
            // Code untuk menghapus skill
            setMySkills(prevSelection => (
                prevSelection.filter(item => item.name !== name)
            ));
        }
    };


    const UpdateSkill = async (e: any) => {
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('skills', JSON.stringify(MySkills.map((data: any) => data)))
        await fetch('/api/update-skill', {
            method: "PATCH",
            body: formdata
        })
        closeModal(false)

    }


    return (
        <div className="w-[100vw] h-[100vh] flex items-center justify-center fixed z-[1001] bg-[#0D0D18]/40 top-0" ref={outside}>
            <div className="px-5 py-3 rounded-[5px] bg-[#151527] animate__animated animate__bounceIn">
                <h2 className="font-bold text-xl text-center mb-7">Update My Skill</h2>
                <form onSubmit={UpdateSkill} className="flex flex-col items-center">
                    <div className="grid grid-cols-2 gap-4">

                        <div>
                            <label className="flex items-center">
                                <input type="checkbox" name="Javascript" id="Javascript" className="tech_check mr-2" onChange={handleCheckboxChange} />
                                <span className="text-[12px]">Javascript</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" name="NodeJS" id="NodeJS" className="tech_check mr-2" onChange={handleCheckboxChange} />
                                <span className="text-[12px]">NodeJS</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" name="Typescript" id="Typescript" className="tech_check mr-2" onChange={handleCheckboxChange} />
                                <span className="text-[12px]">Typescript</span>
                            </label>
                        </div>
                        <div>
                            <label className="flex items-center">
                                <input type="checkbox" name="ReactJS" id="ReactJS" className="tech_check mr-2" onChange={handleCheckboxChange} />
                                <span className="text-[12px]">ReactJS</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" name="NextJS" id="NextJS" className="tech_check mr-2" onChange={handleCheckboxChange} />
                                <span className="text-[12px]">NextJS</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" name="Tailwind" id="Tailwind" className="tech_check mr-2" onChange={handleCheckboxChange} />
                                <span className="text-[12px]">Tailwind</span>
                            </label>
                        </div>
                        <div>
                            <label className="flex items-center">
                                <input type="checkbox" name="MongoDB" id="MongoDB" className="tech_check mr-2" onChange={handleCheckboxChange} />
                                <span className="text-[12px]">MongoDB</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" name="HTML" id="HTML" className="tech_check mr-2" onChange={handleCheckboxChange} />
                                <span className="text-[12px]">HTML</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" name="CSS" id="CSS" className="tech_check mr-2" onChange={handleCheckboxChange} />
                                <span className="text-[12px]">CSS</span>
                            </label>
                        </div>
                        <div>
                            <label className="flex items-center">
                                <input type="checkbox" name="Git" id="Git" className="tech_check mr-2" onChange={handleCheckboxChange} />
                                <span className="text-[12px]">Git</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" name="MySQL" id="MySQL" className="tech_check mr-2" onChange={handleCheckboxChange} />
                                <span className="text-[12px]">MySQL</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" name="Supabase" id="Supabase" className="tech_check mr-2" onChange={handleCheckboxChange} />
                                <span className="text-[12px]">Supabase</span>
                            </label>
                        </div>
                        <div>
                            <label className="flex items-center">
                                <input type="checkbox" name="Bun" id="Bun" className="tech_check mr-2" onChange={handleCheckboxChange} />
                                <span className="text-[12px]">Bun</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" name="Markdown" id="Markdown" className="tech_check mr-2" onChange={handleCheckboxChange} />
                                <span className="text-[12px]">Markdown</span>
                            </label>
                        </div>
                    </div>
                    <button className="flex items-center bg-[#0D0D18] px-3 py-2 rounded-[5px] mt-2"><FaRocket className="mr-2" /> Update Skill</button>


                </form>
            </div>
        </div>
    );
}
