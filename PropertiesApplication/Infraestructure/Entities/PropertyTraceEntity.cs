using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Domain.Entities
{
    public class PropertyTraceEntity
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string IdPropertyTrace { get; set; }

        [BsonRepresentation(BsonType.ObjectId)]
        public string IdProperty { get; set; }

        public DateTime DateSale { get; set; }
        public string Name { get; set; }
        public decimal Value { get; set; }
        public decimal Tax { get; set; }
    
        public PropertyTraceEntity(string idProperty, DateTime dateSale, string name, decimal value, decimal tax)
        {
            IdPropertyTrace = ObjectId.GenerateNewId().ToString();
            DateSale = dateSale;
            Name = name;
            Value = value;
            Tax = tax;
            IdProperty = idProperty;
        }
        public PropertyTraceEntity() { }
    }
}