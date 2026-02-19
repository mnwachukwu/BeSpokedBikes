using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Profisee.BeSpokedBikes.Data;
using Profisee.BeSpokedBikes.Data.Entities;

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
        public async Task<Sale?> Get(string id)
        {
            return await _dbContext.Sales
                .Include(s => s.Customer)
                .Include(s => s.Salesperson)
                .Include(s => s.SaleProducts)
                    .ThenInclude(sp => sp.Product)
                .FirstOrDefaultAsync(i => i.Id == id);
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
