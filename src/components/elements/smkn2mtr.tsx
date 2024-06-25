import smkn2mtr from '@/assets/image/LOGO SMKN 2.png';
import Image from 'next/image';

export const Smkn2mtr = () => {
    return (
        <div className="md:h-[120px] md:w-[400px] w-[235px] h-[90px] bg-[#151527] rounded-[5px] mt-5 flex items-center justify-evenly">
            <Image
                src={smkn2mtr}
                className='w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-cover'
                width={70}
                height={70}
                alt="SMKN 2 MATARAM"
                sizes='100vw'
            />
            <div>
                <h2 className='font-bold text-[15px] md:text-xl'>SMKN 2 MATARAM</h2>
                <div className='text-[#999999] text-[10px] md:text-sm'>
                    <p>• Mataram, Indonesia</p>
                    <p>2022 - Now</p>
                </div>

            </div>
        </div>
    )
}