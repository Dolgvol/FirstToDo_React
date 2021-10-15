import {makeItem} from '../utils'
import {types} from '../enums/filters'

const initialState = {
    notes: [],
    filter: types.All,
    modal: {
        type: null,
        note: null,
        visible: false
    }
}

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'notes/add':
            return {...state, notes: [...state.notes, makeItem(action.payload)]}

        case 'notes/update':
            console.log(action)
            return {
                ...state,
                notes: state.notes.map(note => note.id === action.payload.id ? makeItem({...note, ...action.payload.data}) : note)
            }

        case 'notes/delete':
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload.id)
            }

        case 'notes/deleteAll':
            if (action.payload.type === 'all') {
                return {...state, notes: []}
            }
            if (action.payload.type === 'active') {
                return {
                    ...state,
                    notes: state.notes.filter(note => !note.active)
                }
            }
            if (action.payload.type === 'archived') {
                return {
                    ...state,
                    notes: state.notes.filter(note => note.active)
                }
            }
            return state

        case 'notes/archiveAll':
            return {
                ...state,
                notes: state.notes.map(note => ({...note, active: false}))
            }

        case 'filter/set':
            return {
                ...state,
                filter: action.payload
            }

        case 'modal/show':
            return {
                ...state,
                modal: {
                    type: action.payload.type,
                    visible: true,
                    note: action.payload.note || null
                }
            }

        case 'modal/hide':
            return {
                ...state,
                modal: {
                    visible: false,
                }
            }

        default:
            return state
    }
}

export default notesReducer
