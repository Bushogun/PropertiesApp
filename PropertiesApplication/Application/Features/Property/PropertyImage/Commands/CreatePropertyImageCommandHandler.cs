using Application.Features.Property.PropertyImage.Dtos;
using Core.Dtos.ResponsesDto;
using Domain.Entities;
using Infrastructure.Persistence;
using MediatR;

namespace Application.Features.Property.PropertyImage.Commands
{
    public class CreatePropertyImageCommandHandler : IRequestHandler<CreatePropertyImageCommand, Result<CreatePropertyImageResponseDto>>
    {
        private readonly AppDbContext _context;

        public CreatePropertyImageCommandHandler(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Result<CreatePropertyImageResponseDto>> Handle(CreatePropertyImageCommand request, CancellationToken cancellationToken)
        {
            var entity = new PropertyImageEntity
            {
                IdProperty = request.IdProperty,
                FileData = request.FileData,
                Enabled = request.Enabled
            };

            await _context.PropertyImages.InsertOneAsync(entity, cancellationToken: cancellationToken);

            var response = new CreatePropertyImageResponseDto
            {
                Status = "Success",
            };

            return Result<CreatePropertyImageResponseDto>.Success(response);
        }
    }
}
