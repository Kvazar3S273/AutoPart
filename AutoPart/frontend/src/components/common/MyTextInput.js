import {useField} from 'formik';

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className="mb-3">
            <label htmlFor={props.id || props.name} className="form-label">{label}</label>
            <input className="form-control" {...field} {...props}/>
        </div>
    );
};

export default MyTextInput;