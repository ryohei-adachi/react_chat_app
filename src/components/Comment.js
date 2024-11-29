import React from "react";
import styles from "../css/CommentList.module.css" 

export const Comment = ({message, date}) => {
    return (
        <div className={styles.comment}>
            <p className={styles.message}>{message}</p>
            <p className={styles.date}>{date}</p>
        </div>
    );
}