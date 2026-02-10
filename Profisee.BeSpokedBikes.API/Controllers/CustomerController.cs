using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Profisee.BeSpokedBikes.Data;

namespace Profisee.BeSpokedBikes.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly ILogger<CustomerController> _logger;
        private readonly AppDbContext _dbContext;

        public CustomerController(ILogger<CustomerController> logger, AppDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        [HttpGet("{id}")]
        public Customer? Get(string id)
        {
            return _dbContext.Customers.Include(c => c.Address).FirstOrDefault(i => i.Id == id);
        }

        [HttpGet("List")]
        public IEnumerable<Customer> List()
        {
            return [.. _dbContext.Customers.Include(c => c.Address)];
        }
    }
}
