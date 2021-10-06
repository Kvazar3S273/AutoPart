import {useField} from 'formik';
import classNames from 'classnames';

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className="mb-3">
            <label htmlFor={props.id || props.name} className="form-label">{label}</label>
            <input className={classNames("form-control",
                { "is-invalid": meta.touched && meta.error },
                { "is-valid": meta.touched && !meta.error },
            )} {...field} {...props} />
            {(meta.touched && meta.error) &&
                <div className="invalid-feedback">{meta.error} </div>}
            </div>
    );
};

export default MyTextInput;