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

            var entities = request.FileData.Select(file => new PropertyImageEntity
            {
                IdProperty = request.IdProperty,
                FileData = file,
                Enabled = request.Enabled
            }).ToList();

            await _context.PropertyImages.InsertManyAsync(entities, cancellationToken: cancellationToken);

            var response = new CreatePropertyImageResponseDto
            {
                Status = "Success",
            };

            return Result<CreatePropertyImageResponseDto>.Success(response);
        }
    }
}
