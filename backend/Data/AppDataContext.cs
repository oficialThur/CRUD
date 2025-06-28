using Microsoft.EntityFrameworkCore;

public class AppDataContext : DbContext
{
    public AppDataContext(DbContextOptions<AppDataContext> options) : base(options) { }

    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<User>(entity =>
        {
            entity.Property(e => e.Nome).HasColumnType("varchar(255)");
            entity.Property(e => e.Email).HasColumnType("varchar(255)");
            entity.Property(e => e.Employment).HasColumnType("varchar(255)");
            entity.Property(e => e.Level).HasColumnType("varchar(255)");
            entity.Property(e => e.PrimaryLanguage).HasColumnType("varchar(255)");
        });
    }
}