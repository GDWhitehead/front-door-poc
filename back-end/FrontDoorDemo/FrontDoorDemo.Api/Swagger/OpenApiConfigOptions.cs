using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Abstractions;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Configurations;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Enums;
using Microsoft.OpenApi.Models;

namespace FrontDoorDemo.Api.Swagger;

public class OpenApiConfigOptions : IOpenApiConfigurationOptions
{
    /// <summary>
    /// Gets or sets the value of the info
    /// </summary>
    public OpenApiInfo Info { get; set; } = new OpenApiInfo
    {
        Version = "1.0.0",
        Title = "Front Door Demo API",
        Description = "This is a simple API which returns a collection of fake users"
    };

    /// <summary>
    /// Gets or sets the value of the servers
    /// </summary>
    public List<OpenApiServer> Servers { get; set; } = DefaultOpenApiConfigurationOptions.GetHostNames();

    /// <summary>
    /// Gets or sets the value of the open api version
    /// </summary>
    public OpenApiVersionType OpenApiVersion { get; set; } = DefaultOpenApiConfigurationOptions.GetOpenApiVersion();
    
    /// <summary>
    /// Gets or sets the value of the include requesting host name
    /// </summary>
    public bool IncludeRequestingHostName { get; set; } = DefaultOpenApiConfigurationOptions.IsFunctionsRuntimeEnvironmentDevelopment();

    /// <summary>
    /// Gets or sets the value of the force http
    /// </summary>
    public bool ForceHttp { get; set; } = DefaultOpenApiConfigurationOptions.IsHttpForced();

    /// <summary>
    /// Gets or sets the value of the force https
    /// </summary>
    public bool ForceHttps { get; set; } = DefaultOpenApiConfigurationOptions.IsHttpsForced();

    /// <summary>
    /// Gets or sets document filters
    /// </summary>
    public List<IDocumentFilter> DocumentFilters { get; set; } = new();
}