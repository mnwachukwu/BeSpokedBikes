using Microsoft.AspNetCore.Mvc;
using Profisee.BeSpokedBikes.Data;
using Profisee.BeSpokedBikes.Data.Dtos;

namespace Profisee.BeSpokedBikes.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ILogger<AuthController> _logger;
        private readonly AppDbContext _dbContext;

        public AuthController(ILogger<AuthController> logger, AppDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        [HttpPost("Login/{username}")]
        public AuthenticationResponse Login(string username)
        {
            var salesperson = _dbContext.Salespeople.ToList()
                .FirstOrDefault(i => $"{i.FirstName[0]}{i.LastName}".Equals(username, StringComparison.InvariantCultureIgnoreCase));

            return new AuthenticationResponse()
            {
                Success = salesperson != null,
                Salesperson = salesperson
            };
        }
    }
}
