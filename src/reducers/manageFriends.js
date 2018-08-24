export function manageFriends(state, action){
  switch (action.type) {
      case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
      case 'REMOVE_FRIEND':
        let temp = [...state.friends]
        let filtered = temp.filter(friend => {
          return friend.id !== action.id
        })
        return {friends: filtered}
      default:
        return state;
    }
}
