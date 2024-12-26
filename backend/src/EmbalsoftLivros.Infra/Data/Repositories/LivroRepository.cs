using EmbalsoftLivros.Core.Contracts;
using EmbalsoftLivros.Core.Entities;
using EmbalsoftLivros.Infra.Data.Context;

namespace EmbalsoftLivros.Infra.Data.Repositories
{
    public class LivroRepository : Repository<Livro>, ILivroRepository
    {
        public LivroRepository(LivrosDbContext context) : base(context) { }
    }
}
