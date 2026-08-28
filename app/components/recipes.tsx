import { getRecipes } from "~/lib/getrecipes"
import { Recipe } from "./recipe";
import type { Meal } from "~/types";

export function Recipes({ meals }: { meals: Meal[] }) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 row-auto">
      {meals.map((meal)=>{
        return(
        <div className="bg-background-home w-full h-full" key={meal.idMeal}>
          <Recipe meal={meal}></Recipe>
        </div>
        )
      })}
    </div>
  )
}
