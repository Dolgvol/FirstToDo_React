import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDownload, faTrash} from '@fortawesome/free-solid-svg-icons'
import {connect, useSelector} from 'react-redux'
import NoteRow from './NoteRow'

const notesSelector = ({filter, notes}) => {
    if (filter === 'all') {
        return notes
    }

    return notes.filter(note => filter === 'active' ? note.active : !note.active)
}

const NotesTable = (props) => {
    const notes = useSelector(notesSelector)

    return (
    <div className="table-main" id="table-main1">

        <div className="head-row">
            <div className="head-icon head-cell"></div>
            <div className="head-name head-cell">Name</div>
            <div className="head-created head-cell">Created</div>
            <div className="head-category head-cell">Category</div>
            <div className="head-content head-cell">Content</div>
            <div className="head-dates head-cell">Dates</div>
            <div className="head-managment head-cell">
                <a className='archive-all' onClick={() => props.archiveAll()}>
                    <FontAwesomeIcon icon={faDownload}/>
                </a>
                <a className='delete-all' onClick={() => props.deleteAll(props.selectedType)}>
                    <FontAwesomeIcon icon={faTrash}/>
                </a>
            </div>
        </div>


        <div className="items">
            {notes.map(note => {
                <NoteRow key={note.id} note={note} 
                onView={() => props.showModal('view')}
                onEdit={() => props.showModal('edit')}
                onArchivate={() => {}}
                onActivate={() => {}}
                onDelete={() => props.delete(note.id)}/>
                }
            )}
        </div>

        <div className="create-btn-block">
            <button className="create-btn" 
            onClick={() => props.showModal('add')}>Create Note</button>
        </div>

    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedType: state.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteAll: (type) => dispatch({type: `notes/deleteAll`, payload: {type}}),
        archiveAll: () => dispatch({type: 'notes/archiveAll'}),
        delete: (id) => dispatch({type: 'notes/delete', payload: {id}}),
        showModal: (type) => dispatch({type: 'modal/show', payload: {type}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesTable)
