using Application.Features.Property.Properties.Dtos.PropertiesDto;
using Core.Dtos.ResponsesDto;
using MediatR;

namespace Application.Features.Property.Properties.Queries
{
    public class GetAllPropertiesQuery : IRequest<Result<List<PropertiesResponseDto>>>;
}
