using EmbalsoftLivros.Core.Notifications;

namespace EmbalsoftLivros.Core.Contracts
{
    public interface INotificador
    {
        bool TemNotificacao();
        List<Notificacao> ObterNotificacoes();
        void Handle(Notificacao notificacao);
    }
}
