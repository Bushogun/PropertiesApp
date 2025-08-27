using Application.Features.Property.Owners.Dtos.OwnersDto;
using Microsoft.AspNetCore.Mvc;
using Application.Features.Property.Owners.Queries;
using Application.Features.Property.Owners.Commands;
using Core.Dtos.ResponsesDto;
using MediatR;
using Application.Features.Property.Properties.Queries;

namespace API.Controllers
{
    [ApiController]
    [Route("api/owners")]
    public class OwnerController : ControllerBase
    {
        private readonly IMediator _mediator;

        public OwnerController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET api/owners
        [HttpGet]
        [Consumes("application/json")]
        public async Task<Result<List<OwnerResponseDto>>> GetOwners()
        {
            return await _mediator.Send(new GetOwnersQuery());
        }

        // GET api/owners/{id}
        [HttpGet("{id}")]
        [Consumes("application/json")]
        public async Task<Result<OwnerResponseDto>> GetOwner(string id)
        {
            return await _mediator.Send(new GetOwnerQuery { IdOwner = id });
        }

        // POST api/owners
        [HttpPost]
        [Consumes("application/json")]
        public async Task<Result<CreateOwnerResponseDto>> PostOwner([FromBody] CreateOwnerCommand request)
        {
            return await _mediator.Send(request);
        }

        // DELETE api/owners/{id}
        [HttpDelete("{id}")]
        [Consumes("application/json")]
        public async Task<Result<OwnerResquestParamsDto>> DeleteOwner(string id)
        {
            return await _mediator.Send(new DeleteOwnerCommand { IdOwner = id });
        }
    }
}
