namespace Application.Features.Property.PropertyTrace.Dtos
{
    public class PropertyTracePostParamsDto
    {
        public DateTime DateSale { get; set; }
        public string Name { get; set; }
        public decimal Value { get; set; }
        public decimal Tax { get; set; }
        public string IdProperty { get; set; }
    }
}