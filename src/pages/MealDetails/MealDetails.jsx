import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MealDetailsTitle from "./MealDetailsTitle";
import MealDetailsList from "./MealDetailsList";
import { fetchMealDetails } from "../../api/recipeApi";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function MealDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { loading, error, details } = useSelector((store) => store.mealDetails);
  useEffect(
    function () {
      fetchMealDetails(dispatch, id);
    },
    [dispatch, id]
  );
  if (loading) return <Loader />;
  if (error) return <ErrorMessage errorText={error.message} />;
  return (
    <div>
      <MealDetailsTitle details={details} />
      <MealDetailsList details={details} />
    </div>
  );
}

export default MealDetails;
