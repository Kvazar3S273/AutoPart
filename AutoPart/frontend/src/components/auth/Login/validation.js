import * as Yup from 'yup';

const validationFields= () => {
    return Yup.object({
        email: Yup.string()
            .email("Не коректно вказана пошта")
            .required("Вкажіть пошту"),
        password: Yup.string()
        .required("Введіть пароль")
        .min(5, "Пароль занадто короткий, потрібно не менше 5 символів")
        .matches(/[a-zA-Z]/, "Пароль повинен містити хоча б одну латинську літеру")
    });
}
export default validationFields;