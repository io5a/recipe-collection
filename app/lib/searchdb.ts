import { useQuery } from "@tanstack/react-query";
import type { Meals } from "~/types";

export function searchDB(query:string | null) {
  const {data,isLoading}=useQuery({
    queryKey: [query],
    queryFn: () => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query ?? "")}`).then((res) => res.json()),
  })
  const meals:Meals=data
  const re = {data: meals.meals , pending: isLoading}
  return re
}

/**
 *   function getRecipes(nrRecipe: number) {
    const queryData = [];
    for (let i = 0; i < nrRecipe; i++) {
      queryData.push({
        queryKey: ["homePost", i],
        queryFn: () => getRecipe(),
      });
    }
    const { data, pending } = useQueries({
      queries: queryData,
      combine: (results) => {
        return {
          data: results.map((result) => result.data),
          pending: results.some((result) => result.isPending),
        };
      },
    });
    return { data, pending };
  }
  const { data, pending } = getRecipes(12);
  const meals = data;
 */