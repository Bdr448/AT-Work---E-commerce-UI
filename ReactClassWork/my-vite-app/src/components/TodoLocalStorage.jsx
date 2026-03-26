import React from 'react';

class TodoLocalStorage extends React.Component {
  constructor(props) {
    super(props);
    const saved = JSON.parse(localStorage.getItem('todo_list')) || [];
    this.state = { tasks: saved, txt: '' };
  }

  addTask() {
    if (!this.state.txt.trim()) return;
    const tasks = [...this.state.tasks, this.state.txt.trim()];
    localStorage.setItem('todo_list', JSON.stringify(tasks));
    this.setState({ tasks, txt: '' });
  }

  deleteTask(index) {
    const tasks = this.state.tasks.filter((_, i) => i !== index);
    localStorage.setItem('todo_list', JSON.stringify(tasks));
    this.setState({ tasks });
  }

  render() {
    const { tasks, txt } = this.state;
    return (
      <>
        <h3>Todo App (LocalStorage)</h3>
        <input type='text' value={txt} placeholder='Enter task'
          onChange={(e) => this.setState({ txt: e.target.value })}
          style={{ padding: '6px', width: '250px', marginRight: '8px' }} />
        <button onClick={this.addTask.bind(this)} style={{ padding: '6px 14px' }}>Add</button>
        <ul>
          {tasks.map((task, i) => (
            <li key={i} style={{ marginBottom: '6px' }}>
              {task} &nbsp;
              <button onClick={() => this.deleteTask(i)}
                style={{ background: 'red', color: 'white', border: 'none', padding: '2px 8px', cursor: 'pointer' }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default TodoLocalStorage;
