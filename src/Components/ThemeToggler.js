import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext)

    return (
        <div
        onClick={() => {
            setThemeMode(themeMode === "light" ? "dark" : "light")
        }}>
            <span style={{fontSize:"40px"}}>{themeMode === "light" ? "🌙" : "🌞"}</span>
        </div>
    )
}

export default ThemeToggler;