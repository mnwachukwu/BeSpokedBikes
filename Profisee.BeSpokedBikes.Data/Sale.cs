namespace Profisee.BeSpokedBikes.Data
{
    /// <summary>
    /// Represents the sale of a <see cref="Product"/> or Products to a <see cref="Data.Customer"/> by a <see cref="Data.Salesperson"/>.
    /// </summary>
    public class Sale : DbEntity
    {
        /// <summary>
        /// A navigational property that pulls in all associated <see cref="SaleProduct"/> with a <see cref="Sale"/>, with each SaleProduct linking to a <see cref="Product"/>.
        /// </summary>
        public List<SaleProduct> SaleProducts { get; set; } = [];

        public Salesperson? Salesperson { get; set; }

        public Customer? Customer { get; set; }

        public DateTime? SaleDate { get; set; }

        public double TotalSalePrice => SaleProducts.Sum(sp => (sp.Product?.SalePrice ?? 0) * sp.Quantity);

        public int ItemsSold => SaleProducts.Sum(sp => sp.Quantity);
    }
}
