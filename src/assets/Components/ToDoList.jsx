import React, { Component } from "react";


class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            task: "",
            todos: []
        };
    }

    // update input box
    handleChange = (e) => {
        this.setState({ task: e.target.value });
    };

    // add todo
    addTodo = () => {
        if (this.state.task.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text: this.state.task,
            completed: false
        };

        this.setState({
            todos: [...this.state.todos, newTodo],
            task: ""
        });
    };

    // delete todo
    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter((todo) => todo.id !== id)
        });
    };

    // mark complete toggle
    toggleTodo = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        });
    };

    render() {
        return (
            <div
                style={{
                    minHeight: "100vh",
                    backgroundColor: "rgb(2, 91, 113)",
                    padding: "30px",
                    color: "white"
                }}
            >
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                    My To Do List
                </h2>

                {/* Input + Add Button */}
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        justifyContent: "center",
                        marginBottom: "25px" // gap added here
                    }}
                >
                    <input
                        type="text"
                        placeholder="Enter task"
                        value={this.state.task}
                        onChange={this.handleChange}
                        style={{
                            padding: "10px",
                            width: "250px",
                            borderRadius: "5px",
                            border: "none"
                        }}
                    />

                    <button
                        onClick={this.addTodo}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#00E5FF",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                    >
                        Add
                    </button>
                </div>

                {/* Todo List */}
                <div style={{ maxWidth: "400px", margin: "0 auto" }}>
                    {this.state.todos.map((todo) => (
                        <div
                            key={todo.id}
                            style={{
                                backgroundColor: "white",
                                color: "black",
                                padding: "12px",
                                borderRadius: "5px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "10px"
                            }}
                        >
                            <span
                                onClick={() => this.toggleTodo(todo.id)}
                                style={{
                                    textDecoration: todo.completed ? "line-through" : "none",
                                    cursor: "pointer",
                                    fontSize: "16px"
                                }}
                            >
                                {todo.text}
                            </span>

                            <button
                                onClick={() => this.deleteTodo(todo.id)}
                                style={{
                                    backgroundColor: "red",
                                    color: "white",
                                    border: "none",
                                    padding: "5px 10px",
                                    borderRadius: "4px",
                                    cursor: "pointer"
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ToDoList;
