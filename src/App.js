import Modal from './containers/Modal'
import NotesTable from './components/NotesTable'

function App(props) {
    return (
        <div className="App">
            <NotesTable/>
            <Modal/>
        </div>
    )
}

export default App
