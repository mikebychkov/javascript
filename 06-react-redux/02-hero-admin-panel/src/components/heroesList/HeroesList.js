import { useHttp } from '../../hooks/http.hook';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { heroDeleted, fetchHeroes } from './HeroSlice';
import { fetchFilters } from '../heroesFilters/FilterSlice';

import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';
import './HeroesList.css';


// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {

    const dispatch = useDispatch();

    const heroSelector = createSelector(
        state => state.h.heroes,
        state => state.f.activeFilter,
        (heroes, activeFilter) => {
            if (activeFilter === 'all') {
                return heroes
            } else {
                return heroes.filter(h => h.element === activeFilter)
            }
        }
    );
    const heroes = useSelector(heroSelector);
    const fetchStatus = useSelector(state => state.h.heroesFetchStatus)


    useEffect(() => {

        dispatch(fetchHeroes());
        dispatch(fetchFilters());

        // eslint-disable-next-line
    }, []);

    const [deleteStatus, setDeleteStatus] = useState('');
    const { request } = useHttp();

    const onItemDelete = id => () => {
        setDeleteStatus('loading');;
        request(`http://localhost:3001/heroes/${id}`, 'DELETE')
            .then(() => {
                dispatch(heroDeleted(id));
                setDeleteStatus('success');
            })
            .catch(() => setDeleteStatus('error'));
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

        return (
            <TransitionGroup>
                {
                    arr.map(({id, ...props}) => (
                        <CSSTransition key={id} timeout={500} classNames="item">
                            <HeroesListItem key={id} {...props} onItemDelete={onItemDelete(id)}/>
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