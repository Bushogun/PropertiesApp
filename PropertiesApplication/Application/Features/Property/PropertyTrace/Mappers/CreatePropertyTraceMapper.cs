using Application.Features.Property.PropertyTrace.Commands;
using Application.Features.Property.PropertyTrace.Dtos;
using Domain.Entities;

namespace Application.Features.Property.PropertyTrace.Mappers
{
    public static class CreatePropertyTraceMapper
    {
        public static PropertyTraceEntity ToEntity(CreatePropertyTraceCommand command)
        {
            return new PropertyTraceEntity
            {
                DateSale = command.DateSale,
                Name = command.Name,
                Value = command.Value,
                Tax = command.Tax,
                IdProperty = command.IdProperty
            };
        }
        public static CreatePropertyTraceResponseDto ToDto(PropertyTraceEntity propertyTrace)
        {
            return new CreatePropertyTraceResponseDto
            {
                IdPropertyTrace = propertyTrace.IdPropertyTrace
            };
        }
    }
}
