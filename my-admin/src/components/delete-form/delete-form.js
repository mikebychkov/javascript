import './delete-form.css';
import { useEffect } from 'react';
import RequestState from '../services/request-state';
import { useDispatch } from 'react-redux';
import { entitiesDeleted } from '../redux/entitySlice';

const DeleteForm = ({setOpen, entityName, entitiesToDelete, requestMethod, setUpdateData}) => {

    const {requestState, setRequestState, renderRequestState} = RequestState();

    const ents = entitiesToDelete();    

    const dispatch = useDispatch();

    const onSubmit = () => {

        setRequestState('loading');

        // console.log(JSON.stringify(ents, null, 2));
        
        const ids = ents.map(e => e.id);

        requestMethod(JSON.stringify(ids))
        .then(r => {
            setRequestState('success');
            dispatch(entitiesDeleted(ids));
            setTimeout(() => {
                closeForm();
            }, 3000);
        })
        .catch(e => {
            console.error(e);
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
    // eslint-disable-next-line
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