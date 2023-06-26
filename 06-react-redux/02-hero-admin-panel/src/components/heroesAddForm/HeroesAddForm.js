import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import {useHttp} from '../../hooks/http.hook';
import { useDispatch, useSelector } from 'react-redux';

import { heroPosted } from '../../actions';
import Spinner from "../spinner/Spinner";


// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {

    const dispatch = useDispatch();
    const filters = useSelector(state => state.f.filters);

    const { request, process, clearError, setProcess } = useHttp();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [element, setElement] = useState('');

    const onNameChange = e => {
        setName(e.target.value);
    }

    const onDescriptionChange = e => {
        setDescription(e.target.value);
    }

    const onElementChange = e => {
        setElement(e.target.value);
    }

    const resetForm = () => {
        setName('');
        setDescription('');
        setElement('');
    }

    const onFormSubmit = e => {
        e.preventDefault();

        const hero = {
            id: uuidv4(),
            name,
            description,
            element 
        }

        clearError();
        request(`http://localhost:3001/heroes`, 'POST', JSON.stringify(hero, null, 2))
        .then(() => {
            dispatch(heroPosted(hero));
            setProcess('success');
        })

        resetForm();
    }

    const renderForm = () => {

        return (
            <form onSubmit={onFormSubmit} className="border p-4 shadow-lg rounded">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                    <input 
                        required
                        type="text" 
                        name="name" 
                        className="form-control" 
                        id="name" 
                        value={name}
                        onChange={onNameChange}
                        placeholder="Как меня зовут?"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label fs-4">Описание</label>
                    <textarea
                        required
                        name="text" 
                        className="form-control" 
                        id="text" 
                        value={description}
                        onChange={onDescriptionChange}
                        placeholder="Что я умею?"
                        style={{"height": '130px'}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                    <select 
                        required
                        className="form-select" 
                        id="element" 
                        value={element}
                        onChange={onElementChange}
                        name="element">
                        <option >Я владею элементом...</option>
                        {
                            filters.map(f => <option key={f.type} value={f.type}>{f.name}</option>)
                        }
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Создать</button>
            </form>
        )
    }

    return (
        process === 'loading' ? <Spinner/> : renderForm()
    );
}

export default HeroesAddForm;