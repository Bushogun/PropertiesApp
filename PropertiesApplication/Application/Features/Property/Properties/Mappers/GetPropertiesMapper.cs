using Application.Features.Property.Properties.Dtos.PropertiesDto;
using Domain.Entities;

namespace Application.Features.Property.Properties.Mappers
{
    public static class GetPropertiesMapper
    {
        public static PropertiesResponseDto ToDto(PropertyEntity property)
        {
            if (property == null) return null;

            return new PropertiesResponseDto
            {
                IdProperty = property.IdProperty,
                Name = property.Name,
                Address = property.Address,
                Price = property.Price.ToString(),
                CodeInternal = property.CodeInternal,
                Year = property.Year,
                IdOwner = property.IdOwner
            };
        }
        public static List<PropertiesResponseDto> ToDtoList(IEnumerable<PropertyEntity> properties)
        {
            if (properties == null || !properties.Any()) return new List<PropertiesResponseDto>();
            return properties.Select(ToDto).ToList();
        }
    }
}