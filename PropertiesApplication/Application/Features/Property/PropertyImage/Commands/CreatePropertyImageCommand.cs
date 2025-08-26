using Application.Features.Property.PropertyImage.Dtos;
using Core.Dtos.ResponsesDto;
using MediatR;

namespace Application.Features.Property.PropertyImage.Commands
{
    public class CreatePropertyImageCommand : PropertyImagesPostParamsDto, IRequest<Result<CreatePropertyImageResponseDto>>;
}