using System.Text.Json;
using System.Text.Json.Serialization;
using FrontDoorDemo.Api.Options;
using Microsoft.Azure.Functions.Worker.Extensions.OpenApi.Extensions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var host = new HostBuilder()
    .ConfigureFunctionsWorkerDefaults()
    .ConfigureOpenApi()
    .ConfigureServices(services =>
    {
        services.Configure<JsonSerializerOptions>(options =>
        {
            options.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
            options.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
            options.PropertyNameCaseInsensitive = true;
        });
        services.AddOptions<ServerSettings>().Configure<IConfiguration>((settings, configuration) =>
        {
            configuration.GetSection(nameof(ServerSettings)).Bind(settings);
        });
    })
    .Build();

host.Run();