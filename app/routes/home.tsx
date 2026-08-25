import Navbar from "~/components/navbar";
import { Recipes } from "~/components/recipes";
import { getRecipes } from "~/lib/getrecipes";
import { useLoaderData } from "react-router";

export async function loader() {
  return getRecipes(12);
}

export default function Home() {
  const meals = useLoaderData<typeof loader>();
  return (
  <>
    <div className="bg-background-home h-70 flex flex-col justify-center items-center font-dotgothic text-3xl gap-5 border-b-2 border-red-700">
      <span className="border-b-2 border-red-700 pt-15">Check Out</span>
      <span className="text-xl">
        <span>Over 790 recipes from all around the globe </span>
        <span className="inline-block animate-bounce">🌐︎</span>
      </span>
      <span className="text-base">See the 12 random recipes below to get started</span>
    </div>
    <ol className="grid">
      <Recipes meals={meals}/>
    </ol>
  </>
  );
}
