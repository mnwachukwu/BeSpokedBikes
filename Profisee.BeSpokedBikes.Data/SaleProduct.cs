using System.Text.Json.Serialization;

namespace Profisee.BeSpokedBikes.Data
{
    /// <summary>
    /// Represents the relationship between a <see cref="Data.Sale"/> and a <see cref="Data.Product"/>.
    /// </summary>
    public class SaleProduct : DbEntity
    {
        [JsonIgnore] // to prevent a circular reference runtime error
                     // since SalesProduct represents a relationship from Sales to Product, this nav property is not needed
        public Sale? Sale { get; set; }

        public Product? Product { get; set; }

        public int Quantity { get; set; }
    }
}
