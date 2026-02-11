namespace Profisee.BeSpokedBikes.Data.Entities
{
    public class Salesperson : Person
    {
        public DateTime? TerminationDate { get; set; }

        public Salesperson? Manager { get; set; }
    }
}
