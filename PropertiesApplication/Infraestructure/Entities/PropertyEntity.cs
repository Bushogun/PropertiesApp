using Domain.Entities;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Diagnostics;
using System.Net;

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
        public string IdOwner { get; set; }

        public PropertyEntity(string name, string address, decimal price, string codeInternal, int year, string idOwner)
        {
            IdProperty = ObjectId.GenerateNewId().ToString();
            Name = name;
            Address = address;
            Price = price;
            CodeInternal = codeInternal;
            Year = year;
            IdOwner = idOwner;
        }
        public PropertyEntity() { }
    }
}