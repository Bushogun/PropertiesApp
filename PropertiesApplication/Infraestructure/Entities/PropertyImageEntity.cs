using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Domain.Entities
{
    public class PropertyImageEntity
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string IdPropertyImage { get; set; }

        [BsonRepresentation(BsonType.ObjectId)]
        public string IdProperty { get; set; } 

        public string File { get; set; } 
        public bool Enabled { get; set; }
    }
}
