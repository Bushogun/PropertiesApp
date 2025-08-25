using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Domain.Entities
{
    public class OwnerEntity
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string IdOwner { get; set; }

        public string Name { get; set; }
        public string Address { get; set; }
        public string Photo { get; set; }
        public DateTime Birthday { get; set; }

        public OwnerEntity(string name, string address, string photo, DateTime birthday)
        {
            IdOwner = ObjectId.GenerateNewId().ToString();
            Name = name; 
            Address = address;
            Photo = photo;
            Birthday = birthday;
        }
        public OwnerEntity() { }
    }
}
