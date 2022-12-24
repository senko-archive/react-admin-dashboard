import React from "react";

type ButtonProps = {
    color: string;
    bgColor: string;
    text: string;
    borderRadius: string;
    size?: string
}

const Button: React.FC<ButtonProps> = ({color, bgColor, text, borderRadius, size}) => {
    return(
        <button type="button" style={{ backgroundColor: bgColor, color: color, borderRadius: borderRadius }} className={`text-${size} p-3 hover:drop-shadow-x1`}>
            { text }
        </button>
    )
}

export default Button;