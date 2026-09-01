import { getRecipe } from "~/lib/getrecipes";
import { useQueries } from "@tanstack/react-query";
import { Recipe } from "./recipe";
import type { Meal } from "~/types";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


export function Recipes() {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  function getRecipes(nrRecipe: number) {
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
    console.log(data, pending)
    return { data, pending };
  }
  const { data, pending } = getRecipes(12);
  const meals = data;
  if (!pending)
    return (
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 row-auto">
        {meals.map((meal) => {
          if (meal)
            return (
              <div
                className="bg-background-home w-full h-full"
                key={meal.idMeal}
              >
                <Recipe meal={meal}></Recipe>
              </div>
            );
        })}
      </div>
    );

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 row-auto">
        {
          ids.map((id) => {
            return (
              <div
                className="bg-background-home w-full h-full"
                key={id}
              >
                <div className="outline-1 flex align-center justify-center h-100 ">
                  <div className="flex flex-col justify-between m-10 w-full align-center">
                    <SkeletonTheme baseColor="#cecd40" highlightColor="#dedd52">
                      <Skeleton height={300}></Skeleton>
                    </SkeletonTheme>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  );
}
