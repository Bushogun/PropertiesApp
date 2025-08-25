using Application.Features.Property.Owners.Dtos.OwnersDto;
using Application.Features.Property.Owners.Mappers;
using Core.Dtos.ResponsesDto;
using Infrastructure.Persistence;
using MediatR;
using MongoDB.Driver;

namespace Application.Features.Property.Owners.Queries
{
    public class GetOwnerQueryHandler : IRequestHandler<GetOwnerQuery, Result<OwnerResponseDto>>
    {
        private readonly AppDbContext _context;

        public GetOwnerQueryHandler(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Result<OwnerResponseDto>> Handle(GetOwnerQuery request, CancellationToken cancellationToken)
        {
            var owner = await _context.Owners
                .Find(o => o.IdOwner == request.IdOwner)
                .FirstOrDefaultAsync(cancellationToken);

            if (owner == null)
                return Result<OwnerResponseDto>.Success(null, 0);

            var dto = GetOwnerMapper.ToDto(owner);
            return Result<OwnerResponseDto>.Success(dto);

        }
    }
}
