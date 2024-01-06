import CategoryMealItem from "./CategoryMealItem";

function CategoryMealList({ categoryMeals }) {
  return (
    <div className="grid gap-3 md:grid-rows-3 md:grid-cols-5">
      {categoryMeals.map(
        ({ idMeal, strMeal: mealName, strMealThumb: thumb }) => (
          <CategoryMealItem
            id={idMeal}
            key={idMeal}
            thumb={thumb}
            mealName={mealName}
          />
        )
      )}
    </div>
  );
}

export default CategoryMealList;
