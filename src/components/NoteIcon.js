import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBrain, faLightbulb, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {types} from '../enums/categories'

const NoteIcon = ({note}) => {
    let icon
    switch (note.category) {
        case types.Task:
            icon = faShoppingCart
            break

        case types.RandomThough:
            icon = faBrain
            break

        case types.Idea:
            icon = faLightbulb
            break

        default:
            icon = null
    }

    return (
        <div className="item-icon item-cell">
            <div className="icon-wrapper">
                {icon && <FontAwesomeIcon icon={icon}/>}
            </div>
        </div>
    )
}

export default NoteIcon
