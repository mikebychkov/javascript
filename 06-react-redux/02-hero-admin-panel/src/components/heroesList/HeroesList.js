import { useHttp } from '../../hooks/http.hook';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { heroesFetched, heroDeleted, filtersFetched } from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';
import './HeroesList.css';


// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {

    const dispatch = useDispatch();
    const { heroes, activeFilter } = useSelector(state => state);
    const { request, process, clearError } = useHttp();

    const [fetchStatus, setFetchStatus] = useState('');
    const [deleteStatus, setDeleteStatus] = useState('');
    const [deleteItem, setDeleteItem] = useState('');

    useEffect(() => {

        clearError();
        setFetchStatus(process);

        request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .finally(() => setFetchStatus(process));

        request("http://localhost:3001/filters")
            .then(data => dispatch(filtersFetched(data)));

        // eslint-disable-next-line
    }, []);

    const onItemDelete = id => () => {

        clearError();
        setDeleteStatus(process);
        setDeleteItem(id);

        request(`http://localhost:3001/heroes/${id}`, 'DELETE')
            .then(() => dispatch(heroDeleted(id)))
            .finally(() => {
                setDeleteStatus(process);
                setDeleteItem('');
            });
    }

    if (fetchStatus === "loading") {
        return <Spinner/>;
    } else if (fetchStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {

        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        if (activeFilter !== 'all') {
            arr = arr.filter(h => h.element === activeFilter);
        }

        return (
            <TransitionGroup>
                {
                    arr.map(({id, ...props}) => (
                        <CSSTransition key={id} timeout={500} classNames="item">
                            {
                                deleteStatus === 'loading' && id === deleteItem ? <Spinner key={id}/> 
                                : <HeroesListItem key={id} {...props} onItemDelete={onItemDelete(id)}/>
                            }
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        )
        
    }

    return (
        <ul>
            {renderHeroesList(heroes)}
        </ul>
    )
}

export default HeroesList;