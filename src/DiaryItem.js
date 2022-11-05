const DiaryItem = ({author, content, emotion, createdDate})=> {
    return (
        <div className="DiaryItem">
            <div className="info">
                <span>작성자 : {author} | 감정점수 : {emotion}</span>
                <br/>
                <span class="date"> {new Date(createdDate).toLocaleString()} </span>
            </div>
            <div className="content">
                {content}
            </div>
        </div>
    );
}

export default DiaryItem;