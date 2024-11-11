import { ArcType } from "@/enums";
import { RiTriangleFill } from "@remixicon/react";

interface ArcInputProps {
    arcType: ArcType;
}

export function ArcInput({
    arcType
}: ArcInputProps) {

    const { text, border, label } = arcProps[arcType];

    return(
        <div className='flex items-center'>
            <div className='relative'>
                <RiTriangleFill size={40} className={`${text} leading-none z-[1]`}/>
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[35%] 
                font-roboto font-bold text-white text-xl leading-none`}>
                    {label}
                </div>
            </div>
            <div className="-ml-1 pt-[3px]">
                <input
                    className={`${text} ${border} border-b-2 pl-1
                    focus:outline-none`}
                ></input>
            </div>
        </div>
    )
}

const arcProps = {
    [ArcType.Anomaly]: {
        text: 'text-anomaly-blue',
        border: 'border-b-anomaly-blue',
        label: 'A',
    },
    [ArcType.Reality]: {
        text: 'text-reality-yellow',
        border: 'border-b-reality-yellow',
        label: 'R',
    },
    [ArcType.Competency]: {
        text: 'text-agency-red',
        border: 'border-b-agency-red',
        label: 'C',
    }
};