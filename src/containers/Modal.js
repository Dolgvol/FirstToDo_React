import {connect} from 'react-redux'
import NoteForm from '../components/NoteForm'

const Modal = ({modal, store, update, hide}) => {
    if (!modal.visible) return ''

    const submit = data => {
        if (modal.note) {
            update(modal.note.id, data)
        } else {
            store(data)
        }
        hide()
    }

    return (
        <div className="modal-wrapper">
            <div className="modal-block">
                <div className="close-btn-block">
                    <button className="close-btn-modal"
                            onClick={() => hide()}>Close
                    </button>
                </div>
                <div>
                    {modal.type === 'view' ? '' : <NoteForm note={modal.note} onSubmit={submit}/>}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        modal: state.modal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        store: payload => dispatch({type: 'notes/add', payload}),
        update: (id, data) => dispatch({type: 'notes/update', payload: {id, data}}),
        hide: () => dispatch({type: 'modal/hide'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
