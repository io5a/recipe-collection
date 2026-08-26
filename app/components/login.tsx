import { useState } from "react";
import { supabase } from "~/auth/supabaseClient";
import { AuthError, type AuthResponse, type Session } from "@supabase/supabase-js";
import { useAuth } from "~/auth/authProvider";

export function Login() {
  const {session,setSession} = useAuth() as { session: Session , setSession: React.Dispatch<React.SetStateAction<Session | null>>}
  const [cred,setCred]=useState({email:"",password:""})
  const [error,setError]=useState<AuthError | null>()
  const [signingUp,setSigningUp]=useState(false)

  async function handleSubmit(e:React.SubmitEvent<HTMLFormElement>){
      e.preventDefault()
      let response:AuthResponse;
      if(signingUp)
        response = await supabase.auth.signUp(cred)
      else
        response = await supabase.auth.signInWithPassword(cred)
      const {data,error}=response
      console.log(data)
      setError(error)
  }
  
  return (
    <main className="w-screen min-h-screen flex items-center justify-center -mt-15">
      <div className="bg-background-home sm:h-170 h-130 sm:w-10/20 w-19/21 rounded-lg flex flex-col items-center justify-center">
        <div className="font-dotgothic text-red-700 sm:text-6xl text-4xl">{signingUp ? "SIGN UP": "LOGIN"}</div>
        <form onSubmit={handleSubmit} className="w-full sm:p-15 p-4 flex flex-col">
          <div className="flex flex-col">
            <label className="font-dotgothic sm:text-3xl text-xl">Email</label>
            <input 
            placeholder="example@example.com" 
            type="text"
            onChange={(e)=>setCred((prev)=>({...prev,email:e.target.value}))}
            className="w-full bg-black/10 border-dashed border-4 border-red-700 p-1 mt-1 outline-none focus:border-red-800"/>
            <label className="font-dotgothic sm:text-3xl text-xl mt-5">Password</label>
            <input 
            placeholder="Password" 
            type="password"
            onChange={(e)=>setCred((prev)=>({...prev,password:e.target.value}))}  
            className="w-full bg-black/10 border-dashed border-4 border-red-700 p-1 mt-1 outline-none focus:border-red-800"/>
          </div>
          <div className="flex flex-col w-full items-center justify-center">
            <div className="font-dotgothic sm:text-3xl text-xl my-8 text-red-800">{error ? `Error: ${error.message}` : ""}</div>
            <button className="mb-10 cursor-pointer font-dotgothic sm:text-4xl text-2xl bg-red-700 hover:bg-red-800 rounded-md text-background-home px-3 py-2">enter</button>
          </div>
        </form>
        <div className="flex w-full justify-between sm:px-15 px-4">
          <div className="font-dotgothic text-2xs sm:text-base">
            <button onClick={()=>setSigningUp(!signingUp)}>{signingUp ? "Already a user?" : "New User?"} <u className="cursor-pointer">{signingUp ? "Log in" : "Sign Up"}</u></button>
          </div>
          <button className="cursor-pointer font-dotgothic text-2xs sm:text-base text-right"><u>Forgot your password?</u></button>
        </div>
      </div>
    </main>
  );
}
