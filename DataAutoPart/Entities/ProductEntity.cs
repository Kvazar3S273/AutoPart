using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAutoPart.Entities.Identity
{
    [Table("tblProducts")]
    public class ProductEntity : BaseEntity<int>
    {
        [Required, StringLength(555)]
        public string Name { get; set; }
        
        [Required, StringLength(255)]
        public string Image { get; set; }
        public string Priority { get; set; }
        public decimal Price { get; set; }
    }
}
