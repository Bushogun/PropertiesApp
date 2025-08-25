using MongoDB.Driver;
using Domain.Entities;

namespace Infrastructure.Persistence
{
    public class AppDbContext
    {
        private readonly IMongoDatabase _database;

        public AppDbContext(MongoDbSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            _database = client.GetDatabase(settings.Database);
        }

        public IMongoCollection<OwnerEntity> Owners => _database.GetCollection<OwnerEntity>("Owners");
        public IMongoCollection<PropertyEntity> Properties => _database.GetCollection<PropertyEntity>("Properties");
        public IMongoCollection<PropertyImageEntity> PropertyImages => _database.GetCollection<PropertyImageEntity>("PropertyImages");
        public IMongoCollection<PropertyTraceEntity> PropertyTraces => _database.GetCollection<PropertyTraceEntity>("PropertyTraces");

        public IMongoDatabase GetDatabase() => _database;
    }
}
