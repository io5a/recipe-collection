import { redirect, useSearchParams } from "react-router";
import { RecipeDetails } from "~/components/details";

export default function Details() {
  let [searchParams] = useSearchParams();
  const recipeId = searchParams.get("q");
  if (recipeId === null) return;
  return (
    <>
      <RecipeDetails recipeId={recipeId}/>
    </>
  );
}
