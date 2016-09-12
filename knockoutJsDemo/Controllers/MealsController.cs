using knockoutJsDemo.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace knockoutJsDemo.Controllers
{
    public class MealsController : ApiController
    {
        Meal[] products = new Meal[]
        {
            new Meal { Id = 0, Name = "Standard (sandwich)", Price = 0 },
            new Meal { Id = 1, Name = "Premium (lobster)", Price = 34.95M },
            new Meal { Id = 2, Name = "Ultimate (whole zebra)", Price = 290M }
        };

        public IEnumerable<Meal> GetAllProducts()
        {
            return products;
        }

        public IHttpActionResult GetProduct(int id)
        {
            var product = products.FirstOrDefault((p) => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

    }
}
