import { useDispatch, useSelector } from "react-redux";
import Title from "../../components/Reuseable/Title";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import CategoryMealList from "./CategoryMealList";
import CategoryMealDescription from "./CategoryMealDescription";
import { fetchCategoriesMealSearch } from "../../api/recipeApi";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function CategoryMealSearch() {
  const { state: categoryState } = useLocation();
  const { description, foodName: foodTitle } = categoryState;
  const { foodName } = useParams();

  const dispatch = useDispatch();
  const { loading, error, categoryMeals } = useSelector(
    (store) => store.categoriesMealSearch
  );

  useEffect(
    function () {
      fetchCategoriesMealSearch(dispatch, foodName);
    },
    [dispatch, foodName]
  );
  if (loading) return <Loader />;
  if (error) return <ErrorMessage errorText={error.message} />;
  return (
    <div className="mx-auto container mt-10">
      <CategoryMealDescription
        foodTitle={foodTitle}
        description={description}
      />
      <Title titleText="Meals" />
      <CategoryMealList categoryMeals={categoryMeals} />
    </div>
  );
}

export default CategoryMealSearch;
