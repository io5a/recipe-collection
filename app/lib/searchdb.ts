import type { Meals } from "~/types";

export async function searchDB(query:string | null) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
  const meals:Meals=await response.json();
  return meals
}