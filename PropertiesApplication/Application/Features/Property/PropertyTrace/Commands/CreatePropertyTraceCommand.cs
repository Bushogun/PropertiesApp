using Application.Features.Property.PropertyTrace.Dtos;
using Core.Dtos.ResponsesDto;
using MediatR;

namespace Application.Features.Property.PropertyTrace.Commands
{
    public class CreatePropertyTraceCommand : PropertyTracePostParamsDto, IRequest<Result<CreatePropertyTraceResponseDto>>;
}