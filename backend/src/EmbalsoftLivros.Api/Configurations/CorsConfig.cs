namespace EmbalsoftLivros.Api.Configurations
{
    public static class CorsConfig
    {
        public static WebApplicationBuilder AddCorsConfig(this WebApplicationBuilder builder)
        {
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("Production",
                    builder => builder
                        .WithOrigins("https:meusitedeproducao.com")
                        .AllowAnyMethod()
                        .AllowAnyHeader());

                options.AddPolicy("Development",
                    builder => builder
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
            });

            return builder;
        }
    }
}
