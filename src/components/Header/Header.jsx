import { MdOutlineFoodBank } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useRecipes } from "../../contexts/RecipeContext";

function Header() {
  const { setShowSideBar } = useRecipes();
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800">
      <nav className="flex justify-between p-3 bg-gray-800 mx-auto container cursor-pointer">
        <div
          className="flex items-center"
          onClick={() => {
            navigate("/");
          }}
        >
          <MdOutlineFoodBank className="text-red-400 w-[3rem] h-[2.5rem]" />
          <h1 className="font-bold text-red-400">YumYield</h1>
        </div>
        <MdOutlineMenu
          className="text-red-400 w-[3rem] h-[2.5rem]"
          onClick={() => {
            setShowSideBar(true);
          }}
        />
      </nav>
    </div>
  );
}
//
export default Header;
