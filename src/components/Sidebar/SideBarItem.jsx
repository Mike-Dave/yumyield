import { Link } from "react-router-dom";
import { useRecipes } from "../../contexts/RecipeContext";

function SideBarItem({ foodName, description }) {
  const { setShowSideBar } = useRecipes();
  return (
    <Link
      to={{
        pathname: `/meal/category/${foodName}`,
      }}
      state={{ description, foodName }}
      onClick={() => {
        setShowSideBar(false);
      }}
    >
      <p className="p-1 px-3 hover:text-red-800">{foodName}</p>
      <hr className="border-t-4 border-red-400" />
    </Link>
  );
}

export default SideBarItem;
