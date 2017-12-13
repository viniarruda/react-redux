import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandle = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd() //Se o shift for apertado busca, se não adiciona
        } else if (e.key === 'Escape') {
            props.handleClear()
        } else if (e.key === 'Esc') {
            props.refresh()
        }
    }
    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control' placeholder='Aula 51' value={props.description} onChange={props.handleChange} onKeyUp={keyHandle}></input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
                <IconButton style='info' icon='search' onClick={props.handleSearch}></IconButton>
                <IconButton style='default' icon='close' onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
}