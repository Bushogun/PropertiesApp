namespace Application.Features.Property.PropertyImage.Dtos
{
    public class PropertyImagesPostParamsDto
    {
        public string IdProperty { get; set; }
        public byte[] FileData { get; set; } 
        public bool Enabled { get; set; }
    }
}