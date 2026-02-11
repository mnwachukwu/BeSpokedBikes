namespace Profisee.BeSpokedBikes.Data.Entities
{
    /// <summary>
    /// Represents a discount, containing the discount percentage and the <see cref="Product"/> to be discounted.
    /// </summary>
    public class Discount : DbEntity
    {
        public Product? Product { get; set; }

        public DateTime? BeginDate { get; set; }

        public DateTime? EndDate { get; set; }

        public double DiscountPercentage { get; set; }

        public double DiscountAmount => (Product?.SalePrice ?? 0) * DiscountPercentage;

        public double DiscountSalePrice => (Product?.SalePrice ?? 0) - DiscountAmount;
    }
}
