'use client'

import { useRef, useEffect, useState, FormEvent } from "react";
import { LuImagePlus } from "react-icons/lu";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
import { RiUploadCloud2Fill } from "react-icons/ri";
import { lineWobble } from 'ldrs'
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function UpdateProject({ closeModal }: any) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const outside = useRef(null)
    const [Title, setTitle] = useState<string>('');
    const [Description, setDescription] = useState<string>('');
    const [Website, setWebsite] = useState<string>('null');
    const [Github, setGithub] = useState<string>('null');
    const [SelectedImage, setSelectedImage] = useState<string>('');
    const [SelectedFile, setSelectedFile] = useState<File | undefined>()
    const [Uploaded, setUploaded] = useState<boolean>(false)
    const [TechStackSelection, setTechStackSelection] = useState<{ tech: string, icon: string }[]>([]);
    const id: any = searchParams.get('id')



    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (e.target === outside.current) {
                router.push('/projects')
                closeModal(false)

            }
        })
        if (typeof window !== 'undefined') {
            lineWobble.register();
        }

        // Cleanup listener saat komponen di-unmount
        return () => {
            document.removeEventListener('click', () => { });
        };

    }, [closeModal, router])

    const handleImageUpload = async (event: any) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        setSelectedFile(file)
        reader.onloadend = () => {
            const imageDataUrl: any = reader.result;
            setSelectedImage(imageDataUrl);
        };

        reader.readAsDataURL(file);
    };

    useEffect(() => {
        const FetchProjectData = async () => {
            const formdata = new FormData()
            formdata.append('id', id)
            const response = await fetch('/api/fetch-update-project', {
                method: "POST",
                body: formdata

            })
            const data = await response.json()
            setTitle(data[0].title)
            setDescription(data[0].description)
            setWebsite(data[0].website)
            setGithub(data[0].github)
            setSelectedImage(data[0].thumb)
            const techStackData = data[0].techstack[0].TechStack.map((data: any) => data);
            const newTechStackSelection = techStackData.map((data: any) => ({ tech: data.tech, icon: data.icon }));
            setTechStackSelection(newTechStackSelection);

            techStackData.forEach((data: any) => {
                const checkbox = document.getElementById(data.tech) as HTMLInputElement;
                if (checkbox) {
                    checkbox.checked = true;
                }
            });


        }
        FetchProjectData()

    }, [id])

    const HandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUploaded(true)
        if (SelectedFile) {
            const Uuid = uuidv4()
            const FileName: string = `image_${Uuid}`
            const formdata = new FormData();
            formdata.append("Image", SelectedFile)
            formdata.append("FileName", FileName)
            const response = await fetch('/api/upload-image', {
                method: 'POST',
                body: formdata
            });
            const data = await response.json();
            if (data.status === true) FetchPorjectImg(FileName)
        } else {
            UploadData()
        }
    };

    const FetchPorjectImg = async (FileName: string) => {
        const formdata = new FormData()
        formdata.append('FileName', FileName)
        const response = await fetch('/api/project-img', {
            method: 'POST',
            body: formdata
        })
        const data = await response.json()
        const publicUrl = data.publicUrl

        if (data.status === 'success') UploadData(publicUrl);
    }

    const handleCheckboxChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;



        if (checked) {
            const formdata = new FormData()
            formdata.append('name', name)
            const response = await fetch('/api/tech', {
                method: "POST",
                body: formdata
            })
            const data = await response.json()

            setTechStackSelection(prevSelection => ([
                ...prevSelection,
                { tech: name, icon: data }
            ]));
        } else {
            setTechStackSelection(prevSelection => (
                prevSelection.filter(item => item.tech !== name)
            ));
        }
    };

    const UploadData = async (ImageUrl?: string) => {
        const formdata = new FormData()
        formdata.append("title", `${Title}`);
        formdata.append("description", `${Description}`);
        formdata.append("website", `${Website}`);
        formdata.append("github", `${Github}`);
        formdata.append("thumb", ImageUrl ? ImageUrl : SelectedImage);
        formdata.append("techstack", JSON.stringify(TechStackSelection.map((tech: any) => tech)));
        formdata.append('id', id)

        fetch('/api/update-project', {
            method: 'PATCH',
            body: formdata

        })

        router.push('/projects')
        closeModal(false);



    }
    return (
        <div className="w-full h-full fixed flex items-center justify-center flex-col z-[1003] bg-[#0D0D18]/40 top-0 left-0" ref={outside}>

            <form onSubmit={HandleSubmit} className="px-5 py-3 rounded-[5px] bg-[#151527] w-[300px] animate__animated animate__bounceIn">
                <div>

                    <div className="my-5 w-max mx-auto">
                        <label htmlFor="Image" className="border-2 border-white rounded-[5px] p-3 flex items-center"><LuImagePlus className="mr-2 w-5 h-5" />Upload Image</label>
                        <input type="file" name="Image" id="Image" accept="image/*" hidden onChange={handleImageUpload} />
                    </div>

                    {
                        SelectedImage && <div className="w-max h-max relative">
                            <h3 className="font-bold text-sm mb-1">Selected Image:</h3>
                            <Image src={SelectedImage} alt="Selected Image" width={100} height={100} className="mb-2" />
                        </div>
                    }

                    <label htmlFor="Name" className="font-bold text-sm">Project Name:</label>
                    <input type="text" id='Name' autoComplete="off" placeholder="Project Title" required value={Title} className='w-full h-[35px] border-2 border-white rounded-[8px] mt-1 mb-2 bg-transparent text-[11px] px-2' onChange={(e) => setTitle(e.target.value)} />

                    <label htmlFor="Description" className="font-bold text-sm">Description:</label>
                    <input type="text" id='Description' autoComplete="off" placeholder="Description of Your Project" required value={Description} className='w-full h-[35px] border-2 border-white rounded-[8px] mt-1 mb-2 bg-transparent text-[11px] px-2' onChange={(e) => setDescription(e.target.value)} />

                    <label htmlFor="" className="font-bold text-sm">Tech Stack:</label>
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
                                <input type="checkbox" name="ReactNative" id="ReactNative" className="tech_check mr-2" onChange={handleCheckboxChange} />
                                <span className="text-[12px]">React Native</span>
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
                    <label htmlFor="Repository" className="font-bold text-sm">Repository Link:</label>
                    <input type="text" id='Repository' autoComplete="off" placeholder="Repository Link" value={Github} className='w-full h-[35px] border-2 border-white rounded-[8px] mt-1 mb-2 bg-transparent text-[11px] px-2' onChange={(e) => setGithub(e.target.value)} />

                    <label htmlFor="Website" className="font-bold text-sm">Website Link:</label>
                    <input type="text" id='Website' value={Website} autoComplete="off" placeholder="Website Link" className='w-full h-[35px] border-2 border-white rounded-[8px] mt-1 mb-2 bg-transparent text-[11px] px-2' onChange={(e) => setWebsite(e.target.value)} />
                    <div className="w-full flex items-center justify-center">
                        {
                            Uploaded ?
                                <l-line-wobble
                                    size="80"
                                    stroke="5"
                                    bg-opacity="0.1"
                                    speed="1.75"
                                    color="white"
                                ></l-line-wobble> :
                                <button type="submit" className="flex items-center bg-[#0D0D18] px-3 py-2 rounded-[5px] w-max mt-2"><RiUploadCloud2Fill className="mr-2" /> Update Project</button>
                        }

                    </div>
                </div>

            </form>
        </div>
    );
}
