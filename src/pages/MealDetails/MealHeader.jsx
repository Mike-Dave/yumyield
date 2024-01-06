import MealIngredient from "./MealIngredient";
import MealName from "./MealName";

function MealHeader({ details }) {
  const mealData = details[0];
  console.log(mealData);
  console.log(mealData?.strTags);

  const { strTags, strMeal, strSource, strCategory, strMealThumb } =
    mealData || {};
  const mike = strTags?.split(",");
  console.log(mike);
  return (
    <div className="mx-auto container flex flex-col md:flex-row gap-10 md:gap-20">
      <picture>
        <img
          className="h-[25rem] md:h-[30rem] p-4 cover"
          src={strMealThumb}
          alt="image of meals"
        />
      </picture>
      <div>
        <MealName
          tags={mike}
          meal={strMeal}
          source={strSource}
          category={strCategory}
        />
        <MealIngredient details={details} />
      </div>
    </div>
  );
}

export default MealHeader;
