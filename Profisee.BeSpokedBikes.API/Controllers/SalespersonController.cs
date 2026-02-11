using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Profisee.BeSpokedBikes.Data;

namespace Profisee.BeSpokedBikes.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SalespersonController : ControllerBase
    {
        private readonly ILogger<SalespersonController> _logger;
        private readonly AppDbContext _dbContext;

        public SalespersonController(ILogger<SalespersonController> logger, AppDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        [HttpGet("{id}")]
        public Salesperson? Get(string id)
        {
            return _dbContext.Salespeople
                .Include(s => s.Address)
                .Include(s => s.Manager)
                    .ThenInclude(s => s.Address)
                .FirstOrDefault(i => i.Id == id);
        }

        [HttpGet("List")]
        public IEnumerable<Salesperson> List()
        {
            return [.. _dbContext.Salespeople
                .Include(s => s.Address)];
        }
    }
}
