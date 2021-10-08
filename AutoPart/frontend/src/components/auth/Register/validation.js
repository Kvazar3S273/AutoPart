import * as Yup from 'yup';

const validationFields = () => {
    return Yup.object({
        email: Yup.string()
            .email("Не коректно вказана пошта")
            .required("Вкажіть пошту"),
        phone: Yup.string()
            .required("Вкажіть номер телефону")
            .matches(/[0-9]{10}/, "Повинно бути не менше 10 цифр"),
        secondName: Yup.string()
            .required("Вкажіть прізвище"),
        firstName: Yup.string()
            .required("Вкажіть ім'я"),
        password: Yup.string()
            .required("Введіть пароль")
            .min(5, "Пароль занадто короткий, потрібно не менше 5 символів")
            .matches(/[a-zA-Z]/, "Пароль повинен містити хоча б одну латинську літеру"),
        confirmpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Не співпадає з введеним паролем")
            .required("Підтвердіть введений пароль")
    });
}
export default validationFields;