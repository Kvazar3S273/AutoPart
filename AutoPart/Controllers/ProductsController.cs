using AutoMapper;
using AutoPart.Models;
using DataAutoPart;
using DataAutoPart.Entities.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace AutoPart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly AppEFContext _context;
        private readonly IMapper _mapper;
        public ProductsController(AppEFContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetProductsList()
        {
            var prodlist = await _context.Products.Select(res => _mapper.Map<ProductItemViewModel>(res)).ToListAsync();
            return Ok(prodlist);
        }

        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> Add([FromForm] ProductAddViewModel model)
        {
            try
            {
                string photo = String.Empty;
                //var product = _mapper.Map<ProductEntity>(model);

                if (model.Image != null)
                {
                    photo = Path.GetRandomFileName() +
                        Path.GetExtension(model.Image.FileName);

                    string dirPath = Path.Combine(Directory.GetCurrentDirectory(), "images");
                    var fileName = Path.Combine(dirPath, photo);
                    using (var file = System.IO.File.Create(fileName))
                    {
                        model.Image.CopyTo(file);
                    }

                }
                var product = new ProductEntity
                {
                    Name = model.Name,
                    Image = photo,
                    Price = model.Price
                };

                _context.Products.Add(product);
                await _context.SaveChangesAsync();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    invalid = ex.Message
                });
            }
        }

        //[HttpGet]
        //[Route("list")]
        //public async Task<IActionResult> List()
        //{
        //    try
        //    {
        //        Thread.Sleep(2000);
        //        var model = await _context.Products
        //            .Select(x => _mapper.Map<ProductItemViewModel>(x)).ToListAsync();
        //        return Ok(model);
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(new
        //        {
        //            invalid = ex.Message
        //        });
        //    }
        //}
    }
}
