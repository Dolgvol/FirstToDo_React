import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBrain, faLightbulb, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {labels, types} from '../enums/categories'

const CategoryRow = ({name}) => {

    let icon
    let text
    switch (name) {
        case types.Task:
            icon = faShoppingCart
            text = labels[types.Task]
            break

        case types.RandomThough:
            icon = faBrain
            text = labels[types.RandomThough]
            break

        case types.Idea:
            icon = faLightbulb
            text = labels[types.Idea]
            break

        default:
            icon = null
            text = null
    }

    return (
        <div className="item-row">

            <div className="item-icon-category item-cell">
                <div className="icon-wrapper">
                    <FontAwesomeIcon icon={icon}/>
                </div>
            </div>

            <div className="item-notecategory item-cell">
                {text}
            </div>

            <div className="item-active item-cell counter-cell">
                0
            </div>

            <div className="item-archived item-cell counter-cell">
                0
            </div>
        </div>
    )
}

export default CategoryRow
