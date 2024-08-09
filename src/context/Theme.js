import {createContext,useContext} from "react";

export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme: ()=>{

    },
    lightTheme: ()=>{

    },
});

export const  ThemeProvider=ThemeContext.Provider

export default function useTheme(theme,setTheme){

    return useContext(ThemeContext)
    
}