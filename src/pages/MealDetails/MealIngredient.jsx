function MealIngredient({ details }) {
  const mealData = details[0];
  const strIngredients = mealData
    ? Object.keys(mealData)
        .filter((key) => key.startsWith("strIngredient"))
        .map((key) => mealData[key])
        .filter((value) => value.trim() !== "" && isNaN(value))
    : [];

  //   const splittedInstructions = instructions?.split("\r\n").filter(Boolean);
  return (
    <div className="mx-auto container font-ptSerif">
      <div className="p-4 bg-gray-800 mx-4 text-red-400">
        <h3 className="font-bold font-ptSerif text-xl">Ingredients</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 p-4 items-center">
          {strIngredients?.map((instruct, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <p>{index + 1}</p>
              <p className="w-full">{instruct}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MealIngredient;
