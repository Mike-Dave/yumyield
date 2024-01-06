import { Link } from "react-router-dom";

function CategoryMealItem({ id, mealName, thumb }) {
  console.log(id);
  return (
    <Link to={`/meal/${id}`} className="p-4 shadow-lg">
      <picture>
        <img
          className="h-[12rem] w-full object-cover pb-2"
          src={thumb}
          alt="image of dishes"
        />
      </picture>
      <p className="font-bold">{mealName}</p>
    </Link>
  );
}

export default CategoryMealItem;
