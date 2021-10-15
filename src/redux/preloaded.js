import {makeItem} from '../utils'
import {types} from '../enums/categories'

const notes = [
    {
        active: true,
        category: types.Task,
        created: 'April 20, 2021',
        name: 'Shopping list',
        content: 'Buy bread, cheese 5/5/2021',
    },
    {
        active: true,
        category: types.Task,
        created: 'April 21, 2021',
        name: 'Visit dentist',
        content: 'I have an appointment with the dentist for 14:00 at 25.04.2021',
    },
    {
        active: true,
        category: types.RandomThough,
        created: 'April 19, 2021',
        name: 'Bluetooth adapter',
        content: 'I can use bluetooth adapter on my pc',
    },
    {
        active: true,
        category: types.Idea,
        created: 'April 18, 2021',
        name: 'App problem',
        content: 'I can solve problem with my webapp by using this library',
    },

    {
        active: false,
        category: types.Task,
        created: 'April 1, 2021',
        name: 'Shopping list',
        content: 'Melon, orange, apple, mango 2-04-2021',
    },
    {
        active: false,
        category: types.RandomThough,
        created: 'April 5, 2021',
        name: 'Evolution of apes',
        content: 'Can I understand it by drawing an evolutionary tree?',
    },
    {
        active: false,
        category: types.Idea,
        created: 'April 3, 2021',
        name: 'New features',
        content: 'Implement new features from article in my project',
    },
]

export default {
    notes: notes.map((itemNote) => makeItem(itemNote)),
    filter: 'all',
    modal: {
        type: null,
        note: null,
        visible: false
    }
}
