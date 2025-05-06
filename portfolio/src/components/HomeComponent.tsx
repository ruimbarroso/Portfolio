import { useEffect, useState } from "react";
import { LoadingPoints } from "./widgets/LoadingPoints";
import { useAppContext } from "../contexts/types";

const HomeComponent = () => {
  const { state } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(state.homeContent === null);
  }, [state]);

  return (
    <div className="box-border w-full h-full sm:w-[50vw] m-0 p-6 sm:p-12 flex justify-center items-start">
      <div className="flex flex-col gap-8 items-center text-center">
        <img
          src="/ruibarroso.png"
          alt="Rui Barroso"
          width="200"
          className="shadow-lg"
        />
        {isLoading ? (
          <div className="py-10">
            <LoadingPoints />
          </div>
        ) : (
          state.homeContent?.map((p, i) => (
            <p
              key={i}
              className="text-lg sm:text-xl text-gray-200 leading-relaxed tracking-tight"
            >
              {p}
            </p>
          ))
        )}
      </div>
    </div>
  );
};
export default HomeComponent;
