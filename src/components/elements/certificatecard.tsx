import Image, { StaticImageData } from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";

interface CertificateCardProp {
  src: StaticImageData;
  alt: string;
  file: string;
  title: string;
}

const CertificateCard = ({ src, alt, file, title }: CertificateCardProp) => {
  return (
    <a href={file} download className="relative">
      <Image
        src={src}
        alt={alt}
        quality={100}
        className="w-lg h-lg rounded-lg object-cover"
        sizes="100vw"
      />
      <div className="w-full h-full bg-black/50 absolute top-0 grid place-items-center hover:bg-transparent transition-all duration-300 ease-in-out rounded-lg">
        <div className="flex flex-col gap-2 items-center justify-center text-center">
          <h2>{title}</h2>
          <div className="flex items-center gap-2 text-white text-xs">
            <FaCloudDownloadAlt className="text-2xl" size={20} />
            <p>Click to Download</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CertificateCard;
