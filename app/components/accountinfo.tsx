import type { User } from "@supabase/supabase-js"
import { useAuth } from "~/auth/authProvider"
import { supabase } from "~/auth/supabaseClient"

async function logout() {
  await supabase.auth.signOut()
}

export function AccountInfo(){
  const {currentUser} = useAuth() as {currentUser: User}

  return <>
    
    <button onClick={logout}>test</button>

  </>
}