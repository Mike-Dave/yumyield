import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import Categories from "./components/Categories/Categories";
import CategoryMealSearch from "./pages/CategoryMealSearchPage/CategoryMealSearch";
import MealDetails from "./pages/MealDetails/MealDetails";
import MealSearch from "./pages/MealSearch/MealSearch";
import { RecipeProvider } from "./contexts/RecipeContext";
import Error from "./pages/ErrorPage/Error";

function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Categories />} />
            <Route
              path="meal/category/:foodName"
              element={<CategoryMealSearch />}
            />
            <Route path="meal/:id" element={<MealDetails />} />
            <Route path="meal" element={<MealSearch />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </RecipeProvider>
  );
}

export default App;
