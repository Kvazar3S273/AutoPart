import { useState } from "react";
const MyPhotoInput = ({
    field
}) => {
    const [photo, setPhoto] = useState("http://www.hollywoodprimaryschool.co.uk/wp-content/uploads/male-placeholder-600x600.jpg");

    const onChangeHandler = (event) => {
        const file = event.currentTarget.files[0];
        setPhoto(URL.createObjectURL(file));
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