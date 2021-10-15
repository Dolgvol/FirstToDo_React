import Modal from './containers/Modal'
import FilterBlock from './containers/FilterBlock'
import NotesTable from './containers/NotesTable'
import CategoryTable from './components/CategoryTable'

function App(props) {
    return (
        <div className="App">
            <div className="wrapper">
                <FilterBlock/>
                <NotesTable/>
                <CategoryTable/>
            </div>
            <Modal/>
        </div>
    )
}

export default App
