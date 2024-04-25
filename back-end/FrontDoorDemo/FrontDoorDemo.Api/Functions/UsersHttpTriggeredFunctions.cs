using System.Net;
using System.Net.Mime;
using FrontDoorDemo.Api.Factories;
using FrontDoorDemo.Api.Models;
using FrontDoorDemo.Api.Options;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace FrontDoorDemo.Api.Functions;

public class UsersHttpTriggeredFunctions
{
    private readonly ILogger _logger;
    private readonly ServerSettings _settings;

    public UsersHttpTriggeredFunctions(ILoggerFactory loggerFactory, IOptions<ServerSettings> options)
    {
        _logger = loggerFactory.CreateLogger<UsersHttpTriggeredFunctions>();
        _settings = options.Value;
    }

    [OpenApiOperation(nameof(GetAllUsers), Summary = "Gets a collection of users")]
    [OpenApiResponseWithBody(HttpStatusCode.OK, MediaTypeNames.Application.Json, typeof(IReadOnlyCollection<UserModel>))]
    [Function(nameof(GetAllUsers))]
    public async Task<HttpResponseData> GetAllUsers([HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "users")] HttpRequestData req,
        FunctionContext executionContext)
    {
        _logger.LogInformation("Received a request to return a list of users");

        var response = new ApiResponse<UserModel>(UserFactory.Users)
        {
            ServerName = _settings.ServerName
        };
        var httpResponse = req.CreateResponse(HttpStatusCode.OK);
        await httpResponse.WriteAsJsonAsync(response);

        return httpResponse;
        
    }
}