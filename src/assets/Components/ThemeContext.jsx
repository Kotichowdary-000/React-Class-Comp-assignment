import React, { useState } from "react";

const ThemeContext = () => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div
            style={{
                height: "80vh",
                backgroundColor: isDark ? "black" : "white",
                color: isDark ? "white" : "black",
                padding: "30px"
            }}
        >
            <h2>Black & White Theme Toggle</h2>

            <button
                onClick={toggleTheme}
                style={{ padding: "10px 20px", marginTop: "20px" }}
            >
                {isDark ? "Switch to White" : "Switch to Black"}
            </button>
        </div>
    );
};

export default ThemeContext;
