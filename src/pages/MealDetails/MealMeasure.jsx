import { VscDebugBreakpointFunction } from "react-icons/vsc";
function MealMeasure({ measures }) {
  return (
    <div className="mx-auto container">
      <div className="p-4 ">
        <h3 className="font-bold font-ptSerif text-xl">Measure:</h3>
        <div className="grid grid-cols-2 p-4 items-center  border-red-400 border-4  mt-3 space-y-3">
          {measures.map((measure, index) => (
            <div className="flex md:items-center" key={index}>
              <VscDebugBreakpointFunction className="fill-red-400 h-[30px] w-[30px]" />
              <p className="w-full pt-1 md:pt-0">{measure}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MealMeasure;
