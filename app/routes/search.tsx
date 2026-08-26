import { searchDB } from "~/lib/searchdb";
import { useLoaderData } from "react-router";
import { Recipes } from "~/components/recipes";

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url)
  const query = url.searchParams.get("q")
  const result = await searchDB(query);
  return result ?? []
}

export default function Search() {
  const meals=useLoaderData<typeof loader>();
  
  return (
    <>
      <div className="">
        <Recipes meals={meals}></Recipes>
      </div>
    </>
  );
}