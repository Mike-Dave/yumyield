import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SubHeader from "../SubHeader/SubHeader";
import SideBar from "../Sidebar/SideBar";
import { useRecipes } from "../../contexts/RecipeContext";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesData } from "../../api/recipeApi";

function AppLayout() {
  const dispatch = useDispatch();
  const { showSideBar } = useRecipes();
  useEffect(
    function () {
      fetchCategoriesData(dispatch);
    },
    [dispatch]
  );
  return (
    <div className="relative">
      <div>
        <Header />
        <SubHeader />
        <Outlet />
      </div>
      {showSideBar && <SideBar />}
    </div>
  );
}

export default AppLayout;
