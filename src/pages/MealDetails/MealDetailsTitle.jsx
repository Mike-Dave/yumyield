import { FaHouse } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Title from "../../components/Reuseable/Title";
import { useNavigate } from "react-router-dom";

function MealDetailsTitle({ details }) {
  const navigate = useNavigate();
  const { strMeal } = details[0] || {};
  return (
    <div className="mx-auto container">
      <div className="flex items-center gap-2  bg-gray-800 p-4 mt-10 mx-4">
        <FaHouse
          className="fill-red-400 h-[40px] w-[20px] cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
        <MdKeyboardDoubleArrowRight className="fill-red-400 h-[40px] w-[20px]" />
        <p className="text-red-400 font-ptSerif uppercase">{strMeal}</p>
      </div>

      <Title titleText="Meal Details" />
    </div>
  );
}

export default MealDetailsTitle;
