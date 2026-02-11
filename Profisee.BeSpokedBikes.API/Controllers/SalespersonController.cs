using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Profisee.BeSpokedBikes.Data;
using Profisee.BeSpokedBikes.Data.Entities;
using Profisee.BeSpokedBikes.Data.Dtos;

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

        [HttpPost("Update")]
        public async Task<UpdateEntityResponse<Salesperson>> Update([FromBody] Salesperson salesperson)
        {
            var response = new UpdateEntityResponse<Salesperson>
            {
                Success = true
            };

            if (salesperson != null)
            {
                try
                {
                    if (_dbContext.Salespeople.Any(i => i.Id == salesperson.Id))
                    {
                        _dbContext.Salespeople.Update(salesperson);
                    }
                    else
                    {
                        if (salesperson.Manager != null)
                        {
                            // do not need to track/add the manager
                            _dbContext.Entry(salesperson.Manager).State = EntityState.Unchanged;
                        }

                        _dbContext.Salespeople.Add(salesperson);
                    }

                    // handle the address, too
                    if (salesperson.Address != null)
                    {
                        if (_dbContext.Addresses.Any(i => i.Id == salesperson.Address.Id))
                        {
                            _dbContext.Addresses.Update(salesperson.Address);
                        }
                        else
                        {
                            _dbContext.Addresses.Add(salesperson.Address);
                        }
                    }

                    await _dbContext.SaveChangesAsync();
                }
                catch 
                {
                    response.Success = false;
                }

                response.Entity = response.Success ? _dbContext.Salespeople.Include(sp => sp.Address).FirstOrDefault(i => i.Id == salesperson.Id) : null;
            }

            return response;
        }
    }
}
