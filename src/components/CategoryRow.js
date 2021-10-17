import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBrain, faLightbulb, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {labels, types} from '../enums/categories'
import {filterNotes} from '../redux/selectors'
import {useSelector} from 'react-redux'



const CategoryRow = ({name}) => {

  const summary = useSelector(filterNotes)

    let icon
    let text
    let activeCount = 0 
    let archivedCount = 0


    summary[name].forEach(element => {
      if (element.active) {
        activeCount++
      } else {
        archivedCount++
      }
    })

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
                {activeCount}
            </div>

            <div className="item-archived item-cell counter-cell">
                {archivedCount}
            </div>
        </div>
    )
}



export default CategoryRow
