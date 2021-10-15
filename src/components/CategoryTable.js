import CategoryRow from './CategoryRow'


const CategoryTable = (props) => {

    return (
        <div className="table-category">

            <div className="head-row">
                <div className="head-icon-category head-cell"></div>
                <div className="head-notecategory head-cell">Note Category</div>
                <div className="head-active head-cell">Active</div>
                <div className="head-archived head-cell">Archived</div>
            </div>

            <CategoryRow name={'task'}/>
            <CategoryRow name={'thought'}/>
            <CategoryRow name={'idea'}/>

        </div>
    )
}

export default CategoryTable
