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
  const mealsArr:Array<Meal>=[]
  while(mealsArr.length!==nrRecipe){
    let data = await getRecipe()
    const currentId=mealsArr.map((meal)=>meal.idMeal)
    while(currentId.includes(data.idMeal)) {
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
