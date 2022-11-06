import DiaryItem from "./DiaryItem";

const DiaryList = ({onEdit, onRemove, diaries}) => {
    return (
        <div className="DiaryList">
            <h2>Diary List</h2>
            <h4>{diaries.length} 개의 일기가 있습니다.</h4>
            <div>
                {diaries.map((diary)=>(
                    <DiaryItem onEdit={onEdit} onRemove={onRemove} key={diary.id} {...diary}/>
                ))}
            </div>
        </div>
    )
}

DiaryList.defaultProps = {
    diaries: []
}

export default DiaryList;