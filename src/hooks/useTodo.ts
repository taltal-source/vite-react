import { useState, useEffect } from 'react';
import client from '../lib/api/apiClient';
import { Todo } from '../types/todo';

export const useTodoList = (url: string): { todos: Todo[]; isLoading: boolean } => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodoList(url);
  }, [url]);

  const fetchTodoList = async (url: string) => {
    try {
      const res = await client.get(url);
      const data = await res.data;

      setTodos(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return {
    todos: todos,
    isLoading: isLoading,
  };
};

export const useTodo = (id: string): { todo: Todo; isLoading: boolean } => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [todo, setTodo] = useState<Todo>(Object);

  useEffect(() => {
    fetchTodo(id);
  }, [id]);

  const fetchTodo = async (id: string) => {
    try {
      const res = await client.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const data: Todo = await res.data;

      setTodo(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return {
    todo: todo,
    isLoading: isLoading,
  };
};
