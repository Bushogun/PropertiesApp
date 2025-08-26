using Application.Features.Property.Properties.Dtos.PropertiesDto;
using Application.Features.Property.Properties.Mappers;
using Core.Dtos.ResponsesDto;
using Infrastructure.Persistence;
using MediatR;
using MongoDB.Driver;

namespace Application.Features.Property.Properties.Queries
{
    public class GetAllPropertiesQueryHandler : IRequestHandler<GetAllPropertiesQuery, Result<List<PropertiesResponseDto>>>
    {
        private readonly AppDbContext _context;

        public GetAllPropertiesQueryHandler(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Result<List<PropertiesResponseDto>>> Handle(GetAllPropertiesQuery request, CancellationToken cancellationToken)
        {
            var properties = await _context.Properties
                .Find(_ => true)
                .ToListAsync(cancellationToken);
            var dtoList = GetPropertiesMapper.ToDtoList(properties);
            return Result<List<PropertiesResponseDto>>.Success(dtoList, dtoList.Count);
        }

    }
}
