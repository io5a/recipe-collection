import { useEffect, useState } from "react";
import { Link } from "react-router";
import { GetRecipeById } from "~/lib/getrecipes";
import type { Meal } from "~/types";

export function RecipeDetails({ recipeId }: { recipeId: string }) {
  const [meal, setMeal] = useState<Meal>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    GetRecipeById(recipeId)
      .then((meal) => setMeal(meal))
      .finally(() => setLoading(false));
  }, [recipeId]);
  const ingredients = meal
    ? Array.from({ length: 20 }, (_, index) => {
        const number = index + 1;

        const ingredient = meal[`strIngredient${number}` as keyof Meal];

        const measure = meal[`strMeasure${number}` as keyof Meal];

        return {
          ingredient: typeof ingredient === "string" ? ingredient.trim() : "",
          measure: typeof measure === "string" ? measure.trim() : "",
        };
      }).filter(({ ingredient }) => ingredient)
    : [];
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="">
          <div className="flex justify-center pt-5">
            <img
              className="rounded-full aspect-square w-160"
              src={meal?.strMealThumb}
            />
          </div>
          <div className="pb-10 mt-10 flex flex-col justify-center items-center w-full gap-5 font-dotgothic text-red-700">
            <div className="">Entry {meal?.idMeal}</div>
            <div className="text-4xl">{meal?.strMeal}</div>
            <div className="border-b w-full mt-5"></div>
            <div className="text-5xl mt-10">INGREDIENTS</div>
            <div className="flex flex-col gap-2 items-center">
              {ingredients.map(({ ingredient, measure }) => (
                <div className="flex gap-2">
                  <span>{measure}</span>
                  <span>{ingredient}</span>
                </div>
              ))}
            </div>
            <div className="text-5xl mt-10">STEPS</div>
            <div className="p-10 text-center">
              {meal?.strInstructions}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
