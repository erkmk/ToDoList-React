//import React from 'react';
import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import { TodoRows } from './components/TodoRows';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'Khalid',
            todoItems: [
                {action: 'Buy Milk', done: false},
                {action: 'Dentist at 5pm', done: false},
                {action: 'Go to Gym', done: false},
            ],
            newToDo: '',
        };
    }

    // changeStateData = () => {
    //     this.setState({
    //         userName: this.state.userName === 'Name1' ? 'Khalid Khan' : 'Name1',
    //     })
    // };

    updateValue = (event) => {
        this.setState({newToDo: event.target.value});
    };

    newToDo = () =>{
        this.setState({
            todoItems: [
                ...this.state.todoItems,
                { action: this.state.newToDo, done: false },
            ],

        });
    };
    //this function callback from child compomnent TodoRows.
    todoRows = () =>
        this.state.todoItems.map((item) =>( <TodoRows key={item.action} item={item} callback={this.toggleDone}/>
            ));

    toggleDone = (todo) =>
        this.setState({
            todoItems: this.state.todoItems.map((item) => item.action === todo.action ? { ...item, done: !item.done } : item
            ),
        });

    // todoRows = () =>
    // this.state.todoItems.map((item) => (
    //     <tr key={item.action}>
    //         <td>{item.action}</td>
    //         <td>
    //             <input
    //             type="checkbox"
    //             checked={item.done}
    //             onChange={()=> this.toggleDone(item)}
    //             />
    //         </td>
    //     </tr>
    // ));
 
    render = () => (
        <div className="container">
            <div className="row">
            {/* making new folder in src name components creat new file inside is Navbar.js and import this components from there to here (Navbar.js is child components) App.js passing properties (pros) to Navbar.js */}
            {/* <div className="col-12">
    <h2 className="bg-primary text-white text-center p2">{this.state.userName} To do list</h2>
                </div> */}
                {/* importing Navbar.js here */}
                <Navbar name={this.state.userName} />
                
    {/* <button className="btn btn-secondary m-2" onClick={this.changeStateData}>
        Change
    </button> */}
                <div className="col-12">
                    <input className="form-control" value={this.state.newToDo} onChange={this.updateValue}/>
                    <button className="btn btn-primary" onClick={this.newToDo}>
                        Add
                    </button>
                </div>
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Complete</th>
                            </tr>
                        </thead>
<tbody>{this.todoRows()}</tbody>
                    </table>

                </div>

            </div>

        </div>
    );
}



