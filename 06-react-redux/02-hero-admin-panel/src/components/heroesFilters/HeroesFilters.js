import { useDispatch, useSelector } from 'react-redux';
import { activeFilterSet } from '../../actions';
import classNames from 'classnames';


// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active (classnames)
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {

    const dispatch = useDispatch();
    const { filters, activeFilter } = useSelector(state => state);

    const filterOnClick = e => {

        const filter = e.target.getAttribute('data-type');        

        dispatch(activeFilterSet(filter));
    }

    const btnClassNames = (type) => classNames(
            'btn',
            {'btn-outline-dark': type === 'all'},
            {'btn-danger': type === 'fire'},
            {'btn-primary': type === 'water'},
            {'btn-success': type === 'wind'},
            {'btn-secondary': type === 'earth'},
            {'active': type === activeFilter}
        );

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {
                        <button onClick={filterOnClick} data-type="all" className={btnClassNames('all')}>Все</button>
                    }
                    {
                        filters.map(f => <button onClick={filterOnClick} key={f.type} data-type={f.type} className={btnClassNames(f.type)}>{f.name}</button>)
                    }
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;