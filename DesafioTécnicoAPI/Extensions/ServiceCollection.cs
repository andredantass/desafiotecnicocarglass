using DesafioTécnicoApi.Application.Interfaces;
using DesafioTécnicoApi.Application.Services;

namespace DesafioTécnicoAPI.Extensions
{
    public static class ServiceCollection
    {
        public static IServiceCollection AddFeatureServices(this IServiceCollection services)
        {
            services.AddServices();
            services.AddControllers();

            return services;
        }
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddScoped<INumberService,NumberService>();

            return services;
        }
    }
}
