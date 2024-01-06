import { useSelector } from "react-redux";
import SideBarItem from "./SideBarItem";

function SideBarList() {
  const { categories } = useSelector((store) => store.categories);
  return (
    <div>
      {categories?.map(
        ({
          idCategory: id,
          strCategory: foodName,
          strCategoryDescription: description,
        }) => (
          <SideBarItem key={id} foodName={foodName} description={description} />
        )
      )}
    </div>
  );
}

export default SideBarList;
