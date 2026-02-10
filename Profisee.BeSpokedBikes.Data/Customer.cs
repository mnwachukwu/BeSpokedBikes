namespace Profisee.BeSpokedBikes.Data
{
    public class Customer : Person
    {
        public int LoyaltyPoints { get; set; } // included to justify the difference between Customer and Salesperson
    }
}
