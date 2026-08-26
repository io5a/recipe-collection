import type { User } from "@supabase/supabase-js";
import { useAuth } from "~/auth/authProvider";
import { supabase } from "~/auth/supabaseClient";
import { CustomRecipe } from "./accountr-recipe";
import React, { useRef } from "react";
import type { Ref,RefObject } from "react";

async function logout() {
  await supabase.auth.signOut();
}


const pfpLink =
  "https://www.shutterstock.com/shutterstock/photos/580533673/display_1500/stock-vector-emoticon-making-a-funny-face-580533673.jpg";
export function AccountInfo() {
  const { currentUser } = useAuth() as { currentUser: User };

  const ref=useRef<HTMLInputElement>()

  function handleClick(e:React.MouseEvent<HTMLButtonElement>){
    ref.current.click()
  }

  return (
    // desktop view
    <>
      <main className="relative max-[650px]:hidden w-screen min-h-screen flex items-center justify-center -mt-15">
        <div className="font-dotgothic bg-background-home h-170 max-[1100px]:h-130 w-10/20 max-[1100px]:w-19/21 rounded-lg flex flex-col items-center justify-center">
          <div className="flex w-full h-full justify-around">
            <div className="flex flex-col items-center justify-between py-5 px-10 my-5 border-r-2 border-red-700">
              <div className="flex flex-col items-center text-xl text-red-700">
                <span className="text-4xl mb-2">HELLO,</span>
                <div>{currentUser.email}</div>
                <hr className="border w-full mt-3" />
              </div>
              <img className="rounded-full h-10/30" src={pfpLink} />
              <div className="flex flex-col gap-3 items-center ">
                <button className="bg-red-700 hover:bg-red-800 p-3 rounded-xl text-background-home text-2xl cursor-pointer ">
                  change password
                </button>
                <button
                  onClick={logout}
                  className="bg-red-700 hover:bg-red-800 p-3 rounded-xl text-background-home text-2xl cursor-pointer w-10/20"
                >
                  logout
                </button>
              </div>
            </div>
            <div className="w-10/20 flex flex-col items-center gap-5 p-5 relative ">
              <div className="border-b-2 pb-1 mt-5 text-red-700 border-red-700 text-3xl">
                my recipes
              </div>
              <div className="grid grid-cols-2 gap-2 overflow-auto">
                <button onClick={handleClick} className="cursor-pointer hover:bg-red-800 bg-red-700 absolute bottom-8 right-8 w-13 h-13 pb-2 rounded-full text-4xl text-background-home border-2 border-red-900 drop-shadow-md drop-shadow-black">
                  +
                </button>
                <input type="file" ref={ref} className="hidden"/>
                <CustomRecipe />
                <CustomRecipe />
                <CustomRecipe />
                <CustomRecipe />
                <CustomRecipe />
                <CustomRecipe />
                <CustomRecipe />
                <CustomRecipe />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* mobile view */}
      <main className="min-[650px]:hidden w-screen min-h-screen flex items-center justify-center -mt-15">
        <div className="relative w-10/12 h-160 font-dotgothic bg-background-home rounded-lg flex flex-col items-center justify-center">
          <div className=" text-2xl flex self-center items-center gap-4 border-b-2 pb-3 p-2 m-2 border-red-700 text-red-700">
            <img className="w-10/40 rounded-full" src={pfpLink} />
            <span>
              HELLO, <span>{currentUser.email}</span>
            </span>
          </div>
          <div className="flex flex-col items-center overflow-scroll">
            <div className="h-10/13">
              <div className="absolute bottom-3 w-full flex items-center justify-center">
                <div className="text-background-home border-2 border-red-700 bg-background-home/80 backdrop-blur-sm w-10/13 flex justify-between p-3 rounded-xl">
                  <button className="cursor-pointer hover:bg-red-800 bg-red-700 rounded-md p-2">
                    change password
                  </button>
                  <button
                    onClick={logout}
                    className="cursor-pointer hover:bg-red-800 bg-red-700 rounded-md p-2"
                  >
                    log out
                  </button>
                  <button onClick={handleClick} className="cursor-pointer hover:bg-red-800 bg-red-700 bottom-8 right-8 w-10 h-10 pb-1 rounded-full text-2xl text-background-home">
                    +
                  </button>
                  <input type="file" ref={ref} className="hidden"/>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 p-3">
                <CustomRecipe />
                <CustomRecipe />
                <CustomRecipe />
                <CustomRecipe />
                <CustomRecipe />
                <CustomRecipe />
                <CustomRecipe />
                <CustomRecipe />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
