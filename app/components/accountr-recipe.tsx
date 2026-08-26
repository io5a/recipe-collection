import { supabase } from "~/auth/supabaseClient"

export function CustomRecipe({url,path,onRemoved}:{url:string|null,path:string|null,onRemoved:(path:string)=>void}){
  if(!url || !path)
    return

  const deleteImage = async()=>{
    const {data:DeleteData,error:DeleteError} = await supabase.storage
    .from("recipe-images")
    .remove([path])
    if(DeleteError)
      throw DeleteError

    const {data:RowDeleteData,error:RowDeleteError} = await supabase
    .from("saved_recipes")
    .delete()
    .eq("my_photo_URL",path)
    if(RowDeleteError)
      throw RowDeleteError
    onRemoved(path)
  }
  return <>
    <div className="flex flex-col items-center mb-1">
      <img className="w-10/2 aspect-square mb-2 rounded-md object-cover" src={url}/>
      <button onClick={deleteImage} className="cursor-pointer hover:bg-red-800 bg-red-700 py-2 px-3 rounded-md text-background-home">Remove</button>
    </div>
  </>
}