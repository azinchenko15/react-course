import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Todo from './components/Todo';
import todos from './components/todos';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.initialData
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.nextId = this.nextId.bind(this);
  }

  nextId() {
    this._nextId = this._nextId || 4;
    return this._nextId++;
  }

  handleAdd(title) {
    let todo = {
      id: this.nextId(),
      title, //title: title
      completed: false
    };

    let todos = [...this.state.todos, todo];

    this.setState({ todos });
  }

  handleEdit(id, title) {
    let todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.title = title;
      }
      return todo;
    });
    this.setState({ todos });
  }

  render() {
    return (
      <main>
        <Header title={this.props.title} todos={this.state.todos}/>
        <section className="todo-list">
          {this.state.todos.map(todo =>
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onEdit={this.handleEdit}
            />
          )}
        </section>
        <Form onAdd={this.handleAdd} />
      </main>
    );
  }
}


App.propTypes = {
  title: React.PropTypes.string,
  initialData: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
  })).isRequired
};

App.defaultProps = {
  title: 'React Todo Application'
};


ReactDOM.render(<App initialData={todos}/>, document.getElementById('root'));
