using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class PropertyTraceController : Controller
    {
        // GET: PropertyTraceController
        public ActionResult Index()
        {
            return View();
        }

        // GET: PropertyTraceController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: PropertyTraceController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PropertyTraceController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: PropertyTraceController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: PropertyTraceController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: PropertyTraceController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: PropertyTraceController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
