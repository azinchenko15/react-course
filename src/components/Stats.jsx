import React from 'react';

function Stats(props) {
  let all = props.todos.length;
  let completed = props.todos.filter(todo => todo.completed).length;
  let notCompleted = all - completed;

  return(
    <table className="stats">
      <tr>
        <th>Всего:</th>
        <td>{all}</td>
      </tr>
      <tr>
        <th>Выполнено:</th>
        <td>{completed}</td>
      </tr>
      <tr>
        <th>Осталось:</th>
        <td>{notCompleted}</td>
      </tr>
    </table>
  )
}

Stats.propTypes = {
  todos: React.PropTypes.array.isRequired
};

export default Stats;
