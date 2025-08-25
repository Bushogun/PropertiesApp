using Application.Features.Property.Owners.Dtos.OwnersDto;
using Application.Features.Property.Owners.Mappers;
using Core.Dtos.ResponsesDto;
using Infrastructure.Persistence;
using MediatR;
using MongoDB.Driver;

namespace Application.Features.Property.Owners.Commands
{
    public class CreateOwnerCommandHandler : IRequestHandler<CreateOwnerCommand, Result<CreateOwnerResponseDto>>
    {
        private readonly AppDbContext _context;

        public CreateOwnerCommandHandler(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Result<CreateOwnerResponseDto>> Handle(CreateOwnerCommand request, CancellationToken cancellationToken)
        {
            var owner = CreateOwnerMapper.ToEntity(request);

            await _context.Owners.InsertOneAsync(owner, cancellationToken: cancellationToken);

            var dto = CreateOwnerMapper.ToDto(owner);

            return Result<CreateOwnerResponseDto>.Success(dto);
        }
    }
}
