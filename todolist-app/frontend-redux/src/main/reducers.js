import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar a fatura do cartão',
            done: true 
        }, {
            _id: 2,
            description: 'Reunião',
            done: false
        }, {
            _id: 3,
            description: 'Médico',
            done: false
        }]
    })
})

export default rootReducer