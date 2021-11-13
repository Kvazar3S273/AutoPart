import { useState } from "react";

const PhotoInputAddProd=({refFormik,field})=>{

     const[photo,setPhoto]=useState("https://www.buro247.ua/thumb/670x830_0/images/2020/1/popular-2010s-memes-in-know-your-meme-video-01.jpg");
    
    const OnChangeHandler=(event)=>{
        const file=event.currentTarget.files[0];
        setPhoto(URL.createObjectURL(file));       
        refFormik.current.setFieldValue(field,file);
    }

    return (
        <div className="mb-4">

            <label htmlFor={field}
                className="form-label">

                <img src={photo}
                    alt="userphoto"
                    width="150"
                    style={{ cursor: "pointer" }} />

            </label>
            <input type="file"
            id={field}
            name={field}
            className="d-none"
            onChange={OnChangeHandler}/>

        </div>

    );

}

export default PhotoInputAddProd;