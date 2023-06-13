import './delete-form.css';
import { useEffect } from 'react';

const DeleteForm = ({setOpen, entityName, entitiesToDelete}) => {

    const ents = entitiesToDelete();    

    const onSubmit = () => {

        console.log(JSON.stringify(ents, null, 2));
        
        // STATUS HERE + BLOCK SUBMIT BUTTON IF RESPONSE OK + CLOSE BY TIMER IF RESPONSE OK

    }

    const closeForm = () => {
        setOpen(false);
    }

    const onEsc = e => {
        if (e.code === 'Escape') {
            closeForm();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onEsc);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onEsc);
            document.body.style.overflow = '';
        }    
    }, []);

    return (
        <div className="modal fade show" id="myModal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                
                    <div className="modal-header">
                        <h4 className="modal-title header">{entityName}</h4>
                        <button onClick={closeForm} type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    

                    <div className="modal-body">

                    <p className="danger">You about to delete {ents.length} entities of {entityName}:</p>

                    {
                        ents.map(e => {
                            return <p key={e.id}>id: {e.id}</p>
                        })
                    }
                        
                    </div>
                    
                    <div className="modal-footer">
                        <button onClick={onSubmit} type="button" className="btn btn-outline-danger">Delete</button>
                        <button onClick={closeForm} type="button" className="btn btn-outline-primary">Close</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default DeleteForm;