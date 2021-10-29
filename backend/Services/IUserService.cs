using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using dotnet5_webapp.Internal;
using dotnet5_webapp.Models;

namespace dotnet5_webapp.Services
{
    public interface IUserService
    {
        Task CreateStatRecord(Player player);
        Task<List<String>> AddNewStatRecordForAllUsers();
        Task<List<Activity>> AddNewActivitiesForAllUsers();
        Task<Player> CreateNewPlayer(String username, GameVersion gameVersion);
        Task<UserSearchResponse> SearchForPlayer(String username, GameVersion gameVersion);
        Task<ResponseWrapper<(string, string)>> CurrentVos();
        Task<ResponseWrapper<Player>> UpdateIronStatus(String username, GameVersion gameVersion);
        Task<ResponseWrapper<AccountType>> GetIronStatus(String username, GameVersion gameVersion);
        Task<ApplicationUser> SearchForUser(String username);
        Task<ResponseWrapper<CurrentGainForUserServiceResponse>> CurrentGainForUser(String username, GameVersion gameVersion);
        Task<ResponseWrapper<PlayerDetailsServiceResponse>> GetPlayerDetails(String username);
        Task<ResponseWrapper<PlayerMetricsServiceResponse>> GetPlayerMetrics(String username);
        Task<ResponseWrapper<PlayerQuestsServiceResponse>> GetPlayerQuests(String username);
        Task<ResponseWrapper<Boolean>> TrackUser(String username, GameVersion gameVersion);
        Task<ResponseWrapper<String>> FollowPlayer(String username, ApplicationUser user, GameVersion gameVersion);
        Task<ResponseWrapper<String>> UnfollowPlayer(String username, ApplicationUser user, GameVersion gameVersion);
        Task<ResponseWrapper<string>> UpdateRsn(String username, ApplicationUser user, GameVersion gameVersion);
        Task<ResponseWrapper<Activity>> LikeActivity(ApplicationUser user, int activityId);
        Task<ResponseWrapper<Activity>> UnlikeActivity(ApplicationUser user, int activityId);
        Task<ResponseWrapper<ICollection<String>>> GetFollowedPlayerNames(ApplicationUser user);
        Task<ResponseWrapper<ICollection<String>>> SeedPlayersFromClanMemberList(String clanName);
        Task<ResponseWrapper<ICollection<ActivityResponse>>> GetFollowedPlayerActivities(ApplicationUser user, int size);
        Task<int> CurrentPlayerCount();
        Task<List<ActivityResponse>> GetAllActivities(int size);
    }
}