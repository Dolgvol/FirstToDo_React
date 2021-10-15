import {useState} from 'react'

const NoteForm = ({note, onSubmit}) => {
    const [name, setName] = useState(note?.name || '')
    const [category, setCategory] = useState(note?.category || '')
    const [content, setContent] = useState(note?.content || '')

    const submit = event => {
        event.preventDefault()
        onSubmit({name, category, content})
    }

    return (
    <form onSubmit={submit} name="edit-form" className="edit-form">
        <label className="edit-lable" htmlFor="category1">Category</label>
        <select name="category" className="edit-category fill-edit" id="category1" value={category} 
            onChange={e => setCategory(e.target.value)}>
                
            <option value="Task" className="category-task" id="categoryTask1">Task</option>
            <option value="Random Thought" className="category-thought" id="categoryThought1">Random Thought</option>
            <option value="Idea" className="category-idea" id="categoryIdea1">Idea</option>
        </select>


        <label className="edit-lable" htmlFor="name1">Name</label>
        <input className="edit-name fill-edit" id="name1" value={name} 
            onChange={e => setName(e.target.value)}/>

        <label className="edit-lable" htmlFor="content1">Content</label>
        <textarea className="edit-content fill-edit" id="content1" value={content} 
            onChange={e => setContent(e.target.value)}> </textarea>


        <div className="submit-block" id="submit-block1">
            <button className="submit-btn" id="submit-btn1" type="submit">Submit</button>
        </div>
    </form>
    )
}

export default NoteForm
