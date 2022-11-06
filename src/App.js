import {useState, useRef} from 'react';
import DiaryEditor from './DiaryEditor';
import './App.css';
import DiaryList from './DiaryList';

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(1);
  const onCreate = (author, content, emotion) => {
    const createdDate = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      createdDate,
      id : dataId.current
    };
    dataId.current += 1;
    
    setData([
      newItem,
      ...data
    ])
  };
  
  const onRemove = (id) => {
    const newDiaryList = data.filter((diary)=>(diary.id != id));
    setData(newDiaryList);
  }

  const onEdit = (id, newContent) => {
    const newDiaryList = data.map((diary)=>(
          diary.id === id ? {...diary, content: newContent} : diary));

    setData(newDiaryList);          
  }
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaries={data}/>
    </div>
  );
}

export default App;
