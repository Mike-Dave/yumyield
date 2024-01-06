function CategoryMealDescription({ foodTitle, description }) {
  return (
    <div className="p-4 m-6 md:m-0 border-red-400 border-4 space-y-3">
      <h1 className="text-gray-900 font-bold text-2xl">{foodTitle}</h1>
      <p>{description}</p>
    </div>
  );
}

export default CategoryMealDescription;
