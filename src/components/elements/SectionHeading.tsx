import { ReactNode } from 'react';

interface SectionHeadingProps {
    title: string;
    className?: string;
    icon?: ReactNode;
}

const SectionHeading = ({
    title,
    icon,
    className = '',
}: SectionHeadingProps) => {
    return (
        <div
            className={`flex items-center gap-1.5 text-xl font-medium text-neutral-300 ${className}`}
        >
            {icon && <>{icon}</>}
            <h2 className='capitalize md:text-sm sm:text-xs'>{title}</h2>
        </div>
    );
};

export default SectionHeading;