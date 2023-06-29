import { useEffect } from 'react';
import './main.css';
import DataTable from '../data-table/data-table';
import { resolveEntityRequestMethod } from '../services/entity-resolve-service';
import { useDispatch, useSelector } from 'react-redux';
import { entitiesLoaded } from '../redux/entitySlice';

const Main = () => {

	const token = useSelector(state => state.e.token);
	const entityName = useSelector(state => state.e.entityName);

	const {get, post, del} = resolveEntityRequestMethod(token, entityName);

	const dispatch = useDispatch();

	useEffect(() => {

		if (get) {
			get()
			.then(d => dispatch(entitiesLoaded(d.map(e => {return {...e, checked: false}}))))
			.catch(e => console.error(e));
		}
	// eslint-disable-next-line
	}, [entityName]);

	return (
		<div className="main">

			<div className="header">{entityName}</div>

			<div className="main-content">
				<DataTable entityName={entityName} postRequest={post} deleteRequest={del}/>          
			</div>            

		</div>
	);
}

export default Main;
