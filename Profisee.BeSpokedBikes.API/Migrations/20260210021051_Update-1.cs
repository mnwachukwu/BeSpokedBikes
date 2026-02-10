using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Profisee.BeSpokedBikes.API.Migrations
{
    /// <inheritdoc />
    public partial class Update1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SaleProduct_Products_ProductId",
                table: "SaleProduct");

            migrationBuilder.DropForeignKey(
                name: "FK_SaleProduct_Sales_SaleId",
                table: "SaleProduct");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SaleProduct",
                table: "SaleProduct");

            migrationBuilder.RenameTable(
                name: "SaleProduct",
                newName: "SaleProducts");

            migrationBuilder.RenameIndex(
                name: "IX_SaleProduct_SaleId",
                table: "SaleProducts",
                newName: "IX_SaleProducts_SaleId");

            migrationBuilder.RenameIndex(
                name: "IX_SaleProduct_ProductId",
                table: "SaleProducts",
                newName: "IX_SaleProducts_ProductId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_SaleProducts",
                table: "SaleProducts",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_SaleProducts_Products_ProductId",
                table: "SaleProducts",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_SaleProducts_Sales_SaleId",
                table: "SaleProducts",
                column: "SaleId",
                principalTable: "Sales",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SaleProducts_Products_ProductId",
                table: "SaleProducts");

            migrationBuilder.DropForeignKey(
                name: "FK_SaleProducts_Sales_SaleId",
                table: "SaleProducts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SaleProducts",
                table: "SaleProducts");

            migrationBuilder.RenameTable(
                name: "SaleProducts",
                newName: "SaleProduct");

            migrationBuilder.RenameIndex(
                name: "IX_SaleProducts_SaleId",
                table: "SaleProduct",
                newName: "IX_SaleProduct_SaleId");

            migrationBuilder.RenameIndex(
                name: "IX_SaleProducts_ProductId",
                table: "SaleProduct",
                newName: "IX_SaleProduct_ProductId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_SaleProduct",
                table: "SaleProduct",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_SaleProduct_Products_ProductId",
                table: "SaleProduct",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_SaleProduct_Sales_SaleId",
                table: "SaleProduct",
                column: "SaleId",
                principalTable: "Sales",
                principalColumn: "Id");
        }
    }
}
