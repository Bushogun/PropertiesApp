using Application.Features.Property.PropertyImage.Dtos;
using Infrastructure.Persistence;
using Core.Dtos.ResponsesDto;
using MediatR;
using MongoDB.Driver;

namespace Application.Features.Property.PropertyImage.Commands
{
    public class DeletePropertyImagesCommandHandler : IRequestHandler<DeletePropertyImagesCommand, Result<PropertyImageRequestParamsDto>>
    {
        private readonly AppDbContext _context;
        
        public DeletePropertyImagesCommandHandler(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Result<PropertyImageRequestParamsDto>> Handle(DeletePropertyImagesCommand request, CancellationToken cancellationToken)
        {
            var filter = Builders<Domain.Entities.PropertyImageEntity>.Filter.Eq(pi => pi.IdProperty, request.IdProperty);
            var deleteResult = await _context.PropertyImages.DeleteManyAsync(filter, cancellationToken);
            if (deleteResult == null)
            {
                return Result<PropertyImageRequestParamsDto>.Success(null, 0);
            }
            var dto = new PropertyImageRequestParamsDto { IdProperty = request.IdProperty };
            return Result<PropertyImageRequestParamsDto>.Success(dto);

        }
    }
}
