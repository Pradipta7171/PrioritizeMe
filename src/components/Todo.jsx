// Todo.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import { BsSearch, BsPlus } from "react-icons/bs";
import { addTodo, updateSearchTerm } from "../redux/actions";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div
      className="max-w-4xl mx-auto sm:mt-8 p-4 rounded"
      style={{ background: "linear-gradient(to right, #A8CBF1, #DAE1E8)" }}
    >
      <div className="flex justify-center items-center mb-4">
        <img
          className="mr-4"
          width="50"
          height="50"
          src="https://img.icons8.com/bubbles/50/todo-list.png"
          alt="todo-list"
        />
        <h2 className="mt-3 mb-6 text-4xl font-bold text-center font-serif text-blue-900">
          Prioritize-Me
        </h2>
      </div>
      <div className="flex items-center mb-4">
        <input
          id="addTodoInput"
          className="flex-grow p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
          type="text"
          placeholder="Add Todo Item"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-900 focus:outline-none"
          onClick={handleAddTodoClick}
        >
          <BsPlus size={20} />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButtons />
        <div className="flex items-center mb-4">
          <input
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none rounded-lg focus:border-blue-900"
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-900 focus:outline-none">
            <BsSearch size={20} />
          </button>
        </div>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
