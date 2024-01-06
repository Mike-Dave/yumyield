import { Link } from "react-router-dom";

function CategoriesItem({ id, thumb, foodName, description }) {
  return (
    <Link
      to={{
        pathname: `/meal/category/${foodName}`,
      }}
      state={{ description, foodName }}
      className="w-full bg-white p-4 relative"
      key={id}
    >
      <div>
        <picture>
          <img
            src={thumb}
            alt="images of categories of food for example: goat, breakfast, beef, pats etc."
          />
        </picture>
      </div>

      <p className="absolute top-1 right-2 bg-gray-800 text-red-400 uppercase text-sm font-ptSerif p-1 font-bold">
        {foodName}
      </p>
    </Link>
  );
}

export default CategoriesItem;
