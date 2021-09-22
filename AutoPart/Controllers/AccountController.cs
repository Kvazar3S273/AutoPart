﻿using AutoPart.Models;
using DataAutoPart.Entities.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutoPart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly RoleManager<AppRole> _roleManager;
        public AccountController(UserManager<AppUser> userManager,
                                SignInManager<AppUser> signInManager,
                                RoleManager<AppRole> roleManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
        }
        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> RegisterAsync([FromBody] RegisterViewModel model)
        {
            AccountValidator validRules = new();
            var res = validRules.ValidateAsync(model);

            //якщо модель не валідна:
            if (!res.Result.IsValid)
            {
                return BadRequest(res.Result.Errors);
            }

            //шукаю користувача по емейлу.
            var user = await _userManager.FindByEmailAsync(model.Email);

            //якщо такий користувач вже існує:
            if (user != null)
            {
                return BadRequest(new { message = "Такий користувач вже існує" });
            }

            return Ok();
        }

    }
}
