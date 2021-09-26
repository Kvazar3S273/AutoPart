import PropTypes from "prop-types";
import classnames from "classnames";

const TextBoxField = ({
    field,
    className,
    value,
    label,
    type,
    onChangeHandler
}) => {
    return (
        <div className="col-md-12">
            <label htmlFor={field} className="form-label">{label}</label>
            <input type={type}
                className={className}
                id={field}
                name={field}
                value={value}
                onChange={onChangeHandler}
            />
        </div>
    );

}

TextBoxField.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired
  };


TextBoxField.defaultProps ={
    type: "text",
    className: "form-control is-invalid"
}

export default TextBoxField;