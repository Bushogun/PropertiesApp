using Application.Features.Property.Properties.Dtos.PropertiesDto;
using Application.Features.Property.Properties.Mappers;
using Core.Dtos.ResponsesDto;
using Domain.Entities;
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
            var filter = Builders<PropertyEntity>.Filter.Empty;

            if (!string.IsNullOrEmpty(request.Name))
                filter &= Builders<PropertyEntity>.Filter.Eq(p => p.Name, request.Name);

            if (!string.IsNullOrEmpty(request.Address))
                filter &= Builders<PropertyEntity>.Filter.Eq(p => p.Address, request.Address);

            if (request.Year.HasValue)
                filter &= Builders<PropertyEntity>.Filter.Eq(p => p.Year, request.Year.Value);

            if (!string.IsNullOrEmpty(request.IdOwner))
                filter &= Builders<PropertyEntity>.Filter.Eq(p => p.IdOwner, request.IdOwner);

            var properties = await _context.Properties
                .Find(filter)
                .ToListAsync(cancellationToken);

            var dtoList = GetPropertiesMapper.ToDtoList(properties);
            return Result<List<PropertiesResponseDto>>.Success(dtoList, dtoList.Count);
        }
    }
}
