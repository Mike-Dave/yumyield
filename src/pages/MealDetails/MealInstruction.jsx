import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
function MealInstruction({ instructions }) {
  const splittedInstructions = instructions?.split("\r\n").filter(Boolean);

  return (
    <div className="mx-auto container">
      <div className="p-4">
        <h3 className="font-bold font-ptSerif text-xl">Instructions:</h3>
        {splittedInstructions?.map((instruct, index) => (
          <div key={index} className="flex md:items-center ">
            <VscDebugBreakpointLogUnverified className="fill-red-400 h-[30px] w-[30px]" />
            <p className="w-full pt-1 md:pt-0">{instruct}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MealInstruction;
