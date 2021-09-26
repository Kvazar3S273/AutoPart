﻿using FluentValidation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AutoPart.Models
{
    public class RegisterViewModel
    {
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string Phone { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }

    }

    public class AccountValidator : AbstractValidator<RegisterViewModel>
    {
        public AccountValidator()
        {
            RuleFor(x => x.Email)
                .NotEmpty()
                .WithMessage("Поле Email не може бути порожнім")
                .MinimumLength(6)
                .EmailAddress()
                .WithMessage("Помилка заповнення поля Email");
            RuleFor(x => x.Password)
                .NotEmpty()
                .WithMessage("Поле Password не може бути порожнім")
                .MinimumLength(5)
                .WithMessage("Пароль не може бути коротший, ніж 5 символів")
                .Matches(@"\d")
                .WithName("Password")
                .WithMessage("Пароль повинен містити хоча б одну цифру");
            RuleFor(x => x.Phone)
                .NotEmpty()
                .WithMessage("Поле Phone не може бути порожнім")
                .MinimumLength(10)
                .MaximumLength(11)
                .WithMessage("Має бути не менше 10 і не більше 11 цифр");
            RuleFor(x => x.ConfirmPassword)
                .NotEmpty()
                .WithMessage("Поле ConfirmPassword не може бути порожнім")
                .Equal(x=>x.Password)
                .WithMessage("Введене підтвердження не співпадає з паролем");


        }
    }
}
