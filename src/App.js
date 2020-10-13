import React from 'react';


function App() {

  const [userName, setUserName] = React.useState('Khalid');

  // function changeStateData() {
  // //either used function keyword OR used below for Arrow Function both will give same output.

  // //const changeStateData = () => {

  //   setUserName(userName === 'Khalid' ? 'NotKhalid' : 'Khalid');
  // };

  const [todoItems, setTodos] = React.useState([
    {action: 'Buy Milk', done: true},
    {action: 'Dentist at 5pm', done: false},
    {action: 'Go to Gym', done: false},
  ]);

  const [newTodo, addNewTodo] = React.useState('');

  const updateValue = (event) => {
    addNewTodo(event.target.value);

  };

  const Todo = ({ todo }) => (
    <tr>
      <td>{todo.action}</td>
      {/* secod row is checkbox input */}
      <td>
        <input type="checkbox" checked={todo.done} onChange={() => toggleDone(todo)}/>
      </td>
      <td>
        <button onClick={() => removeTodo()}>Delete</button>
      </td>
    </tr>
  );

  const removeTodo = (index) => {
    const newTodos = [...todoItems];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  function toggleDone(todo) {
    const updatedItems = todoItems.map((item) =>
    item.action === todo.action ? {...item, done: !item.done} : item
    );
    setTodos(updatedItems);
  }

  function newTodoItem(){
    setTodos([...todoItems, { action: newTodo, done: false }]);
    //To blankout the input field after type and adding the value to the table
    addNewTodo('');

  }

  return (
    <div>
      <div className="col-12">
        <h2 className="bg-primary text-white text-center p2">
          {userName}'s To do list
        </h2>
      </div>
      
    {/* <button className="btn btn-primary" onClick={changeStateData}>Change Name
    
    </button> */}

        <div className="col-12">
        {/* To blankout the input field after typer and add so that added value={newTodo} inside input */}
                    <input value={newTodo} onChange={updateValue} className="form-control"/>

                    <button onClick={newTodoItem} className="btn btn-primary">
                        Add
                    </button>
        </div>

        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Complete</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todoItems.map((todo, index) => (
                <Todo key={index} index={index} todo={todo} />
              ))}

            </tbody>
          </table>
        </div>
    </div>
  );
}

export default App;
