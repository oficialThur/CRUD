using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]

public class UserController : ControllerBase
{
    private readonly AppDataContext _context;

    public UserController(AppDataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetUsers()
    {
        var users = _context.Users.ToList();
        return Ok(users);
    }

    [HttpGet("{id}")]
    public IActionResult GetUser(int id)
    {
        var user = _context.Users.Find(id);
        if (user == null)
        {
            return NotFound();
        }
        return Ok(user);
    }

    [HttpPost]
    public IActionResult CreateUser(User user)
    {
        _context.Users.Add(user);
        _context.SaveChanges();
        return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
    }

    [HttpPut("{id}")]
    public IActionResult UpdateUser(int id, User user)
    {
        if (id != user.Id)
        {
            return BadRequest();
        }

        var existingUser = _context.Users.Find(id);
        if (existingUser == null)
        {
            return NotFound();
        }

        existingUser.Nome = user.Nome;
        existingUser.Email = user.Email;
        existingUser.Employment = user.Employment;
        existingUser.Level = user.Level;
        existingUser.PrimaryLanguage = user.PrimaryLanguage;

        _context.SaveChanges();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteUser(int id)
    {
        var user = _context.Users.Find(id);
        if (user == null)
        {
            return NotFound();
        }

        _context.Users.Remove(user);
        _context.SaveChanges();
        return NoContent();
    }
}
