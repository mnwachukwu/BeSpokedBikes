namespace Profisee.BeSpokedBikes.Data
{
    public class Product : DbEntity
    {
        public string? Name { get; set; }

        public Manufacturer? Manufacturer { get; set; }

        public BikeStyle Style { get; set; }

        public double PurchasePrice { get; set; }

        public double SalePrice { get; set; }

        /// <summary>
        /// The quantity on hand, ready to sell.
        /// </summary>
        public int QuantityOnHand { get; set; }

        /// <summary>
        /// The quantity on backorder, waiting for receiving.
        /// </summary>
        public int QuantityOnOrder { get; set; }

        public double CommissionPercentage { get; set; }

        public string? Image { get; set; }
    }
}
