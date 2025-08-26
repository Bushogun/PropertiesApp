using Application.Features.Property.Properties.Dtos.PropertiesDto;
using Core.Dtos.ResponsesDto;
using Infrastructure.Persistence;
using MediatR;
using MongoDB.Driver;

namespace Application.Features.Property.Properties.Commands
{
    public class DeletePropertiesCommandHandler : IRequestHandler<DeletePropertiesCommand, Result<PropertiesRequestParamsDto>>
    {
        private readonly AppDbContext _context;

        public DeletePropertiesCommandHandler(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Result<PropertiesRequestParamsDto>> Handle(DeletePropertiesCommand request, CancellationToken cancellationToken)
        {
            var filter = Builders<Domain.Entities.PropertyEntity>.Filter.Eq(o => o.IdProperty, request.IdProperty);
            var property = await _context.Properties.FindOneAndDeleteAsync(filter, cancellationToken: cancellationToken);

            if (property == null)
            {
                return Result<PropertiesRequestParamsDto>.Success(null, 0);
            }

            var imageFilter = Builders<Domain.Entities.PropertyImageEntity>.Filter.Eq(pi => pi.IdProperty, request.IdProperty);
            await _context.PropertyImages.DeleteManyAsync(imageFilter, cancellationToken);

            var dto = new PropertiesRequestParamsDto { IdProperty = property.IdProperty };

            return Result<PropertiesRequestParamsDto>.Success(dto);

        }
    }
}
