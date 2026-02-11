using System.Text.Json.Serialization;

namespace Profisee.BeSpokedBikes.Data.Entities
{
    /// <summary>
    /// Represents the relationship between a <see cref="Entities.Sale"/> and a <see cref="Entities.Product"/>.
    /// </summary>
    public class SaleProduct : DbEntity
    {
        [JsonIgnore] // This prevents a circular reference runtime error during JSON serialization.
                     // Since SaleProduct models a relationship from Sale to Product, this nav property is
                     // useful for EF tracking but should not be serialized.
        public Sale? Sale { get; set; }

        public Product? Product { get; set; }

        public int Quantity { get; set; }

        public double SoldPrice { get; set; }

        public double CommissionCost => SoldPrice * (Product?.CommissionPercentage ?? 0);
    }
}
