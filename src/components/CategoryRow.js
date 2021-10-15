import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart, faBrain, faLightbulb} from '@fortawesome/free-solid-svg-icons'

const CategoryRow = ({name}) => {

    let icon
    let text
    switch (name) {
        case 'task':
            icon = faShoppingCart
            text = 'Task'
            break

        case 'thought':
            icon = faBrain
            text = 'Random Thought'
            break

        case 'idea':
            icon = faLightbulb
            text = 'Idea'
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