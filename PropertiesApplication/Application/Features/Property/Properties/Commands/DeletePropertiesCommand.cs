using Application.Features.Property.Properties.Dtos.PropertiesDto;
using Core.Dtos.ResponsesDto;
using MediatR;

namespace Application.Features.Property.Properties.Commands
{
    public class DeletePropertiesCommand: PropertiesRequestParamsDto, IRequest<Result<PropertiesRequestParamsDto>> ;
}
