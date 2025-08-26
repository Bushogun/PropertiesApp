using Application.Features.Property.PropertyImage.Dtos;
using Core.Dtos.ResponsesDto;
using MediatR;

namespace Application.Features.Property.PropertyImage.Queries
{
    public class GetAllPropertyImageQuery : PropertyImageRequestParamsDto, IRequest<Result<List<PropertyImageResponseDto>>>;
}