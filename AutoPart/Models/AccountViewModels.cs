using FluentValidation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AutoPart.Models
{
    public class RegisterViewModel
    {
        [Display(Name = "Email")]
        [Required(ErrorMessage = "Обов'язкове поле")]
        [EmailAddress(ErrorMessage = "Не коректна пошта")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Обов'язкове поле")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Обов'язкове поле")]
        public string SecondName { get; set; }

        [Display(Name = "Phone")]
        [Required(ErrorMessage = "Обов'язкове поле")]
        [EmailAddress(ErrorMessage = "Не коректний номер телефону")]
        public string Phone { get; set; }

        [Display(Name = "Password")]
        [DataType(DataType.Password)]
        [Required(ErrorMessage = "Неправильний пароль")]
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }

    }

    public class AccountValidator : AbstractValidator<RegisterViewModel>
    {
        public AccountValidator()
        {
            RuleFor(x => x.Email)
                .NotEmpty()
                .MinimumLength(6)
                .EmailAddress()
                .WithMessage("Поле не може бути порожнім");
            RuleFor(x => x.Password)
                .NotEmpty()
                .MinimumLength(5)
                .WithMessage("Поле не може бути порожнім");
            RuleFor(x => x.ConfirmPassword)
                .Equal(x => x.Password)
                .WithMessage("Поле не може бути порожнім");
            RuleFor(x => x.Phone)
                .NotEmpty()
                .MinimumLength(10)
                .MaximumLength(11)
                .WithMessage("Поле не може бути порожнім");

        }
    }
}
