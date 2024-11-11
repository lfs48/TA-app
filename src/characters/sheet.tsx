import { ArcType } from "@/enums";
import { ArcInput } from "./arc-input";

export function Sheet() {
    return(
        <div className='p-6 space-y-2'>
            <ArcInput
                arcType={ArcType.Anomaly}
            />
            <ArcInput
                arcType={ArcType.Reality}
            />
            <ArcInput
                arcType={ArcType.Competency}
            />
        </div>
    )
}