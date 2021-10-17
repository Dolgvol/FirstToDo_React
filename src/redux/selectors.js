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


export const filterNotes = (state) => {

    const inputArray = state.notes
    const objOfArrays = {}
 
    inputArray.forEach((object) => {
       if (objOfArrays.hasOwnProperty(object.category)) {
          objOfArrays[object.category].push(object)
       } else {
          objOfArrays[object.category] = [object]
       }
    })
    return objOfArrays
 }

 