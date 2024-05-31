import { RiUploadCloud2Fill } from "react-icons/ri";


interface UploadProjectBtnType {
  access: boolean,
  SetUploadProject: any
}

export const UploadProjectBtn = ({ access, SetUploadProject }: UploadProjectBtnType) => {
  return (
    <>
      {
        access &&
        <button onClick={() => SetUploadProject(true)} className="mx-auto flex mt-5 items-center bg-[#151527] px-3 py-2 rounded-[5px]"><RiUploadCloud2Fill className="mr-2" /> Upload Project</button>
      }
    </>
  )
}