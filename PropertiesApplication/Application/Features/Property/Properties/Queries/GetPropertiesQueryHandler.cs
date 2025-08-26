using Application.Features.Property.Properties.Dtos.PropertiesDto;
using Application.Features.Property.Properties.Mappers;
using Core.Dtos.ResponsesDto;
using Infrastructure.Persistence;
using MediatR;
using MongoDB.Driver;

namespace Application.Features.Property.Properties.Queries
{
    public class GetPropertiesQueryHandler : IRequestHandler<GetPropertiesQuery, Result<PropertiesResponseDto>>
    {
        private readonly AppDbContext _context;
        public GetPropertiesQueryHandler(AppDbContext context)
        {
            _context = context;
        }
        public async Task<Result<PropertiesResponseDto>> Handle(GetPropertiesQuery request, CancellationToken cancellationToken)
        {
            var properties = await _context.Properties
                .Find(p => p.IdProperty == request.IdProperty)
                .FirstOrDefaultAsync(cancellationToken);
            if (properties == null)
                return Result<PropertiesResponseDto>.Success(null, 0);

            var dto = GetPropertiesMapper.ToDto(properties);
            return Result<PropertiesResponseDto>.Success(dto);
        }
    }
}
