import React from 'react';


function App() {

  const [userName, setUserName] = React.useState('Khalid');

  function changeStateData() {
  //either used function keyword OR used below for Arrow Function both will give same output.

  //const changeStateData = () => {

    setUserName(userName === 'Khalid' ? 'NotKhalid' : 'Khalid');
  };

  const [todoItems, setTodos] = React.useState([
    {action: 'Buy Milk', done: false},
    {action: 'Dentist at 5pm', done: false},
    {action: 'Go to Gym', done: false},
  ]);


  return (
    <div>
      <div className="col-12">
        <h2 className="bg-primary text-white text-center p2">
          {userName}'s To do list
        </h2>
      </div>
      {userName}
    <button className="btn btn-primary" onClick={changeStateData}>Change Name
    
    </button>
    </div>
  );
}

export default App;
