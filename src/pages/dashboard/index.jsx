import { LineGrafic } from '@/components/LineGrafic';
import { BarGraph } from '@/components/BarGraph';

function Dashboard() {
    return (
        <div className='flex flex-col items-center w-full'>
            <div className='grid grid-cols-2 gap-5'>
                <div className='w-[500px] h-auto '>
                    <LineGrafic/>
                </div>
                <div className='w-[500px] h-auto'>
                    <BarGraph/>
                </div>
            </div>
        </div>
    );
}

export { Dashboard };
