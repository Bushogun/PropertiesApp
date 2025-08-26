using Application.Features.Property.PropertyImage.Dtos;
using Core.Dtos.ResponsesDto;
using MediatR;

namespace Application.Features.Property.PropertyImage.Commands
{
    public class DeletePropertyImagesCommand : PropertyImageRequestParamsDto, IRequest<Result<PropertyImageRequestParamsDto>>;
}
