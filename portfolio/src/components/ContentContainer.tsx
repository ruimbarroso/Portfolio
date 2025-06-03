import type { ReactNode } from "react";
import { LoadingPoints } from "./widgets/LoadingPoints";

const ContentContainer = ({children, label, isLoading}: {children: ReactNode, label: string, isLoading: boolean})=>{
    return (
        <div className="w-full lg:w-[60vw] p-6 sm:p-12 flex justify-center items-start h-full">
          <div className="flex flex-col gap-8 pb-4 w-full">
            <h1 className="text-3xl font-bold border-b-2 border-[#F2CDA1] pb-2">
              {label}
            </h1>
            {isLoading? <div className="w-full h-full flex justify-center"><LoadingPoints /></div> : children}
          </div>
        </div>
      );
};
export default ContentContainer;