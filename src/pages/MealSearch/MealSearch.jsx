import { useSelector } from "react-redux";
import Title from "../../components/Reuseable/Title";
import MealList from "./MealList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function MealSearch() {
  const { loading, error, meals } = useSelector((store) => store.mealSearch);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage errorText={error.message} />;
  return (
    <div className="p-4 bg-slates-200 mx-auto container">
      <Title titleText="Meals" />
      <MealList meals={meals} />
      {meals.length === 0 && (
        <p className="text-red-400 bg-gray-800 p-4 font-ptSerif">
          Please search for a meal...
        </p>
      )}
    </div>
  );
}

export default MealSearch;
