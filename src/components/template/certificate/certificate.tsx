import CertificateCard from "@/components/elements/certificatecard";
import SMMaulana from "@/assets/image/SM_Maulana.png";
import SPMaulana from "@/assets/image/SP_Maulana.png";
function CertificateElement() {
  return (
    <section className="px-3 flex flex-col items-center md:px-10 md:flex-wrap md:grid md:grid-cols-2 md:w-max md:mx-auto mt-10 md:gap-20 gap-10">
      <CertificateCard
        alt="teaching certificate"
        src={SMMaulana}
        title="Teaching Certificate"
        file="/SM_Muhammad_Rizqi_Maulana_e74194f4-55ce-4053-8921-6a4379a639f2.pdf"
      />
      <CertificateCard
        alt="certificate of appreciation"
        src={SPMaulana}
        title="Certificate of Appreciation"
        file="/SP_Muhammad_Rizqi_Maulana_e74194f4-55ce-4053-8921-6a4379a639f2.pdf"
      />
    </section>
  );
}

export default CertificateElement;
