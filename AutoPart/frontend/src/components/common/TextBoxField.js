import PropTypes from "prop-types";

const TextBoxField = ({
    field,
    value,
    label,
    type,
    num,
    onChangeHandler
}) => {
    return (
        <div className="col-md-12">
            <label htmlFor={field} className="form-label">{label}+{num}</label>
            <input type={type}
                className="form-control is valid"
                id={field}
                name={field}
                num={num}
                value={value}
                onChange={onChangeHandler}
                required
            />
            {/* <div className="valid-feedback"> Добре є </div>
            <div className="invalid-feedback"> Не повністю або неправильно заповнене поле! </div> */}
        </div>
    );

}

TextBoxField.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired
  };


TextBoxField.defaultProps ={
    type: "text"
}

export default TextBoxField;