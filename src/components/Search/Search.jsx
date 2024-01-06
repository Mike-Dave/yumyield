import { IoSearchCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useRecipes } from "../../contexts/RecipeContext";
import { useDispatch } from "react-redux";
import { fetchMealSearch } from "../../api/recipeApi";
function Search() {
  const { inputValue, setInputValue } = useRecipes();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    fetchMealSearch(dispatch, inputValue);
    navigate("/meal");

    setInputValue("");
  }

  return (
    <form
      className="flex justify-center items-center mx-auto container"
      onSubmit={handleSubmit}
    >
      <input
        className="rounded-full pl-2 p-2 w-[60%] md:p-3 md:w-[31.25rem] outline-none focus:pl-5 placeholder:pl-5"
        type="text"
        placeholder="Search recipe here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <IoSearchCircle className="w-[3rem] h-[4.5rem] fill-white hover:fill-red-400" />
    </form>
  );
}

export default Search;
