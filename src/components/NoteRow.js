import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDownload, faEye, faPen, faTrash, faUpload} from '@fortawesome/free-solid-svg-icons'
import NoteIcon from "./NoteIcon";

const NoteRow = ({note, onView, onEdit, onDelete}) => {
    return <div className={`item-row ${note.active ? 'active' : 'archived'}`}>
        <NoteIcon note={note}/>
        <div className="item-name item-cell">{note.name}</div>
        <div className="item-created item-cell">{note.created}</div>
        <div className="item-category item-cell">{note.category}</div>
        <div className="item-content item-cell">{note.content}</div>
        <div className="item-dates item-cell">{note.dates}</div>
        <div className="item-managment">
            <a className="open-modal managment-icon" onClick={() => onView()}>
                <FontAwesomeIcon icon={faEye}/>
            </a>
            <a className='edit-current managment-icon' onClick={() => onEdit()}>
                <FontAwesomeIcon icon={faPen}/>
            </a>
            <a className='archive-current managment-icon'>
                <FontAwesomeIcon icon={note.active ? faDownload : faUpload}/>
            </a>
            <a className='delete-current managment-icon' onClick={() => onDelete()}>
                <FontAwesomeIcon icon={faTrash}/>
            </a>
        </div>
    </div>
}

export default NoteRow
