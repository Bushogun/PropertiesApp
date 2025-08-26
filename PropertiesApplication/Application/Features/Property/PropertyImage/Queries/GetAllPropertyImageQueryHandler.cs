using Application.Features.Property.PropertyImage.Dtos;
using Core.Dtos.ResponsesDto;
using Infrastructure.Persistence;
using MediatR;
using MongoDB.Driver;


namespace Application.Features.Property.PropertyImage.Queries
{
    public class GetAllPropertyImageQueryHandler : IRequestHandler<GetAllPropertyImageQuery, Result<List<PropertyImageResponseDto>>>
    {
        private readonly AppDbContext _context;

        public GetAllPropertyImageQueryHandler(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Result<List<PropertyImageResponseDto>>> Handle(GetAllPropertyImageQuery request, CancellationToken cancellationToken)
        {
            var propertyImages = await _context.PropertyImages
                .Find(img => img.IdProperty == request.IdProperty)
                .ToListAsync(cancellationToken);

            var dtoList = propertyImages.Select(img => new PropertyImageResponseDto
            {
                IdPropertyImage = img.IdPropertyImage,
                IdProperty = img.IdProperty,
                FileData = img.FileData,
                Enabled = img.Enabled.ToString()
            }).ToList();

            return Result<List<PropertyImageResponseDto>>.Success(dtoList, dtoList.Count);
        }
    }
}
