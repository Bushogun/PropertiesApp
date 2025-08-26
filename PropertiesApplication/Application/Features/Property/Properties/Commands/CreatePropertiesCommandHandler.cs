using Application.Features.Property.Properties.Dtos.PropertiesDto;
using Application.Features.Property.Properties.Mappers;
using Core.Dtos.ResponsesDto;
using Infrastructure.Persistence;
using MediatR;

namespace Application.Features.Property.Properties.Commands
{
    public class CreatePropertiesCommandHandler : IRequestHandler<CreatePropertiesCommand, Result<CreatePropertiesResponseDto>> 
    {
        private readonly AppDbContext _context;
        public CreatePropertiesCommandHandler(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Result<CreatePropertiesResponseDto>> Handle(CreatePropertiesCommand request, CancellationToken cancellationToken)
        {
            var property = CreatePropertiesMapper.ToEntity(request);

            await _context.Properties.InsertOneAsync(property, cancellationToken: cancellationToken);

            var dto = CreatePropertiesMapper.ToDto(property);

            return Result<CreatePropertiesResponseDto>.Success(dto);
        }
    }
}
