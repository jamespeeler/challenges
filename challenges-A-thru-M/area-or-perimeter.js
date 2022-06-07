// Parameters: 2 integers, a length and a width of a rectangle or square
// Return: the area if it's a square, perimeter if it's a rectangle
const areaOrPerimeter = function(l , w) {
    // using ternary, determine if l is equal to w (meaning it's a square), if so, return
    // the area of the square. if not, return the perimeter of the rectangle.
    return l === w ? l*w : 2*(l+w)
};