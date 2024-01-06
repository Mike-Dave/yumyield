import { TiDeleteOutline } from "react-icons/ti";
import { useRecipes } from "../../contexts/RecipeContext";
function SideBarImage() {
  const { setShowSideBar } = useRecipes();
  return (
    <>
      <TiDeleteOutline
        className="w-[30px] h-[40px] m-4 fill-red-400 cursor-pointer"
        onClick={() => {
          setShowSideBar(false);
        }}
      />
    </>
  );
}

export default SideBarImage;
