using Microsoft.EntityFrameworkCore;

namespace Profisee.BeSpokedBikes.Data
{
    public class AppDbContext : DbContext
    {
        // Required entities
        public DbSet<Product> Products { get; set; }

        public DbSet<Salesperson> Salespeople { get; set; }

        public DbSet<Customer> Customers { get; set; }

        public DbSet<Sale> Sales { get; set; }

        public DbSet<Discount> Discounts { get; set; }

        // Supporting entities
        public DbSet<Address> Addresses { get; set; }

        public DbSet<Manufacturer> Manufacturers { get; set; }

        public DbSet<SaleProduct> SaleProducts { get; set; }

        public AppDbContext() { }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Necessary to keep EF from creating a "Super Table" from the super type, DbEntity
            modelBuilder.Ignore<DbEntity>();

            base.OnModelCreating(modelBuilder);
        }
    }
}
