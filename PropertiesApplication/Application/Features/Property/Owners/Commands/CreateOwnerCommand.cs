using Application.Features.Property.Owners.Dtos.OwnersDto;
using Core.Dtos.ResponsesDto;
using MediatR;

namespace Application.Features.Property.Owners.Commands
{
    public class CreateOwnerCommand : OwnerPostParamsDto, IRequest<Result<CreateOwnerResponseDto>>;
}