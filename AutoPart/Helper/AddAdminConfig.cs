using AutoPart.Constants;
using DataAutoPart.Entities.Identity;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutoPart.Helper
{
    public static class AddAdminConfig
    {
        public static void AdminConfig(this IApplicationBuilder app)
        {
            using var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope();
            var roleManager = serviceScope.ServiceProvider.GetRequiredService<RoleManager<AppRole>>();
            var userManager = serviceScope.ServiceProvider.GetRequiredService<UserManager<AppUser>>();

            var role = new AppRole
            {
                Name = Roles.Admin
            };
            var result1 = roleManager.CreateAsync(role).Result;

            var user = new AppUser
            {
                Email = "admin@ukr.net",
                UserName = "admin@ukr.net"
            };
            var result = userManager.CreateAsync(user, "admin").Result;
            result = userManager.AddToRoleAsync(user, Roles.Admin).Result;


        }
    }
}
