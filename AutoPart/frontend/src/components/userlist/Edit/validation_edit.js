import * as Yup from "yup";
const validateEdit=()=>{
    return Yup.object({
        email: Yup.string()
            .email('Введіть коректні дані')          
    });
}

export default validateEdit;