using Application.Features.Property.PropertyTrace.Dtos;
using Infrastructure.Persistence;
using Core.Dtos.ResponsesDto;
using MongoDB.Driver;
using MediatR;
using Application.Features.Property.PropertyTrace.Mappers;

namespace Application.Features.Property.PropertyTrace.Queries
{
    public class GetPropertyTraceQueryHandler : IRequestHandler<GetPropertyTraceByIdPropertyQuery, Result<List<PropertyTraceResponseDto>>>
    {
        private readonly AppDbContext _context;
        public GetPropertyTraceQueryHandler(AppDbContext context)
        {
            _context = context;
        }
        public async Task<Result<List<PropertyTraceResponseDto>>> Handle(GetPropertyTraceByIdPropertyQuery request, CancellationToken cancellationToken)
        {
            var propertyTrace = await _context.PropertyTraces
                .Find(_ => true)
                .ToListAsync(cancellationToken);

            var dtoList = GetPropertyTraceMapper.ToDtoList(propertyTrace);

            return Result<List<PropertyTraceResponseDto>>.Success(dtoList, dtoList.Count);
        }
    }
}