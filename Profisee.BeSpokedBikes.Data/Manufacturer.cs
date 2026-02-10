namespace Profisee.BeSpokedBikes.Data
{
    public class Manufacturer : DbEntity
    {
        public string? Name { get; set; }

        public Address? Address { get; set; }

        public string? Phone { get; set; }
    }
}
