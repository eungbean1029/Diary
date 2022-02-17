import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id : 1,
    author: "배은빈",
    content: "하이",
    emotion: 1,
    created_date: new Date().getTime()
  },
  {
    id : 2,
    author: "홍길동",
    content: "하이2",
    emotion: 3,
    created_date: new Date().getTime()
  },
  {
    id : 3,
    author: "김무식",
    content: "하이3",
    emotion: 4,
    created_date: new Date().getTime()
  },
]
function App() {
  return (
    <div className='App'>
      <h2>일기장</h2>
      <DiaryEditor />
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
