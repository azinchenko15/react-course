import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Todo from './components/Todo';

function App(props) {
  return (
    <main>
      <Header title={props.title} />
      <section className="todo-list">
        <Todo title={ "Learn JS" } completed={true} />
        <Todo title={ "Learn React" } completed={false} />
      </section>
    </main>
  );
}

App.propTypes = {
  title: React.PropTypes.string,
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
  })).isRequired
};

App.defaultProps = {
  title: 'React Todo Application'
};


ReactDOM.render(<App />, document.getElementById('root'));
