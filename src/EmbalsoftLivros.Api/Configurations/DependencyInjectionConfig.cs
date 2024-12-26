using EmbalsoftLivros.Core.Contracts;
using EmbalsoftLivros.Core.Notifications;
using EmbalsoftLivros.Core.Services;
using EmbalsoftLivros.Infra.Data.Context;
using EmbalsoftLivros.Infra.Data.Repositories;

namespace EmbalsoftLivros.Api.Configurations
{
    public static class DependencyInjectionConfig
    {
        public static IServiceCollection ResolveDependencies(this IServiceCollection services)
        {
            //Infra
            services.AddScoped<LivrosDbContext>();
            services.AddScoped<ILivroRepository, LivroRepository>();

            //Core
            services.AddScoped<INotificador, Notificador>();
            services.AddScoped<ILivroService, LivroService>();

            return services;
        }
    }
}
