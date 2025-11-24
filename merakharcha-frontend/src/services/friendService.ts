import { useApi } from "@/app/hooks/useApi";

export function useFriendService() {
  const { callApi } = useApi();

  // GET all connections (friends)
  const getFriends = () =>
    callApi("/api/connections", {
      method: "GET",
    });

  // Add connection (friend)
  const addFriend = (payload: { other_user: number }) =>
    callApi(`/api/connection/${payload.other_user}`, {
      method: "POST",
    });

  // Remove connection (friend)
  const removeFriend = (other_user: number) =>
    callApi(`/api/connection/${other_user}`, {
      method: "DELETE",
    });

  return { getFriends, addFriend, removeFriend };
}
