import type { User } from "@supabase/supabase-js";
import { supabase } from "~/auth/supabaseClient";

export async function uploadFile(file: File, currentUser: User) {
  const filePath = `${currentUser.id}/${file.name}`;

  const { error: uploadError } = await supabase.storage
    .from("recipe-images")
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { error: tableError } = await supabase
    .from("saved_recipes")
    .insert({
      user_id: currentUser.id,
      my_photo_URL: filePath,
    });

  if (tableError) throw tableError;
}