import { createContext, useContext, useState } from "react";

const RecipeContext = createContext();

function RecipeProvider({ children }) {
  const [inputValue, setInputValue] = useState("");
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <RecipeContext.Provider
      value={{ inputValue, setInputValue, showSideBar, setShowSideBar }}
    >
      {children}
    </RecipeContext.Provider>
  );
}
function useRecipes() {
  const context = useContext(RecipeContext);
  if (context === undefined)
    throw new Error("RecipeContext was used outside of the RecipeProvider");
  return context;
}
export { RecipeProvider, useRecipes };
