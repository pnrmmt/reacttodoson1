import React, {useState} from 'react';


function Form({ inputText, setInputText, todos, setTodos, setStatus }) {


  const InputTextHandler = (e) => {
    setInputText(e.target.value)


  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
   

    

    
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() }]);
    // setInputText("pınar"); //başlangıçtaki değeri değiştirmek için
    setInputText("")
   


  }  //ekleme butonuna bastığımızda sayfanın yenilenmemesi için

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <div>
      <form>
        <div className="search">
          <input value={inputText} type="text" className="todo-input" placeholder="What needs to be done?" onChange={InputTextHandler} />
          <button className="todo-button" type="submit" onClick={submitTodoHandler}>
            <i className="fas fa-plus-circle"></i>
          </button>
        </div>

        <div className="select">
          <select name="todos" className="filter-todo" onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
        
      </form>
    </div>
  )
}

export default Form
