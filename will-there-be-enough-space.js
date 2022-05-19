//Parameters: 3 values, cap, on, and wait: 
// 'cap' is how many people the bus can hold.
// 'on' is how many people are currently on the bus
// 'wait' is how many people are waiting to get on the bus

// Return: 0 if there is enough space for everyone waiting to get on the bus
// OR the number of passengers that will be left behind, if there's not enough space

function enough(cap, on, wait) {
  
    // Using ternary: first determine the total amount of passengers
    // if the total is less than the cap, return 0
    // if the total is not, use a formula to return the number of passengers that cannot get on.
    
    return (on + wait < cap ? 0 : on + wait - cap)
    
}