using Application.Features.Property.Owners.Dtos.OwnersDto;
using Domain.Entities;

namespace Application.Features.Property.Owners.Mappers
{
    public static class GetOwnerMapper
    {
        public static OwnerResponseDto ToDto(OwnerEntity owner)
        {
            if (owner == null) return null;

            return new OwnerResponseDto
            {
                Id = owner.IdOwner,
                Name = owner.Name,
                Address = owner.Address,
                Photo = owner.Photo,
                Birthday = owner.Birthday
            };
        }
        public static List<OwnerResponseDto> ToDtoList(IEnumerable<OwnerEntity> owners)
        {
            if (owners == null || !owners.Any()) return new List<OwnerResponseDto>();
            return owners.Select(ToDto).ToList();
        }
    }
}
