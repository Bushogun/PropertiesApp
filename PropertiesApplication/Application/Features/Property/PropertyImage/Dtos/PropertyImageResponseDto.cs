namespace Application.Features.Property.PropertyImage.Dtos
{
    public class PropertyImageResponseDto
    {
        public string IdPropertyImage { get; set; }
        public string IdProperty { get; set; }
        public byte[] FileData { get; set; }
        public string Enabled { get; set; }
    }
}