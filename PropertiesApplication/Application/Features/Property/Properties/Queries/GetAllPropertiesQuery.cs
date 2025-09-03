using Application.Features.Property.Properties.Dtos.PropertiesDto;
using Core.Dtos.ResponsesDto;
using MediatR;

namespace Application.Features.Property.Properties.Queries
{
    public class GetAllPropertiesQuery : IRequest<Result<List<PropertiesResponseDto>>> 
    {
        public string? Name { get; set; }
        public string? Address { get; set; }
        public int? Year { get; set; }
        public string? IdOwner { get; set; }
    };
}
