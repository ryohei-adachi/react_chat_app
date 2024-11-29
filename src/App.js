import React, {useState, useEffect} from "react";
import { Form } from "./components/Form";
import { CommentList } from "./components/CommentList";

function App() {
     
    const [id, setId] = useState(1);
    const [comments, setComents] = useState([]);    
  
    //現在時刻の取得
    const getDate = () => {
        const date = new Date();
        return date.getFullYear() + "年" + (date.getMonth() + 1) + "月"  + date.getDate() + "日";
    }

    //コメントボタン押下時のイベント
    const onSave = (inputMessage) => {
        const newComment = {
            id : id,
            message: inputMessage, 
            date: getDate(),
        };
      
        setId(id + 1);
        const newcCmmentList = comments.concat(newComment);
        setComents(newcCmmentList);
    }


  return (
    <div>
      <Form onSave={onSave}/>
      <hr></hr>
      <CommentList comments={comments}/>
    </div>
  );
}

export default App;
