import {useState, useRef} from 'react';

const DiaryEditor = ({onCreate}) => {

    const authorInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        author: "", 
        content: "",
        emotion: 1
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () => {
        if (state.author.length < 1) {
            authorInput.current.focus();
            return ;
        }
        if (state.content.length < 5) {
            contentInput.current.focus();
            return ;
        }

        onCreate(state.author, state.content, state.emotion);
        alert("Save Success!!");
        setState({
            author: "", 
            content: "",
            emotion: 1
        });
    }

    return (
    <div className="DiaryEditor">
        <h2>Today's Diary</h2>
        <div>
            <input name="author" value={state.author} 
                onChange={handleChangeState}
                ref={authorInput}/>
        </div>
        <div>
            <textarea name="content" value={state.content}
                onChange={handleChangeState}
                ref={contentInput}/>
        </div>
        <div>  Today's Emotion Score :
            <select name="emotion" value={state.emotion}
                onChange={handleChangeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>Diary Save</button>
        </div>
    </div>
    )
};

export default DiaryEditor;