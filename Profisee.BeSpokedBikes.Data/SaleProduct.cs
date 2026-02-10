using System.Text.Json.Serialization;

namespace Profisee.BeSpokedBikes.Data
{
    public class SaleProduct : DbEntity
    {
        [JsonIgnore]
        public Sale? Sale { get; set; }

        public Product? Product { get; set; }

        public int Quantity { get; set; }
    }
}
