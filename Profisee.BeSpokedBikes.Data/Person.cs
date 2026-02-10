namespace Profisee.BeSpokedBikes.Data
{
    public class Person : DbEntity
    {
        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public Address? Address { get; set; }

        public string? PhoneNumber { get; set; }

        public DateTime? StartDate { get; set; }
    }
}
