using Microsoft.EntityFrameworkCore.Migrations;

namespace dotnet5_webapp.Migrations
{
    public partial class AddMissingActivityLikeManually : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ActivityLike",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ActivityId = table.Column<int>(type: "int", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ActivityLike", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ActivityLike_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ActivityLike_Activity_ActivityId",
                        column: x => x.ActivityId,
                        principalTable: "Activity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });
                
            migrationBuilder.CreateIndex(
                name: "IX_ActivityLike_ActivityId",
                table: "ActivityLike",
                column: "ActivityId");

            migrationBuilder.CreateIndex(
                name: "IX_ActivityLike_UserId",
                table: "ActivityLike",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ActivityLike");
        }
    }
}
