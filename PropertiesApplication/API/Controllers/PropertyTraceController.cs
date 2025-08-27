using Application.Features.Property.PropertyTrace.Dtos;
using Application.Features.Property.PropertyTrace.Queries;
using Microsoft.AspNetCore.Mvc;
using Core.Dtos.ResponsesDto;
using MediatR;
using Application.Features.Property.PropertyTrace.Commands;

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

        // GET api/property-trace/{id}
        [HttpGet("{idProperty}")]
        [Consumes("application/json")]
        public async Task<Result<List<PropertyTraceResponseDto>>> GetPropertyTraceByIdProperty(string idProperty)
        {
            return await _mediator.Send(new GetPropertyTraceByIdPropertyQuery { IdProperty = idProperty });
        }

        // POST api/property-trace
        [HttpPost]
        [Consumes("application/json")]
        public async Task<Result<CreatePropertyTraceResponseDto>> PostPropertyTrace([FromBody] CreatePropertyTraceCommand request)
        {
            return await _mediator.Send(request);
        }



    }
}
