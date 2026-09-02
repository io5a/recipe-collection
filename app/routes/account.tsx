import { useAuth } from "~/auth/authProvider";
import {Login} from "~/components/login";
import type { Session, User } from "@supabase/supabase-js";
import { AccountInfo } from "~/components/accountinfo";



export default function Account() {
  const { session } = useAuth() as { session: Session};
  return (<>
  <title>Account Page</title>
    <div>
      {session ? <AccountInfo/> : <Login/> } 
    </div>
  </>);
}