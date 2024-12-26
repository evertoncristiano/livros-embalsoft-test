using Microsoft.EntityFrameworkCore;
using EmbalsoftLivros.Core.Entities;

namespace EmbalsoftLivros.Infra.Data.Context
{
    public class LivrosDbContext : DbContext
    {
        public LivrosDbContext(DbContextOptions<LivrosDbContext> options) : base(options)
        {

        }

        public DbSet<Livro> Livros { get; set; }
    }
}
