using System.Collections.ObjectModel;
using Bogus;
using FrontDoorDemo.Api.Models;

namespace FrontDoorDemo.Api.Factories;

public static class UserFactory
{
    public static ReadOnlyCollection<UserModel> Users
    {
        get
        {
            const string britishLocale = "en_GB";
            var britishAddresses = new Bogus.DataSets.Address(britishLocale);
            var britishTelephoneNumbers = new Bogus.DataSets.PhoneNumbers(britishLocale);

            var fakedUsers = Enumerable.Range(1, 100).Select(ind =>
            {
                var user = new Faker<UserModel>()
                    .RuleFor(u => u.Id, () => ind)
                    .RuleFor(u => u.FirstName, f => f.Name.FirstName())
                    .RuleFor(u => u.LastName, f => f.Name.LastName())
                    .RuleFor(u => u.EmailAddress, f => f.Internet.Email())
                    .RuleFor(u => u.Address,
                        () => new[] { britishAddresses.StreetAddress(), britishAddresses.SecondaryAddress() })
                    .RuleFor(u => u.Town, () => britishAddresses.City())
                    .RuleFor(u => u.PostCode, () => britishAddresses.ZipCode())
                    .RuleFor(u => u.TelephoneNumber, () => britishTelephoneNumbers.PhoneNumber());

                return user.Generate();
            });

            return fakedUsers.ToList().AsReadOnly();
        }
    }
}