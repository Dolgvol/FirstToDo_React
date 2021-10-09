import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart, faBrain, faLightbulb} from '@fortawesome/free-solid-svg-icons'

const NoteIcon = ({note}) => {
    let icon
    switch (note.category) {
        case 'Task':
            icon = faShoppingCart
            break;

        case 'Random Thought':
            icon = faBrain
            break;

        case 'Idea':
            icon = faLightbulb
            break;
        default:
            icon = null
    }

    return <div className="item-icon item-cell">
        <div className="icon-wrapper">
            <FontAwesomeIcon icon={icon}/>
        </div>
    </div>
}

export default NoteIcon
