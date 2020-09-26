import React from 'react';
import { TodoListItem } from './TodoListItem';
import PropTypes from 'prop-types';

export const TodoList = ({todos, handleToggle, handleDelete}) => {
    return (
        <ul className='list-group list-group-flush'>
            {
                todos.map( (todo, i) => 
                    <TodoListItem
                        key= {todo.id}
                        todo= {todo}
                        i= {i}
                        handleToggle= {handleToggle}
                        handleDelete= {handleDelete}
                    />
                )
            }
        </ul>
    );
};

TodoList.propTypes= {
    todos: PropTypes.array.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};