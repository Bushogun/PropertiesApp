using Application.Features.Property.PropertyTrace.Dtos;
using Core.Dtos.ResponsesDto;
using MediatR;

namespace Application.Features.Property.PropertyTrace.Queries
{
    public class GetPropertyTraceByIdPropertyQuery : PropertyTraceResquestParamsDto, IRequest<Result<List<PropertyTraceResponseDto>>>;
}