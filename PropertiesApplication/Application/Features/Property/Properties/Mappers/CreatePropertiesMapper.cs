using Application.Features.Property.Properties.Dtos.PropertiesDto;
using Application.Features.Property.Properties.Commands;
using Domain.Entities;

namespace Application.Features.Property.Properties.Mappers
{
    public static class CreatePropertiesMapper
    {
        public static PropertyEntity ToEntity(CreatePropertiesCommand command)
        {
            return new PropertyEntity
            {
                Name = command.Name,
                Address = command.Address,
                Price = command.Price,
                CodeInternal = command.CodeInternal,
                Year = command.Year,
                IdOwner = command.IdOwner
            };
        }

        public static CreatePropertiesResponseDto ToDto(PropertyEntity property)
        {
            return new CreatePropertiesResponseDto
            {
                IdProperty = property.IdProperty,
                Status = "Created"
            };
        }
    }
}