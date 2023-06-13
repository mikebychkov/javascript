import './delete-form.css';
import { useEffect } from 'react';
import RequestState from '../services/request-state';

const DeleteForm = ({setOpen, entityName, entitiesToDelete, requestMethod, setUpdateData}) => {

    const {requestState, setRequestState, renderRequestState} = RequestState();

    const ents = entitiesToDelete();    

    const onSubmit = () => {

        setRequestState('loading');

        // console.log(JSON.stringify(ents, null, 2));
        
        requestMethod(JSON.stringify(ents.map(e => e.id)))
        .then(r => {
            setRequestState('success');
            setUpdateData(Date.now());
            setTimeout(() => {
                closeForm();
            }, 3000);
        })
        .catch(e => {
            setRequestState('error');
        });
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

    const btnState = () => {
        if (requestState === 'loading' || requestState === 'success') {
            return {disabled: true};
        }
        return {};
    }

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
                        <button onClick={onSubmit} type="button" className="btn btn-outline-danger" {...btnState()}>Delete</button>
                        <button onClick={closeForm} type="button" className="btn btn-outline-primary">Close</button>
                    </div>
                    
                    {
                        renderRequestState()
                    }

                </div>
            </div>
        </div>
    );
}

export default DeleteForm;