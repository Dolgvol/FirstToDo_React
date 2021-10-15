import Modal from './containers/Modal'
import FilterBlock from './components/FilterBlock'
import NotesTable from './components/NotesTable'
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
