import { SearchRecipes } from "~/components/recipes";
import { useSearchParams } from "react-router";



export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query=searchParams.get("q") ?? ""
  return (
    <>
    <title>Search Page</title>
      <div className="">
        <SearchRecipes query={query}/>
      </div>
    </>
  );
}