import {connect} from 'react-redux'
import {labels} from '../enums/filters'

const FilterBlock = ({value, onChange}) => {
    return (
        <div className="filter-block">
            <select name="filter" className="filter" value={value} onChange={e => onChange(e.target.value)}>
                {Object.entries(labels).map(([key, text]) => <option key={key} value={key}
                className="filter-option">{text}</option>)}
            </select>
        </div>
    )
}

const mapStateToProps = (state) => ({
    value: state.filter
})

const mapDispatchToProps = (dispatch) => ({
    onChange: (value) => dispatch({type: 'filter/set', payload: value})
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterBlock)
