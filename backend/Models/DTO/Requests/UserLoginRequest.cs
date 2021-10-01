﻿using System.ComponentModel.DataAnnotations;

namespace dotnet5_webapp.Models.DTO.Requests
{
    public class UserLoginRequest
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        public string Password { get; set; }
    }
}