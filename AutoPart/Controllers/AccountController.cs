using AutoPart.Constants;
using AutoPart.Models;
using AutoPart.Services;
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
        private IJwtTokenService _tokenService;

        public AccountController(UserManager<AppUser> userManager,
                                SignInManager<AppUser> signInManager,
                                RoleManager<AppRole> roleManager,
                                 IJwtTokenService tokenService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _tokenService = tokenService;
        }
        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> RegisterAsync([FromBody] RegisterViewModel model)
        {
            try
            {
                var user = new AppUser
                {
                    Email = model.Email,
                    UserName = model.FirstName
                };
                var role = new AppRole
                {
                    Name = Roles.User
                };
                var result = await _userManager.CreateAsync(user, model.Password);

                if (!result.Succeeded)
                    return BadRequest(new { message = result.Errors });

                await _userManager.AddToRoleAsync(user, role.Name);

                await _signInManager.SignInAsync(user, isPersistent: false);

                return Ok(new
                {
                    token = _tokenService.Authentificate(user)
                });
            }
            catch 
            {
                return BadRequest(new { message = "Something wrong - error Database!" });
            }
        }

        [HttpPost]
        [Route("login")]

        public async Task<IActionResult> Login([FromForm] LoginViewModel model)
        {
            var result = await _signInManager
                .PasswordSignInAsync(model.Email, model.Password, false, false);

            if (!result.Succeeded)
            {
                return BadRequest(new { message = "Error! Incorrect data!" });
            }
            var user = await _userManager.FindByEmailAsync(model.Email);

            return Ok(new
            {
                token = _tokenService.Authentificate(user)
            });
        }

    }
}
