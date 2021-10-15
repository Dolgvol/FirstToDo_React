import {makeItem} from '../utils'

const initialNotes = [
    {
       active: true,
       category: 'Task',
       created : 'April 20, 2021',
       name: 'Shopping list',
       content: 'Buy bread, cheese 5/5/2021',
    },
    {
       active: true,
       category: 'Task',
       created : 'April 21, 2021',
       name: 'Visit dentist',
       content: 'I have an appointment with the dentist for 14:00 at 25.04.2021',
    },
    {
       active: true,
       category: 'Random Thought',
       created : 'April 19, 2021',
       name: 'Bluetooth adapter',
       content: 'I can use bluetooth adapter on my pc',
    },
    {
       active: true,
       category: 'Idea',
       created : 'April 18, 2021',
       name: 'App problem',
       content: 'I can solve problem with my webapp by using this library',
    },
 
    {
       active: false,
       category: 'Task',
       created : 'April 1, 2021',
       name: 'Shopping list',
       content: 'Melon, orange, apple, mango 2-04-2021',
    },
    {
       active: false,
       category: 'Random Thought',
       created : 'April 5, 2021',
       name: 'Evolution of apes',
       content: 'Can I understand it by drawing an evolutionary tree?',
    },
    {
       active: false,
       category: 'Idea',
       created : 'April 3, 2021',
       name: 'New features',
       content: 'Implement new features from article in my project',
    },
 ]

const initialState = {    
    notes: [],
    filter: 'all',
    modal: {
        type: null,
        note: null,
        visible: false
    }
}

initialState.notes = initialNotes.map((itemNote) => {
    return makeItem(itemNote);
 })
 

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case 'notes/add':
            return {...state, notes: [...state.notes, makeItem(action.payload)]}
        
        case 'notes/update':
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
                    notes: state.notes.filter(note => note.active)
                }
            }
            if (action.payload.type === 'archived') {
                return {
                    ...state,
                    notes: state.notes.filter(note => !note.active)
                }
            }
        
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
