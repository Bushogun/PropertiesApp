using Application.Features.Property.Owners.Dtos.OwnersDto;
using Core.Dtos.ResponsesDto;
using Infrastructure.Persistence;
using MediatR;
using MongoDB.Driver;

namespace Application.Features.Property.Owners.Commands
{
    public class DeleteOwnerCommandHandler : IRequestHandler<DeleteOwnerCommand, Result<OwnerResquestParamsDto>>
    {
        private readonly AppDbContext _context;

        public DeleteOwnerCommandHandler(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Result<OwnerResquestParamsDto>> Handle(DeleteOwnerCommand request, CancellationToken cancellationToken)
        {
            var filter = Builders<Domain.Entities.OwnerEntity>.Filter.Eq(o => o.IdOwner, request.IdOwner);
            var owner = await _context.Owners.FindOneAndDeleteAsync(filter, cancellationToken: cancellationToken);

            if (owner == null)
            {
                return Result<OwnerResquestParamsDto>.Success(null, 0);
            }

            var dto = new OwnerResquestParamsDto { IdOwner = owner.IdOwner };

            return Result<OwnerResquestParamsDto>.Success(dto);
        }
    }
}
