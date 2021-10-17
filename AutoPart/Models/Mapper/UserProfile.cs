using AutoMapper;
using DataAutoPart.Entities.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutoPart.Models.Mapper
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<AppUser, UserViewModel>()
                .ForMember(dest => dest.Photo, opt => opt.MapFrom(dest => "images/" + dest.Image));
        }
    }
}
