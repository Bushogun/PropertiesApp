using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Domain.Entities
{
    public class PropertyEntity
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string IdProperty { get; set; }

        public required string Name { get; set; }
        public required string Address { get; set; }
        public required decimal Price { get; set; }
        public required string CodeInternal { get; set; }
        public int Year { get; set; }

        [BsonRepresentation(BsonType.ObjectId)]
        public string IdOwner { get; set; }
    }
}
