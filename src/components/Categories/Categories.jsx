import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoriesList from "./CategoriesList";
import Title from "../Reuseable/Title";
import { fetchCategoriesData } from "../../api/recipeApi";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function Categories() {
  const dispatch = useDispatch();
  const { loading, error, categories } = useSelector(
    (store) => store.categories
  );

  useEffect(
    function () {
      fetchCategoriesData(dispatch);
    },
    [dispatch]
  );
  if (loading) return <Loader />;
  if (error) return <ErrorMessage errorText={error.message} />;
  return (
    <div className="bg-slate-200">
      <div className="p-4 bg-slate-200 mx-auto container">
        <Title titleText="Categories" />
        <CategoriesList categories={categories} />
      </div>
    </div>
  );
}

export default Categories;
