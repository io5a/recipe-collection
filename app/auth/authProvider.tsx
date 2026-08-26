import { useContext, createContext, useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import {type User, type Session } from "@supabase/supabase-js";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState<User|undefined>(undefined);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false)
      setCurrentUser(session?.user)
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setCurrentUser(session?.user)
    });
    return () => subscription.unsubscribe();
  }, []);

  const value = {
    session,
    setSession,
    currentUser,
    setCurrentUser,
    userLoggedIn,
    setUserLoggedIn,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
