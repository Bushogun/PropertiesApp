using Application.Features.Property.PropertyTrace.Commands;
using Application.Features.Property.PropertyTrace.Dtos;
using Application.Features.Property.PropertyTrace.Mappers;
using Core.Dtos.ResponsesDto;
using Infrastructure.Persistence;
using MediatR;

namespace Application.Features.Property.PropertyTrace.Commands
{
    public class CreatePropertyTraceCommandHandler : IRequestHandler<CreatePropertyTraceCommand, Result<CreatePropertyTraceResponseDto>>
    {
        private readonly AppDbContext _context;
        public CreatePropertyTraceCommandHandler(AppDbContext context)
        {
            _context = context;
        }
        public async Task<Result<CreatePropertyTraceResponseDto>> Handle(CreatePropertyTraceCommand request, CancellationToken cancellationToken)
        {
            var propertyTrace = CreatePropertyTraceMapper.ToEntity(request);

            await _context.PropertyTraces.InsertOneAsync(propertyTrace, cancellationToken: cancellationToken);

            var dto = CreatePropertyTraceMapper.ToDto(propertyTrace);

            return Result<CreatePropertyTraceResponseDto>.Success(dto);
        }

    }
}