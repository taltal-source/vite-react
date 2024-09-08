import { useState } from 'react';
import { useTodo } from './hooks/useTodo';

function App() {
  const [todoId, setTodoId] = useState<string>('1');
  const { todo, isLoading } = useTodo(todoId);

  const handleClickNext = () => {
    if (Number(todoId) >= 1) {
      setTodoId(`${Number(todoId) + 1}`);
    }
  };

  const handleClickPrevious = () => {
    if (Number(todoId) > 1) {
      setTodoId(`${Number(todoId) - 1}`);
    }
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <h1 className='my-8 text-center text-3xl font-bold'>ToDo</h1>
      <div className='mx-auto w-1/2'>
        <p>id: {todo.id}</p>
        <p>title: {todo.title}</p>
        <p>status: {`${todo.completed}`}</p>

        <div className='flex'>
          <div className='p-4'>
            <button
              className='p-2 rounded-lg bg-green-700 font-bold text-white'
              onClick={() => {
                handleClickPrevious();
              }}
            >
              前のタスク
            </button>
          </div>
          <div className='p-4'>
            <button
              className='p-2 rounded-lg bg-blue-700 font-bold text-white'
              onClick={() => {
                handleClickNext();
              }}
            >
              次のタスク
            </button>
            {todoId}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
