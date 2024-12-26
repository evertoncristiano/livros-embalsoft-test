using AutoMapper;
using EmbalsoftLivros.Api.DTOs;
using EmbalsoftLivros.Core.Entities;

namespace EmbalsoftLivros.Api.Configurations

{
    public class AutomapperConfig : Profile
    {
        public AutomapperConfig()
        {
            CreateMap<Livro, LivroDTO>().ReverseMap();
        }
    }
}