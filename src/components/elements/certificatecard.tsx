import Image, { StaticImageData } from "next/image";

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
        <h2>{title}</h2>
      </div>
    </a>
  );
};

export default CertificateCard;
