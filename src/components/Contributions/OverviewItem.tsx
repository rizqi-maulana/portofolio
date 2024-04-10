import Card from '@/components/elements/card';

interface OverviewItemProps {
    label: string;
    value: number;
    unit?: string;
}

const OverviewItem = ({ label, value, unit = '' }: OverviewItemProps) => (
    <Card className='flex flex-col self-center rounded-xl  py-3 px-4 border border-neutral-900'>
        <span className='md:text-sm lg:text-xl text-xs text-neutral-400'>{label}</span>
        <div className='flex items-center gap-2'>
            <div className='md:text-sm lg:text-xl text-xs font-medium text-green-600'>{value}</div>
            {unit && <span className='md:text-sm lg:text-xl text-xs text-neutral-400'> {unit}</span>}
        </div>
    </Card>
);

export default OverviewItem;