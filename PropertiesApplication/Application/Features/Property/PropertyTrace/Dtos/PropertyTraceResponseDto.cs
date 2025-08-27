namespace Application.Features.Property.PropertyTrace.Dtos
{
    public class PropertyTraceResponseDto
    {
        public string IdPropertyTrace { get; set; }
        public DateTime DateSale { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public string Tax { get; set; }
        public string IdProperty { get; set; }
    }
}
