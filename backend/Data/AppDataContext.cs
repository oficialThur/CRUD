using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class AppDataContext : DbContext
    {
        public AppDataContext(DbContextOptions<AppDataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).ValueGeneratedOnAdd();
                entity.Property(e => e.Nome).HasColumnType("varchar(255)").IsRequired();
                entity.Property(e => e.Email).HasColumnType("varchar(255)").IsRequired();
                entity.Property(e => e.Employment).HasColumnType("varchar(255)");
                entity.Property(e => e.Level).HasColumnType("varchar(255)");
                entity.Property(e => e.PrimaryLanguage).HasColumnType("varchar(255)");
                
                // Índice único para email
                entity.HasIndex(e => e.Email).IsUnique();
            });
        }
    }
}