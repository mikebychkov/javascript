import {useState, memo} from 'react';
import {Container} from 'react-bootstrap';

const propsEqual = (prevProps, newProps) => {

    return prevProps.mail.name === newProps.mail.name && prevProps.text === newProps.text
};

const Form = memo((props) => {

    console.log('render form'); // WHEN USING 'MEMO' FORM DOESNT RERENDER IF PROPS STAY SAME (SHALLOW COMPARISON)
                                // FOR DEEP COMPARISON MUST USE COMPARISON FUNC IN MEMO
    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input value={props.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
}, propsEqual);

function MemoApp() {
    const [data, setData] = useState({
        mail: {
            name: "name@example.com"
        },
        text: 'some text'
    });

    return (
        <>
            <Form mail={data.mail} text={data.text}/>
            <button 
                onClick={() => setData({
                    mail: {
                        name: "name@example.com"
                    },
                    text: 'some text'
                })}>
                Click me
            </button>
        </>
    );
}

export default MemoApp;
