namespace Profisee.BeSpokedBikes.Data.Dtos
{
    public class UpdateEntityResponse<T> where T : class, new()
    {
        public bool Success { get; set; }

        public T? Entity { get; set; }
    }
}
