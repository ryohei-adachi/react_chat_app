import React from "react";

export const TextBox = ({onChange, inputMessage}) => {
    return(
        <input type="text" onChange={onChange} value={inputMessage}>
        </input>
    );
}