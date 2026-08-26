import { CustomRecipe } from "./accountr-recipe";

export function CustomRecipes({urls,onRemoved}:{urls:{
      error: string | null;
      path: string | null;
      signedURL: string | null;
      signedUrl: string | null;
    }[],onRemoved:(path:string)=>void}){
  if(urls!==undefined)
  return (
    <>
      {urls.map((url)=>{
        if(url)
          return <CustomRecipe onRemoved={onRemoved} key={url.path} path={url.path} url={url.signedUrl}/>
      })}
    </>
  )
}