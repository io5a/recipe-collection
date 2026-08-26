import type { User } from "@supabase/supabase-js";
import { supabase } from "~/auth/supabaseClient";

export async function getAllFiles(currentUser:User){
  const {data:PathData, error:PathError} = await supabase.from("saved_recipes")
  .select()
  .eq("user_id",currentUser.id)
  if(PathError)
    throw PathError
  
  const PathStr=PathData.map((row)=>{
    const {my_photo_URL} = row
    return my_photo_URL
  })

  const {data:UrlsData,error:UrlsError} = await supabase
  .storage
  .from("recipe-images")
  .createSignedUrls(PathStr,3600)

  if(UrlsError)
    throw UrlsError
  return UrlsData
}

/**
 * [
    {
        "my_photo_URL": "016645f5-b0cf-43d8-b875-59f453217359/motorola-razr-fold-3840x2160-26566.jpg",
        "user_id": "016645f5-b0cf-43d8-b875-59f453217359"
    },
    {
        "my_photo_URL": "016645f5-b0cf-43d8-b875-59f453217359/geometric-gradient-3840x2160-25120.jpg",
        "user_id": "016645f5-b0cf-43d8-b875-59f453217359"
    }
]
 */