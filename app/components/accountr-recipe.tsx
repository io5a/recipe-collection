const pfpLink="https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg"


export function CustomRecipe(){
  return <>
    <div className="flex flex-col items-center mb-1">
      <img className="w-10/2 mb-2 rounded-md" src={pfpLink}/>
      <button className="cursor-pointer hover:bg-red-800 bg-red-700 py-2 px-3 rounded-md text-background-home">Remove</button>
    </div>
  </>
}