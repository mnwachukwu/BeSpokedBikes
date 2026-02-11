namespace Profisee.BeSpokedBikes.Data.Entities
{
    /// <summary>
    /// Represents the sale of <see cref="Product"/> to a <see cref="Entities.Customer"/> by a <see cref="Entities.Salesperson"/>.
    /// </summary>
    public class Sale : DbEntity
    {
        /// <summary>
        /// A navigational property for associating a <see cref="Sale"/> with a collection of <see cref="SaleProduct"/>, with each SaleProduct linking to a <see cref="Product"/>.
        /// </summary>
        public List<SaleProduct> SaleProducts { get; set; } = [];

        public Salesperson? Salesperson { get; set; }

        public Customer? Customer { get; set; }

        public DateTime? SaleDate { get; set; }

        public double TotalSalePrice => SaleProducts.Sum(sp => sp.SoldPrice * sp.Quantity);

        public double TotalCommission => SaleProducts.Sum(sp => sp.SoldPrice * (sp.Product?.CommissionPercentage ?? 0) * sp.Quantity);

        public int ItemsSold => SaleProducts.Sum(sp => sp.Quantity);
    }
}
