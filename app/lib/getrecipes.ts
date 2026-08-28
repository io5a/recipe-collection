import type { Meals } from "../types";
import type { Meal } from "../types";

async function getRecipe():Promise<Meal>{
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const data:Meals = await response.json();
  if(data.meals && data.meals[0])
    return data.meals[0]
  throw Error("API call failed")
}

export async function getRecipes(nrRecipe: number) {
  const promises: Promise<Meal>[] = [];
  for(let i=0;i<nrRecipe;i++){
    promises.push(getRecipe())
  }

  let uniqueMeals: Array<Meal> = [];

  await Promise.all(promises).then((meals)=>{
    uniqueMeals=meals;
  });
  return uniqueMeals;
}


export async function GetRecipeById(id: string): Promise<Meal> {
  const response = await fetch(
    `https://themealdb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(id)}`
  );

  const data: Meals = await response.json();

  if (data.meals?.[0]) {
    return data.meals[0];
  }

  throw new Error("Recipe not found");
}