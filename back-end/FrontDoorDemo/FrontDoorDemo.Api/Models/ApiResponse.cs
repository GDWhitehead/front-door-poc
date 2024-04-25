using System.Collections.ObjectModel;

namespace FrontDoorDemo.Api.Models;

public class ApiResponse<T> where T : class, new()
{
    public ApiResponse(ReadOnlyCollection<T> data)
    {
        this.Data = data;
    }
    
    public ReadOnlyCollection<T> Data { get; set; }

    public string ServerName { get; set; }

    public DateTime GeneratedAtUtc { get; } = DateTime.UtcNow;
}