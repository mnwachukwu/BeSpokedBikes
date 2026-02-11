using System.Text;

namespace Profisee.BeSpokedBikes.Data
{
    public class Address : DbEntity
    {
        public string? Line1 { get; set; }

        public string? Line2 { get; set; }

        public string? Line3 { get; set; }

        public string? City { get; set; }

        public string? State { get; set; }

        public string? ZipCode { get; set; }

        public string? Country { get; set; }

        public string FormattedAddress => FormatAddress();

        private string FormatAddress()
        {
            var address = new StringBuilder();

            address.Append(Line1);

            if (!string.IsNullOrEmpty(Line2))
            {
                address.Append(", ");
                address.Append(Line2);
            }

            if (!string.IsNullOrEmpty(Line3))
            {
                address.Append(", ");
                address.Append(Line3);
            }

            address.Append($", {City}, {State} {ZipCode}, {Country}");

            return address.ToString();
        }
    }
}
