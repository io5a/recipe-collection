import type { Meal } from "~/types";
import ArrowSvg from "./arrowsvg";

export function Recipe({ meal }: { meal: Meal }) {
  return (
    <>
      <div className="flex align-center justify-center h-100">
        <div className="flex flex-col justify-between m-10 w-full align-center">
          <div className="flex justify-between w-full font-dotgothic">
            <div className="">
              Entry
            </div>
            <div>
              # {meal.idMeal}
            </div>
          </div>
          <div className="flex justify-center w-full"><img className="h-50" src={meal.strMealThumb}></img></div>
          <div className="flex justify-center w-full font-dotgothic align-center">{meal.strMeal}</div>
          <div className="flex justify-end w-full "><ArrowSvg/></div>
        </div>
      </div>
    </>
  )
}

