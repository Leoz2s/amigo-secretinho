import { createContext, useContext } from "react";

type FriendsProviderProps = {
  children: React.JSX.Element;
};

export type FriendObjectProps = {
  id?: number;
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

      const friendsIDs = parsedFriends.map((friend: FriendObjectProps) => friend.id);
      const orderedFriendsByID = friendsIDs.sort((a: number, b: number) => a - b);
      console.log(friendsIDs.sort())
      const newID = orderedFriendsByID.at(-1) + 1;
      newFriend = [...parsedFriends, {id: newID, name, suggestion, email, number}]; 
    } else {
      newFriend = [{id: 1, name, suggestion, email, number}];
    };
    localStorage.setItem("@amigoSecretinho:friends", JSON.stringify(newFriend));
  };

  function getFriend(id: number) {
    const friends = localStorage.getItem('@amigoSecretinho:friends') ?? "";
    if(friends) {
      const parsedFriends = JSON.parse(friends);
      const friendData = parsedFriends.filter((friend: FriendObjectProps) => friend.id == id);
      return friendData[0] ?? null;
    } else {return null};
  };

  function indexFriends() {
    const friends = localStorage.getItem('@amigoSecretinho:friends') || "";
    if(friends) {
      return JSON.parse(friends);
    }else {return};
  };

  function updateFriend({id, name, suggestion, email, number}: FriendObjectProps) {
    if(id) {
      const friend = getFriend(id);
      if(friend) {
        friend.name = name ?? friend.name;
        friend.suggestion = suggestion ?? friend.suggestion;
        friend.email = email ?? friend.email;
        friend.number = number ?? friend.number;
  
        const friends = localStorage.getItem('@amigoSecretinho:friends') ?? "";
        const parsedFriends = JSON.parse(friends);
        const friendsMinusUpdated = parsedFriends.filter((friend: FriendObjectProps) => friend.id !== id);
        localStorage.setItem('@amigoSecretinho:friends', JSON.stringify([...friendsMinusUpdated, friend]));
      }
    } else { return alert('Amigo não encontrado. Por favor, exclua-o e insira novamente os dados.');
    };
  };

  function deleteFriend(id: number) {
    const friends = localStorage.getItem('@amigoSecretinho:friends') ?? "";
    if(friends) {
      const parsedFriends = JSON.parse(friends);
      const friendRemoved = parsedFriends.filter((friend: FriendObjectProps) => friend.id !== id);
      localStorage.setItem('@amigoSecretinho:friends', JSON.stringify(friendRemoved));
    };
  };

  return(
    <FriendsContext.Provider value={{createFriend, getFriend, indexFriends, updateFriend, deleteFriend}}>
      {children}
    </FriendsContext.Provider>
  );
};

export function useFriends() {
  return useContext(FriendsContext);
};