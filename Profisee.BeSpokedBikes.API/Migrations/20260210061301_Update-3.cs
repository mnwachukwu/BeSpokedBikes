using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Profisee.BeSpokedBikes.API.Migrations
{
    /// <inheritdoc />
    public partial class Update3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "SoldPrice",
                table: "SaleProducts",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SoldPrice",
                table: "SaleProducts");
        }
    }
}
