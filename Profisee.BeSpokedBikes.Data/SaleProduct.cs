using System.Text.Json.Serialization;

namespace Profisee.BeSpokedBikes.Data
{
    /// <summary>
    /// Represents the relationship between a <see cref="Data.Sale"/> and a <see cref="Data.Product"/>.
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
    }
}
