import {labels} from '../enums/categories'
import NoteIcon from './NoteIcon'


const NoteView = ({note}) => {


   return (
      <div >
         <div className="view-created">
            <div className="head-created">
            created:
            </div>

            <div className="text-created fill-view">
               {note.created}
            </div>
         </div>

         <div className="view-title">
            <div className="icon-wrapper fill-view">
               <NoteIcon note={note}/>
            </div>

            <div className="view-category fill-view">
               {labels[note.category]}
            </div>
         </div>

         <div className="view-name fill-view">
            {note.name}
         </div>

         <div className="view-content fill-view">
            {note.content}
         </div>

         <div className="view-dates fill-view">
            {note.dates}
         </div>
      </div>
   )
}

export default NoteView
