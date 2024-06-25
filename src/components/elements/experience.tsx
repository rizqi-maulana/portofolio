import Image from "next/image";

interface ExperienceType {
  Company: string,
  Location: string,
  Date: string,
  ExpeImage: any
}

export const Experience = ({ Company, Location, Date, ExpeImage }: ExperienceType) => {
  return (
    <div className="md:h-[120px] md:w-[400px] w-[235px] h-[90px] bg-[#151527] rounded-[5px] mt-5 flex items-center justify-evenly">
      <Image
        src={ExpeImage}
        className='w-[40px] h-[40px] md:w-[70px] md:h-[70px] object-cover'
        width={70}
        height={70}
        alt="Experience image"
        sizes="100vw"
      />
      <div>
        <h2 className='font-bold text-[15px] md:text-xl'>{Company}</h2>
        <div className='text-[#999999] text-[10px] md:text-sm'>
          <p>• {Location}</p>
          <p>{Date}</p>
        </div>

      </div>
    </div>
  )
}