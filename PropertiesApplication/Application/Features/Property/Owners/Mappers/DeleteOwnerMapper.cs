using Application.Features.Property.Owners.Dtos.OwnersDto;
using Domain.Entities;

namespace Application.Features.Property.Owners.Mappers
{
    public static class DeleteOwnerMapper
    {
        public static DeleteOwnerResponseDto ToDto(OwnerEntity owner)
        {
            return new DeleteOwnerResponseDto
            {
                IdOwner = owner.IdOwner
            };
        }
    }
}