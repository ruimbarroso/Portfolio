import { useEffect, useState } from "react";
import { LoadingPoints } from "./widgets/LoadingPoints";
import { useAppContext } from "../contexts/types";
import Portrait from "../assets/ruibarroso.png"
const AboutMeComponent = () => {
  const { state } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(state.homeContent === null);
  }, [state]);

  return (
    <div className="w-screen sm:w-[50vw] p-6 sm:p-12 flex flex-col items-center text-center">
      <div className="w-[180px] h-[180px] overflow-hidden rounded-xl border border-[#F2CDA1] shadow-lg mb-6">
        <img
          src={Portrait}
          alt="Rui Barroso"
          className="w-full h-full object-cover"
        />
      </div>


      {isLoading ? (
        <div className="py-10">
          <LoadingPoints />
        </div>
      ) : (
        <div className="space-y-4 max-w-150">
          {state.homeContent?.map((p, i) => (
            <p
              key={i}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed tracking-tight"
            >
              {p}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};


export default AboutMeComponent;