namespace Profisee.BeSpokedBikes.Data
{
    public class Sale : DbEntity
    {
        public List<SaleProduct> SaleProducts { get; set; } = [];

        public Salesperson? Salesperson { get; set; }

        public Customer? Customer { get; set; }

        public DateTime? SaleDate { get; set; }
    }
}
