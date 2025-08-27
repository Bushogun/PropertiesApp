using Application.Features.Property.PropertyTrace.Dtos;
using Domain.Entities;

namespace Application.Features.Property.PropertyTrace.Mappers
{
    public static class GetPropertyTraceMapper
    {
        public static PropertyTraceResponseDto ToDto(PropertyTraceEntity propertyTrace)
        {
            if (propertyTrace == null) return null;

            return new PropertyTraceResponseDto
            {
                IdPropertyTrace = propertyTrace.IdPropertyTrace,
                DateSale = propertyTrace.DateSale,
                Name = propertyTrace.Name,
                Value = propertyTrace.Value.ToString(),
                Tax = propertyTrace.Tax.ToString(),
                IdProperty = propertyTrace.IdProperty
            };
        }

        public static List<PropertyTraceResponseDto> ToDtoList(IEnumerable<PropertyTraceEntity> propertyTrace)
        {
            if (propertyTrace == null || !propertyTrace.Any()) return new List<PropertyTraceResponseDto>();
            return propertyTrace.Select(ToDto).ToList();
        }
    }
}