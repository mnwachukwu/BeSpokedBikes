namespace Profisee.BeSpokedBikes.Data
{
    public class Product : DbEntity
    {
        public string? Name { get; set; }

        public Manufacturer? Manufacturer { get; set; }

        public BikeStyle Style { get; set; }

        public double PurchasePrice { get; set; }

        public double SalePrice { get; set; }

        public int QuantityOnHand { get; set; }

        public int QuantityOnOrder { get; set; }

        public double CommissionPercentage { get; set; }
    }
}
