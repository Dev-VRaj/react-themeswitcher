import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const HeroSection = () => {
    const theme = useContext(ThemeContext)[0]; // notice that themecontext is an array with the value as its 0th element and setValue as its 1st element
    const [themeMode, setThemeMode] = useContext(ThemeContext)
    const currentTheme = AppTheme[theme]


    return (
        <div
            style={{
                padding: "1rem",
                backgroundColor: `${currentTheme.backgroundColor}`,
                color:`${currentTheme.textColor}`,
                textAlign: "center",
            }}>
            <h1>Context Api Theme Toggler</h1>
            <p>This is a nice paragraph</p>
            <button
                style={{
                    backgroundColor: "#26ae60",
                    padding: "10px 150px",
                    fontSize: "20px",
                    color: "#ffffff",
                    border: `${currentTheme.border}`,
                }}
                onClick={() => {
                    setThemeMode(themeMode === "light" ? "dark" : "light")
                }}>
                    Click Me
            </button>
        </div>
    )
}

export default HeroSection;