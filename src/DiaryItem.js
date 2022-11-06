import {useState} from 'react';

const DiaryItem = ({onEdit, onRemove, id, author, content, emotion, createdDate})=> {
    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);

    const [localContent, setLocalContent] = useState(content);

    const handleRemoveItem = (e) => {
        if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
            onRemove(id);
        }
    }

    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(content);
    }

    const handleCompleteEdit = () => {
        onEdit(id, localContent);
        alert("Edit Success!");
        toggleIsEdit();
    }

    return (
        <div className="DiaryItem">
            <div className="info">
                <span>작성자 : {author} | 감정점수 : {emotion}</span>
                <br/>
                <span className="date"> {new Date(createdDate).toLocaleString()} </span>
            </div>
            <div className="content">
                {isEdit ? 
                <>
                    <textarea value={localContent} onChange={(e) => (setLocalContent(e.target.value))}>
                    </textarea>
                </> : 
                <>
                    {content}
                </>}
            </div>

            {isEdit ? 
                <>
                    <button onClick={handleQuitEdit}>Cancel</button>
                    <button onClick={handleCompleteEdit}>Complete</button>
                </> : 
                <>
                    <button onClick={toggleIsEdit}>Edit</button>
                    <button onClick={handleRemoveItem}>Remove</button>
                </>}

        </div>
    );
}

export default DiaryItem;