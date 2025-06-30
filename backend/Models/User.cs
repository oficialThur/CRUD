using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class User
    {
        public int Id { get; set; }
        
        [Required(ErrorMessage = "Nome é obrigatório")]
        [StringLength(255, ErrorMessage = "Nome não pode ter mais de 255 caracteres")]
        public string? Nome { get; set; }
        
        [Required(ErrorMessage = "Email é obrigatório")]
        [EmailAddress(ErrorMessage = "Email inválido")]
        [StringLength(255, ErrorMessage = "Email não pode ter mais de 255 caracteres")]
        public string? Email { get; set; }
        
        [StringLength(255, ErrorMessage = "Employment não pode ter mais de 255 caracteres")]
        public string? Employment { get; set; }
        
        [StringLength(255, ErrorMessage = "Level não pode ter mais de 255 caracteres")]
        public string? Level { get; set; }
        
        [StringLength(255, ErrorMessage = "PrimaryLanguage não pode ter mais de 255 caracteres")]
        public string? PrimaryLanguage { get; set; }
    }
}