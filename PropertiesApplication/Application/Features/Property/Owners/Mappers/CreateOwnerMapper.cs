using Application.Features.Property.Owners.Commands;
using Application.Features.Property.Owners.Dtos.OwnersDto;
using Domain.Entities;

namespace Application.Features.Property.Owners.Mappers
{
    public static class CreateOwnerMapper
    {
        public static OwnerEntity ToEntity(CreateOwnerCommand command)
        {
            return new OwnerEntity(
                command.Name,
                command.Address,
                command.Photo,
                command.Birthday
            );
        }

        public static CreateOwnerResponseDto ToDto(OwnerEntity owner)
        {
            return new CreateOwnerResponseDto
            {
                IdOwner = owner.IdOwner,
                Status = "Created"
            };
        }
    }
}
