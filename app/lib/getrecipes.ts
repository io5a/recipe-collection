import type { Meals } from "../types";
import type { Meal } from "../types";

async function getRecipe(){
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const data:Meals = await response.json();
  return data.meals[0]
}

export async function getRecipes(nrRecipe: number) {
  const mealsArr:Array<Meal>=[]
  while(mealsArr.length!==nrRecipe){
    let data = await getRecipe()
    while(mealsArr.includes(data)) {
      data = await getRecipe()
    }
    mealsArr.push(data)
  }
  if(mealsArr.length!==nrRecipe)
    if(mealsArr.length<nrRecipe)
      mealsArr.push(await getRecipe())
    if(mealsArr.length>nrRecipe)
      mealsArr.pop()
  return mealsArr
}
