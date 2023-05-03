import { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import MarvelService from '../../services/MarvelService';
import AppContext from '../app/app-context';
import './char-find.scss';

const CharFind = () => {

    const [char, setChar] = useState({});

    const {onCharSelect} = useContext(AppContext);

    const {getCharByName} = MarvelService();

    const findChar = name => {

        if (typeof(name) != 'string') return;

        getCharByName(name)
            .then(char => setChar(char));
    }

    const formik = useFormik({
        initialValues: {
            charfind: ''
        },
        validationSchema: yup.object({
            charfind: yup.string().required('You need to specify character name')
        }),
        onSubmit: values => findChar(values.charfind)
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="find-char">
                <p className="find-char-label">Or find a character by name:</p>
                <div className="find-char-grid">
                    <div className="find-char-col">
                        <input 
                            className="find-char-input" 
                            id="charfind" 
                            name="charfind" 
                            type="text" 
                            placeholder="Enter name" 
                            value={formik.values.charfind}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />    
                    </div>
                    <div className="find-char-col">
                        <button className="button button__main" type="submit">
                            <div className="inner">Find</div>
                        </button>
                    </div>
                    <div className="find-char-col">
                        { formik.errors.charfind && formik.touched.charfind ? <p className="find-char-label__fail">{formik.errors.charfind}</p> : null }
                        {char.id && formik.touched.charfind ? (
                            <p className="find-char-label__succ">The character {char.name} was found</p>
                            ) : null}
                        {!char.id && formik.touched.charfind && !formik.errors.charfind ? (
                            <p className="find-char-label__fail">The character was not found</p>
                            ) : null}
                    </div>
                    {char.id ? (
                        <div className="find-char-col">
                            <Link to={`characters/${char.id}`} onClick={() => {onCharSelect(char)}}>
                                <button className="button button__secondary" type="button">
                                    <div className="inner">To page</div>
                                </button>
                            </Link>
                        </div>
                    ) : null}
                </div>
            </div>
        </form>
    );
};

export default CharFind;