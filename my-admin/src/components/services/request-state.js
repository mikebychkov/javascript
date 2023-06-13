import { useState } from "react";
import MySpinner from '../spinner/my-spinner';

const RequestState = () => {

    const [requestState, setRequestState] = useState();

    const renderRequestState = () => {
        switch(requestState) {
            case 'loading': return <MySpinner/>;
            case 'success': return <div className="success">SUCCESSFULLY SUBMITED</div>;
            case 'error': return <div className="error">SOMETHING WENT WRONG</div>;
            default: return null;
        }
    }

    return { requestState, setRequestState, renderRequestState };
}

export default RequestState;