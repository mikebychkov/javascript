import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const InputField = ({name, label, type, as, children}) => {
    return (
        <>
        <label htmlFor={name}>{label}</label>
        <Field
            id={name}
            name={name}
            type={type}
            as={as}>
                {children}
        </Field>
        <ErrorMessage className="error" name={name} component="div"/>
        </>
    );
}

const ComponentForm = () => {

    const formikProps = {
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
    };

    return (
        <Formik {...formikProps}>
            <Form className="form">
                <h2>Отправить пожертвование</h2>
                <InputField 
                    id="name"
                    name="name"
                    type="text"
                />
                <InputField
                    id="email"
                    name="email"
                    type="email"
                />
                <InputField
                    id="amount"
                    name="amount"
                    type="number"
                />

                <InputField
                    id="currency"
                    name="currency"
                    as="select">
                        <option value="">Выберите валюту</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </InputField>

                <InputField 
                    id="text"
                    name="text"
                    as="textarea"
                />
                
                <label className="checkbox">
                    <Field name="terms" type="checkbox"/>
                    Соглашаетесь с политикой конфиденциальности?
                </label>
                <ErrorMessage className="error" name="terms" component="div"/>
                
                <button type="submit">Отправить</button>
            </Form>            
        </Formik>
    )
}

export default ComponentForm;