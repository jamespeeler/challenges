//Parameters: an array of names
//Return: an array containing names that are exactly 4 letters long

function friend(friends){

    //use filter method to find and return only the entries with exactly 4 letters
    return friends.filter(e => e.length === 4)

}

//Arrow Function version 

//     const friend = friends => friends.filter(e => e.length === 4)