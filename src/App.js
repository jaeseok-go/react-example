import DiaryEditor from './DiaryEditor';
import './App.css';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1, 
    author: "jaeseok",
    content: "hello react!",
    emotion: 1,
    createdDate: new Date().getTime()
  }, 
  {
    id: 2, 
    author: "jeeyu",
    content: "hello java!",
    emotion: 5,
    createdDate: new Date().getTime()
  }, 
  {
    id: 3, 
    author: "doong",
    content: "hello javascript!",
    emotion: 2,
    createdDate: new Date().getTime()
  }, 
  {
    id: 4, 
    author: "hyojung",
    content: "hello html!",
    emotion: 3,
    createdDate: new Date().getTime()
  }, 
  {
    id: 5, 
    author: "taehee",
    content: "hello css!",
    emotion: 4,
    createdDate: new Date().getTime()
  }, 
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaries={dummyList}/>
    </div>
  );
}

export default App;
