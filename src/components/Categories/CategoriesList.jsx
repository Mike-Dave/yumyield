import CategoriesItem from "./CategoriesItem";
function CategoriesList({ categories }) {
  console.log(categories);
  console.log(categories.strCategory);
  return (
    <div className="grid gap-8 md:grid-rows-3 md:grid-cols-5  m-4 pb-10">
      {categories.map(
        ({
          idCategory: id,
          strCategoryThumb: thumb,
          strCategory: foodName,
          strCategoryDescription: description,
        }) => (
          <CategoriesItem
            id={id}
            key={id}
            thumb={thumb}
            foodName={foodName}
            description={description}
          />
        )
      )}
    </div>
  );
}

export default CategoriesList;
