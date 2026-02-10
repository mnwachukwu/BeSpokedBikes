using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Profisee.BeSpokedBikes.Data;

namespace Profisee.BeSpokedBikes.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SaleController : ControllerBase
    {
        private readonly ILogger<SaleController> _logger;
        private readonly AppDbContext _dbContext;

        public SaleController(ILogger<SaleController> logger, AppDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        [HttpGet("{id}")]
        public Sale? Get(string id)
        {
            return _dbContext.Sales
                .Include(s => s.Customer)
                .Include(s => s.Salesperson)
                .Include(s => s.SaleProducts)
                    .ThenInclude(sp => sp.Product)
                .FirstOrDefault(i => i.Id == id);
        }

        [HttpGet("List")]
        public IEnumerable<Sale> List()
        {
            return [.. _dbContext.Sales
                .Include(s => s.Customer)
                .Include(s => s.Salesperson)
                .Include(s => s.SaleProducts)
                    .ThenInclude(sp => sp.Product)];
        }
    }
}
