using Core.Dtos.ResponsesDto;
using MediatR;
using Application.Features.Property.Owners.Dtos.OwnersDto;

namespace Application.Features.Property.Owners.Queries
{
    public class GetOwnerQuery: OwnerResquestParamsDto, IRequest<Result<OwnerResponseDto>> ;
}