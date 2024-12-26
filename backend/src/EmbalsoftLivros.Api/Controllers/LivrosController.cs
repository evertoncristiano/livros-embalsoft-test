using AutoMapper;
using EmbalsoftLivros.Api.DTOs;
using EmbalsoftLivros.Core.Contracts;
using EmbalsoftLivros.Core.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace EmbalsoftLivros.Api.Controllers
{
    [Route("/api/v1/livros")]
    public class LivrosController : MainController
    {
        private readonly IMapper _mapper;
        private readonly ILivroService _livroService;

        public LivrosController(INotificador _notificador, 
                                IMapper mapper, 
                                ILivroService livroService) : base(_notificador)
        {
            _mapper = mapper;
            _livroService = livroService;
        }

        [HttpPost]
        public async Task<ActionResult<LivroDTO>> Adicionar(LivroDTO livroDTO)
        {
            if (!ModelState.IsValid) 
                return CustomResponse(ModelState);

            await _livroService.Adicionar(_mapper.Map<Livro>(livroDTO));

            return CustomResponse(HttpStatusCode.Created, livroDTO);
        }
    }
}
