import MealItem from "./MealItem";

("Vegetarian");
function MealList({ meals }) {
  return (
    <div>
      <div className="grid gap-3 md:grid-rows-3 md:grid-cols-5">
        {meals?.map(
          ({
            idMeal,
            strMeal: mealName,
            strMealThumb: thumb,
            strArea: country,
            strCategory: category,
          }) => (
            <MealItem
              id={idMeal}
              key={idMeal}
              thumb={thumb}
              mealName={mealName}
              country={country}
              category={category}
            />
          )
        )}
      </div>
    </div>
  );
}

export default MealList;
