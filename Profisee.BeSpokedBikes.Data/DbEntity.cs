namespace Profisee.BeSpokedBikes.Data
{
    /// <summary>
    /// Base object for all database entities.
    /// </summary>
    public abstract class DbEntity
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public DateTime? CreatedDate { get; set; }

        /// <summary>
        /// Stores a reference to the <see cref="Person"/> who created the record.
        /// </summary>
        public string? CreateUserId { get; set; }

        public DateTime? LastModifiedDate { get; set; }

        /// <summary>
        /// Stores a reference to the <see cref="Person"/> who last modified the record.
        /// </summary>
        public string? LastModifiedUserId { get; set; }
    }
}
