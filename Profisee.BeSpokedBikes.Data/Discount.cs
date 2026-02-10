namespace Profisee.BeSpokedBikes.Data
{
    public class Discount : DbEntity
    {
        public Product? Product { get; set; }

        public DateTime? BeginDate { get; set; }

        public DateTime? EndDate { get; set; }

        public double DiscountPercentage { get; set; }
    }
}
