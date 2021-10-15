import { connect } from 'react-redux'
import NoteForm from '../components/NoteForm'

const Modal = ({modal, submitUserAction, hide}) => {
    if (!modal.visible) return ''

    const submit = data => {
        if (modal.note) {
            submitUserAction(modal.type, {id: modal.note.id, data})
        } else {
            submitUserAction(modal.type, data)
        }
        hide()
    }

    return (
    <div className="modal-wrapper">
        <div className="modal-block">
            <div className="close-btn-block">
                <button className="close-btn-modal" 
                onClick={() => hide()}>Close</button>
            </div>
            <div>
                {modal.type === 'view' ? '' : <NoteForm note={modal.note} onSubmit={submit}/> }
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
        submitUserAction: (action, payload) => dispatch({type: `notes/${action}`, payload}),
        hide: () => dispatch({type: 'modal/hide'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
