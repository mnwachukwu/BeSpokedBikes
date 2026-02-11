using Profisee.BeSpokedBikes.Data.Entities;

namespace Profisee.BeSpokedBikes.Data.Dtos
{
    public class AuthenticationResponse
    {
        public bool Success { get; set; }

        public Salesperson? Salesperson { get; set; }
    }
}
