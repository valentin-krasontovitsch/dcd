using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    public class ProductionProfileOil : TimeSeriesBase<double>
    {
        [ForeignKey("DrainageStrategy.Id")]
        public virtual DrainageStrategy DrainageStrategy { get; set; } = null!;
    }
}
