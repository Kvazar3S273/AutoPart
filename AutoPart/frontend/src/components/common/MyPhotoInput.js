import { useState } from "react";
const MyPhotoInput = ({
    refFormik,
    field
}) => {
    //const [photo, setPhoto] = useState("http://www.hollywoodprimaryschool.co.uk/wp-content/uploads/male-placeholder-600x600.jpg");
    const [photo, setPhoto] = useState("https://i.ibb.co/Hx6XY8w/back.jpg");

    const onChangeHandler = (event) => {
        const file = event.currentTarget.files[0];
        setPhoto(URL.createObjectURL(file));
        refFormik.current.setFieldValue(field,file);
    }

    return (
        <div className="mb-3">
            <label htmlFor={field} className="form-label">
                <img src={photo} 
                width="200" 
                alt="people img"
                style={{cursor: "pointer"}}
                />
            </label>
            <input type="file"
            id={field}
            name={field}
            className="d-none"
            onChange={onChangeHandler}
            />
        </div>
    );
}
export default MyPhotoInput;