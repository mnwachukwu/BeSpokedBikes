namespace Profisee.BeSpokedBikes.Data
{
    public class Salesperson : Person
    {
        public DateTime? TerminationDate { get; set; }

        public Salesperson? Manager { get; set; }
    }
}
