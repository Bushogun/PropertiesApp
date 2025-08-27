using Application.Features.Property.Owners.Dtos.OwnersDto;
using Application.Features.Property.Owners.Mappers;
using Core.Dtos.ResponsesDto;
using Infrastructure.Persistence;
using MediatR;
using MongoDB.Driver;

namespace Application.Features.Property.Owners.Queries
{
    public class GetOwnersQueryHandler : IRequestHandler<GetOwnersQuery, Result<List<OwnerResponseDto>>>
    {
        private readonly AppDbContext _context;

        public GetOwnersQueryHandler(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Result<List<OwnerResponseDto>>> Handle(GetOwnersQuery request, CancellationToken cancellationToken)
        {
            var owners = await _context.Owners
                .Find(_ => true) 
                .ToListAsync(cancellationToken);

            var dtoList = GetOwnerMapper.ToDtoList(owners);

            return Result<List<OwnerResponseDto>>.Success(dtoList, dtoList.Count);
        }
    }
}
