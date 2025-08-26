using Application.Features.Property.Owners.Dtos.OwnersDto;
using Application.Features.Property.Owners.Queries;
using Core.Dtos.ResponsesDto;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/property-trace")]
    public class PropertyTraceController : ControllerBase
    {
        private readonly IMediator _mediator;

        public PropertyTraceController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET api/property-trace
        [HttpGet]
        [Consumes("application/json")]
        public async Task<Result<List<PropertyTraceResponseDto>>> GetPropertyTrace()
        {
            return await _mediator.Send(new GetPropertyTraceQuery());
        }
    }
}
