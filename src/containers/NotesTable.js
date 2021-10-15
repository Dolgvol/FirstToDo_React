import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDownload, faTrash} from '@fortawesome/free-solid-svg-icons'
import {connect, useSelector} from 'react-redux'
import NoteRow from '../components/NoteRow'
import {notesSelector} from '../redux/selectors'

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
                {notes.map(note =>
                    <NoteRow key={note.id} note={note}
                             onView={() => props.showModal('view', note)}
                             onEdit={() => props.showModal('edit', note)}
                             onToggleStatus={() => props.toggleStatus(note)}
                             onDelete={() => props.delete(note.id)}/>
                )}
                {notes.length === 0 && <div className="item-row">No data available</div> }
            </div>

            <div className="create-btn-block">
                <button className="create-btn"
                        onClick={() => props.showModal('add')}>Create Note
                </button>
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
        toggleStatus: (note) => dispatch({type: 'notes/update', payload: {id: note.id, data: {active: !note.active}}}),
        showModal: (type, note = null) => dispatch({type: 'modal/show', payload: {type, note}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesTable)
