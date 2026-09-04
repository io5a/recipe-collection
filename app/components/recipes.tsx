import { getRecipe } from "~/lib/getrecipes";
import { useQueries, useQuery } from "@tanstack/react-query";
import { Recipe } from "./recipe";
import type { Meal, Meals } from "~/types";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function Recipes() {
  const queryData = [];
  for (let i = 0; i < 12; i++) {
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

  const meals = data;

  if (!pending) return <DisplayRecipes meals={meals} />;
  return <DisplaySkeleton />;
}

export function SearchRecipes({ query }: { query: string }) {
  const { data, isLoading } = useQuery({
    queryKey: [query],
    queryFn: () =>
      fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query ?? "")}`,
      ).then((res) => res.json()),
  });
  const meals: Meals = data;
  if (!isLoading) return <DisplayRecipes meals={meals.meals} />;
  return <DisplaySkeleton />;
}

function DisplayRecipes({ meals }: { meals: Meal[] }) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 row-auto">
      {meals.map((meal) => {
        if (meal)
          return (
            <div className="bg-background-home w-full h-full" key={meal.idMeal}>
              <Recipe meal={meal}></Recipe>
            </div>
          );
      })}
    </div>
  );
}

function DisplaySkeleton() {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 row-auto">
        {ids.map((id) => {
          return (
            <div className="bg-background-home w-full h-full" key={id}>
              <div className="outline-1 flex align-center justify-center h-100 ">
                <div className="flex flex-col justify-between m-10 w-full align-center">
                  <SkeletonTheme baseColor="#cecd40" highlightColor="#dedd52">
                    <Skeleton height={300}></Skeleton>
                  </SkeletonTheme>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
