using EmbalsoftLivros.Core.Entities;

namespace EmbalsoftLivros.Core.Contracts
{
    public interface ILivroService : IDisposable
    {
        Task Adicionar(Livro livro);
        Task Atualizar(Livro livro);
        Task Remover(Guid id);
    }
}
