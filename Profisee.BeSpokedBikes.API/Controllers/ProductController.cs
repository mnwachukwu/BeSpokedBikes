using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Profisee.BeSpokedBikes.Data;
using Profisee.BeSpokedBikes.Data.Entities;

namespace Profisee.BeSpokedBikes.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<ProductController> _logger;
        private readonly AppDbContext _dbContext;

        public ProductController(ILogger<ProductController> logger, AppDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        [HttpGet("{id}")]
        public Product? Get(string id)
        {
            return _dbContext.Products
                .Include(p => p.Manufacturer)
                    .ThenInclude(m => m.Address)
                .FirstOrDefault(i => i.Id == id);
        }

        [HttpGet("List")]
        public IEnumerable<Product> List()
        {
            return [.. _dbContext.Products
                .Include(p => p.Manufacturer)
                    .ThenInclude(m => m.Address)];
        }
    }
}
