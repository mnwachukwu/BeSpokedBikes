using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Profisee.BeSpokedBikes.Data;
using Microsoft.EntityFrameworkCore;

namespace Profisee.BeSpokedBikes.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            builder.Services.AddControllers();

            var app = builder.Build();

            // Configure the HTTP request pipeline.

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
