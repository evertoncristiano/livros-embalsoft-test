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
        private readonly ILivroRepository _livroRepository;

        public LivrosController(INotificador _notificador, 
                                IMapper mapper, 
                                ILivroService livroService,
                                ILivroRepository livroRepository) : base(_notificador)
        {
            _mapper = mapper;
            _livroService = livroService;
            _livroRepository = livroRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<LivroDTO>> ObterTodos()
        {
            return _mapper.Map<IEnumerable<LivroDTO>>(await _livroRepository.ObterTodos());
        }

        [HttpGet("{id:guid}")]
        public async Task<ActionResult<LivroDTO>> ObterPorId(Guid id)
        {
            var livroDto = _mapper.Map<LivroDTO>(await _livroRepository.ObterPorId(id));

            if (livroDto == null) 
                return NotFound();

            return livroDto;
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
