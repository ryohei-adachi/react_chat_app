import React, { useState } from "react";
import {TextBox} from "./TextBox";
import {Button} from "./Button";
import styles from "../css/Form.module.css";

export const Form = ({onSave}) => {
    const buttonMessage = "コメントする";

    //入力したメッセージの状態管理をする。
    const [inputMessage, setInpuitMessage] = useState("");

    //ボタンクリックされたときの関数
    const handleSave = () => {
        onSave(inputMessage);
        setInpuitMessage("");
    }

    //入力変更された際に、状態管理したメッセージの内容を変更する
    const handleChange = (e) => {
        setInpuitMessage(e.target.value);
    }
    
    return (
        <div className={styles.inner}>
            <TextBox onChange={handleChange} inputMessage={inputMessage}/>
            <Button onClick={handleSave}>
                {buttonMessage}
            </Button>
        </div>
    );

};