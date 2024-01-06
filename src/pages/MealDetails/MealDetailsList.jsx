import MealHeader from "./MealHeader";
import MealInstruction from "./MealInstruction";
import MealMeasure from "./MealMeasure";

function MealDetailsList({ details }) {
  const { strInstructions } = details[0] || {};
  const mealData = details[0];
  console.log(mealData);
  console.log(mealData?.strTags);

  const { strTags } = mealData || {};
  console.log(strTags);
  const strMeasures = mealData
    ? Object.keys(mealData)
        .filter((key) => key.startsWith("strMeasure"))
        .map((key) => mealData[key])
        .filter((value) => value.trim() !== "" && isNaN(value))
    : [];

  console.log(strMeasures);

  return (
    <div>
      <MealHeader details={details} />
      <MealMeasure measures={strMeasures} />
      <MealInstruction instructions={strInstructions} />
    </div>
  );
}

export default MealDetailsList;
