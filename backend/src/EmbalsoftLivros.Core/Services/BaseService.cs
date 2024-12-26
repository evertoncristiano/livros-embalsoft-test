using EmbalsoftLivros.Core.Contracts;
using EmbalsoftLivros.Core.Entities;
using EmbalsoftLivros.Core.Notifications;
using FluentValidation;
using FluentValidation.Results;

namespace EmbalsoftLivros.Core.Services
{
    public abstract class BaseService
    {
        private readonly INotificador _notificador;

        public BaseService(INotificador notificador)
        {
            _notificador = notificador;
        }

        protected void Notificar(ValidationResult validationResult)
        {
            foreach (var item in validationResult.Errors)
            {
                Notificar(item.ErrorMessage);
            }
        }

        protected void Notificar(string mensagem)
        {
            _notificador.Handle(new Notificacao(mensagem));
        }

        protected bool ExecutarValidacao<TValidator, TEntity>(TValidator validacao, TEntity entidade)
            where TValidator : AbstractValidator<TEntity>
            where TEntity : Entity
        {
            var validator = validacao.Validate(entidade);

            if (validator.IsValid) return true;

            Notificar(validator);

            return false;
        }
    }
}
