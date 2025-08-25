using MongoDB.Driver;

namespace Infrastructure.Persistence.Seed
{
    public class DatabaseInitializer
    {
        private readonly IMongoDatabase _database;

        public DatabaseInitializer(AppDbContext context)
        {
            _database = context.GetDatabase();
        }

        public void EnsureCreated()
        {
            var collections = _database.ListCollectionNames().ToList();

            if (!collections.Contains("Owners"))
                _database.CreateCollection("Owners");

            if (!collections.Contains("Properties"))
                _database.CreateCollection("Properties");

            if (!collections.Contains("PropertyImages"))
                _database.CreateCollection("PropertyImages");

            if (!collections.Contains("PropertyTraces"))
                _database.CreateCollection("PropertyTraces");
        }
    }
}
