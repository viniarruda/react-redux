import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []

        return list.map(todo => (
            <div key={todo._id} className='card-todo'>
                <div id='card-text' className={todo.done ? 'markedAsDone' : ''}>{todo.description}</div>
                <div className='card-buttons'>
                    <IconButton style='success btn-card' icon='check' hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}></IconButton>
                    <IconButton style='warning btn-card' icon='undo' hide={!todo.done}
                        onClick={() => props.handleMarkAsPending(todo)}></IconButton>
                    <IconButton style='danger btn-card' icon='trash-o' hide={!todo.done}
                        onClick={() => props.handleRemove(todo)}></IconButton>
                </div>
            </div>
        ))
    }

    return (
        <div className='table'>
            <div className='list'>
            {renderRows()}
            </div>
        </div>
    )
}