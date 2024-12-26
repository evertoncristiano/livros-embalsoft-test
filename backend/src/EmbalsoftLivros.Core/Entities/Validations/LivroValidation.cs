using FluentValidation;

namespace EmbalsoftLivros.Core.Entities.Validations
{
    public class LivroValidation : AbstractValidator<Livro>
    {
        public LivroValidation()
        {
            RuleFor(c => c.Titulo)
                .NotEmpty().WithMessage("O campo {PropertyName} precisa ser fornecido")
                .Length(2, 100).WithMessage("O campo {PropertyName} precisa ter entre {MinLength} e {MaxLength} caracteres");

            RuleFor(c => c.Autor)
                .NotEmpty().WithMessage("O campo {PropertyName} precisa ser fornecido")
                .Length(2, 100).WithMessage("O campo {PropertyName} precisa ter entre {MinLength} e {MaxLength} caracteres");

            RuleFor(c => c.Genero)
                .NotEmpty().WithMessage("O campo {PropertyName} precisa ser fornecido")
                .Length(2, 50).WithMessage("O campo {PropertyName} precisa ter entre {MinLength} e {MaxLength} caracteres");

            RuleFor(c => c.Ano)
                .NotEmpty().WithMessage("O campo {PropertyName} precisa ser fornecido")
                .GreaterThanOrEqualTo(1000).WithMessage("O campo {PropertyName} precisa ser maior ou igual a {ComparisonValue}")
                .LessThanOrEqualTo(2100).WithMessage("O campo {PropertyName} precisa ser menor ou igual a {ComparisonValue}");
        }
    }
}
