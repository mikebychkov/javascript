import { useFormik } from 'formik';
import * as yup from 'yup';

const fieldArgs = (formik) => {

    return (name, type) => ({
        id: name,
        name: name,
        type: type,
        value: formik.values[name],
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
    });
}

const ValidationError = ({name, formik}) => {

    return (
        formik.errors[name] && formik.touched[name] ? <div className="error">{formik.errors[name]}</div> : null
    );
}

const HookForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            amount: 0,
            currency: '',
            text: '',
            terms: false
        },
        validationSchema: yup.object({
            name: yup.string()
                    .required('Required field')
                    .min(2, 'Minimum 2 simbols'),
            email: yup.string()
                    .required('Required field')
                    .email('Invalid email format'),
            amount: yup.number()
                    .required('Required field')
                    .min(5, 'Minimum 5'),
            currency: yup.string()
                    .required('Required field'),
            text: yup.string()
                    .min(10, 'Minimum 10 simbols'),
            terms: yup.boolean()
                    .required('Required field')
                    .oneOf([true, 'Terms agreement required'])
        }),
        onSubmit: values => console.log(JSON.stringify(values, null, 2)) 
    });

    const fargs = fieldArgs(formik);

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <h2>Отправить пожертвование</h2>

            <label htmlFor="name">Ваше имя</label>
            <input { ...fargs('name', 'string') }/>
            <ValidationError name="name" formik={formik}/>

            <label htmlFor="email">Ваша почта</label>
            <input { ...fargs('email', 'email') }/>
            <ValidationError name="email" formik={formik}/>

            <label htmlFor="amount">Количество</label>
            <input { ...fargs('amount', 'number') }/>
            <ValidationError name="amount" formik={formik}/>

            <label htmlFor="currency">Валюта</label>
            <select { ...fargs('currency', 'string') }>
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
            </select>
            <ValidationError name="currency" formik={formik}/>

            <label htmlFor="text">Ваше сообщение</label>
            <textarea { ...fargs('text', 'string') }/>
            <ValidationError name="text" formik={formik}/>

            <label className="checkbox">
                <input { ...fargs('terms', 'checkbox') } />
                Соглашаетесь с политикой конфиденциальности?
            </label>
            <ValidationError name="terms" formik={formik}/>

            {/* <button type="submit" onClick={e => {
                e.preventDefault();
                formik.handleSubmit();
            }}>Отправить</button> */}
            <button type="submit">Отправить</button>
        </form>
    )
}

export default HookForm;