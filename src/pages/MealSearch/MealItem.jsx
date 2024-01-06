import { Link } from "react-router-dom";

function MealItem({ id, mealName, thumb, country, category }) {
  console.log(id);
  return (
    <Link to={`/meal/${id}`} className="p-4 shadow-lg h-[18.75rem] relative">
      <picture>
        <img
          className="h-[12rem] w-full object-cover pb-2"
          src={thumb}
          alt="image of dishes according to search result"
        />
      </picture>
      <p className="text-slate-600">{country}</p>
      <p className="font-bold break-words">{mealName}</p>
      <p className="absolute top-5 right-7 bg-white text-red-400 text-sm font-ptSerif p-1 px-3 font-bold rounded-full">
        {category}
      </p>
    </Link>
  );
}

export default MealItem;
