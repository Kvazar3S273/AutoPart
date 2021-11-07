using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAutoPart.Entities.Identity
{
    public class AppUser : IdentityUser<long>
    {
        public virtual ICollection<AppUserRole> UserRoles { get; set; }
        
        [StringLength(100)]
        public string Image { get; set; }

        [StringLength(100)]
        public string FirstName { get; set; }
        
        [StringLength(100)]
        public string SecondName { get; set; }
        
        [StringLength(20)]
        public string Phone { get; set; }
        //public string ImageProfile { get; set; }
    }
}
