import { useSearchParams } from "react-router";
import { Recipe } from "~/components/recipe";
import { searchDB } from "~/lib/searchdb";


export default async function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchStr=searchParams.get("q")
  const {meals}=await searchDB(searchStr)
  return (
    <>
      {meals.map((meal)=>{
        <Recipe meal={meal}></Recipe>
      })}
    </>
  );
}