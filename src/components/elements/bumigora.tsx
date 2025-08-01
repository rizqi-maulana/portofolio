import bumigora from "@/assets/image/LOGO BUMIGORA.png";
import Image from "next/image";

export const Bumigora = () => {
  return (
    <div className="md:h-[120px] md:w-[480px] w-full h-[90px] bg-[#151527] rounded-[5px] mt-5 flex items-center md:gap-10 md:px-10 px-5 gap-5">
      <Image
        src={bumigora}
        className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-cover"
        width={70}
        height={70}
        quality={100}
        alt="UNIVERSITAS BUMIGORA"
        sizes="100vw"
      />
      <div>
        <h2 className="font-bold text-base md:text-lg">Bumigora University</h2>
        <div className="text-white underline text-xs md:text-sm">
          <p>• Bachelor of Software Engineering</p>
        </div>
        {/* <div className="text-[#999999] text-xs md:text-sm">
          <p>• Mataram, Indonesia</p>
          <p>2025 - Now</p>
        </div> */}
      </div>
    </div>
  );
};
