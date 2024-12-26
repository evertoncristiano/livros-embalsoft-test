namespace EmbalsoftLivros.Core.Entities
{
    public class Livro : Entity
    {
        public string Titulo { get; set; }
        public string Autor { get; set; }
        public string Genero { get; set; }
        public int Ano { get; set; }
    }
}
