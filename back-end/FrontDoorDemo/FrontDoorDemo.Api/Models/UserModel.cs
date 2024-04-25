namespace FrontDoorDemo.Api.Models;

public class UserModel
{
    public int Id { get; set; }
    
    public string FirstName { get; set; } = string.Empty;

    public string LastName { get; set; } = string.Empty;

    public string EmailAddress { get; set; } = string.Empty;

    public string[] Address { get; set; } = { string.Empty, string.Empty };

    public string Town { get; set; } = string.Empty;

    public string PostCode { get; set; } = string.Empty;

    public string TelephoneNumber { get; set; } = string.Empty;
}