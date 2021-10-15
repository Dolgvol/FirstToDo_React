import {types} from '../enums/filters'

export const notesSelector = ({filter, notes}) => {
    switch (filter) {
        case types.All:
        default:
            return notes
        case types.Active:
            return notes.filter(note => note.active)
        case types.Archived:
            return notes.filter(note => !note.active)
    }
}
