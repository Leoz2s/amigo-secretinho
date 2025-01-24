import { createContext, useContext } from "react";

type FriendsProviderProps = {
  children: React.JSX.Element;
};

type FriendObjectProps = {
  name: string; 
  suggestion: string; 
  email: string; 
  number: number;
};

const FriendsContext = createContext({});

export function FriendsProvider({children}: FriendsProviderProps) {
  function createFriend({name, suggestion, email, number}: FriendObjectProps) {
    let newFriend: FriendObjectProps[];
    const friends = localStorage.getItem("@amigoSecretinho:friends") ?? "";
    if(friends) {
      const parsedFriends = JSON.parse(friends);
      newFriend = [...parsedFriends, {name, suggestion, email, number}]; 
    } else {
      newFriend = [{name, suggestion, email, number}];
    };
    localStorage.setItem("@amigoSecretinho:friends", JSON.stringify(newFriend));
  };

  function getFriend({name}: {name: string}) {
    const friends = localStorage.getItem('@amigoSecretinho:friends') ?? "";
    const parsedFriends = JSON.parse(friends);
    const friendData = parsedFriends.filter((friend: {name: string}) => friend.name !== name);
    return friendData;
  };

  function updateFriend() {

  };

  function deleteFriend() {
    
  };

  return(
    <FriendsContext.Provider value={{createFriend, getFriend, updateFriend, deleteFriend}}>
      {children}
    </FriendsContext.Provider>
  );
};

export function useFriends() {
  return useContext(FriendsContext);
};