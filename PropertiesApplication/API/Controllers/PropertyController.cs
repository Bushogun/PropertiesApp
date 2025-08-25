using Application.Features.Property.Properties.Dtos.PropertiesDto;
using Application.Features.Property.Properties.Commands;
using Application.Features.Property.Properties.Queries;
using Core.Dtos.ResponsesDto;
using Microsoft.AspNetCore.Mvc;
using MediatR;

namespace API.Controllers
{
    [ApiController]
    [Route("api/property")]
    public class PropertyController : ControllerBase
    {
        private readonly IMediator _mediator;

        public PropertyController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET api/property
        [HttpGet]
        [Consumes("application/json")]
        public async Task<Result<List<PropertiesResponseDto>>> GetProperties()
        {
            return await _mediator.Send(new GetPropertiesQuery());
        }

        // GET api/property/{id}
        [HttpGet("{id}")]
        [Consumes("application/json")]
        public async Task<Result<PropertiesResponseDto>> GetProperty(string id)
        {
            return await _mediator.Send(new GetPropertyQuery { IdProperty = id });
        }

        // POST api/property
        [HttpPost]
        [Consumes("application/json")]
        public async Task<Result<CreatePropertiesResponseDto>> PostProperty([FromBody] CreatePropertiesCommand request)
        {
            return await _mediator.Send(request);
        }

        // DELETE api/property/{id}
        [HttpDelete("{id}")]
        [Consumes("application/json")]
        public async Task<Result<PropertiesResquestParamsDto>> DeleteProperty(string id)
        {
            return await _mediator.Send(new DeletePropertyCommand { IdProperty = id });
        }
    }
}
