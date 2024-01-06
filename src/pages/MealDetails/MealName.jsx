function MealName({ tags, meal, category, source }) {
  return (
    <div className="p-4 ">
      <div>
        <h1 className="text-2xl text-red-400 font-bold font-ptSerif w-[80%] pb-2.5">
          {meal}
        </h1>
        <hr className="border-red-400 border-t-4" />
      </div>
      <div className="flex gap-2 uppercase mt-4">
        <h3 className="font-bold">Category:</h3>
        <p>{category}</p>
      </div>
      <div className="flex gap-2">
        <h3 className="font-bold">Source:</h3>
        {source ? (
          <a
            className="w-[250px] break-words underline text-red-400 md:w-full"
            href={source}
          >
            {source}
          </a>
        ) : (
          <p>Not Found</p>
        )}
      </div>

      <div className="flex gap-2 mt-3">
        <h3 className="font-bold">Tags:</h3>
        <div className="flex gap-3 items-center">
          {tags?.map((tag, index) => (
            <p
              className="outline outline-2 outline-red-400 px-2 rounded-md text-red-400"
              key={index}
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MealName;
