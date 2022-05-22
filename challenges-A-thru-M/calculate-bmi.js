// Solution below, just need to say this first: 
//This codewars contains words describing weights of people. If that makes you 
//uncomfortable, you may want to skip this one.

//BMI (body mass index), which is based on the height and weight of a person, is an 
//inaccurate measure of body fat content and does not take into account muscle 
//mass, bone density, overall body composition, and racial and sex differences, according to 
//researchers from the Perelman School of Medicine, University of Pennsylvania.

// Paramters: a weight, and a height
// Return: the BMI of the person given

function bmi(weight, height) {

    //set 'bmiValue' to the proper formula using the arguments
    let bmiValue = (weight/height**2)

    //use some conditionals to return the proper values based on 'bmiValue'
    if (bmiValue <= 18.5){
      return "Underweight"
    } else if (bmiValue <= 25.0){
      return "Normal"
    } else if (bmiValue <= 30.0){
      return "Overweight"
    } else if (bmiValue > 30.0){
      return "Obese"
    }
}