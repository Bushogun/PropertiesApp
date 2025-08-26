using Application.Features.Property.PropertyImage.Commands;
using Application.Features.Property.PropertyImage.Queries;
using Application.Features.Property.PropertyImage.Dtos;
using Core.Dtos.ResponsesDto;
using Microsoft.AspNetCore.Mvc;
using MediatR;

namespace API.Controllers
{
    [ApiController]
    [Route("api/property-image")]
    public class PropertyImageController : ControllerBase
    {
        private readonly IMediator _mediator;

        public PropertyImageController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET api/property-image/{id}
        [HttpGet("{id}")]
        [Consumes("application/json")]
        public async Task<Result<List<PropertyImageResponseDto>>> GetAllPropertyImagesByIdProperty(string id)
        {
            return await _mediator.Send(new GetAllPropertyImageQuery { IdProperty = id });
        }

        // POST api/property-image/
        [HttpPost]
        [Consumes("application/json")]
        public async Task<Result<CreatePropertyImageResponseDto>> PostPropertyImages([FromBody] CreatePropertyImageCommand request)
        {
            return await _mediator.Send(request);
        }

        // DELETE api/property-image/{id}
        [HttpDelete("{id}")]
        [Consumes("application/json")]
        public async Task<Result<PropertyImageRequestParamsDto>> DeletePropertyImages(string id)
        {
            return await _mediator.Send(new DeletePropertyImagesCommand { IdProperty = id });
        }
    }
}