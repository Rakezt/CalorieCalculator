var female=document.querySelector("#female")
var male=document.querySelector("#male")
var weight=document.querySelector("#weight")
var heightInFeet=document.querySelector("#height-In-Feet")
var heightInInches=document.querySelector("#height-In-Inches")
var age=document.querySelector("#age")
var lifeStyle=document.querySelector("#lifeStyle")
var calculateBtn=document.querySelector("#cal-btn")
var output=document.querySelector("#output")

alert("🔔 We wil never stored your data 🔔")


calculateBtn.addEventListener("click", calorieCal)

function calorieCal(){
    if(female.checked){
        output.innerText=  `You need ${Math.round(Number(lifeStyle.value)*0.2*655+(9.563*Number(weight.value))+(1.850*((Number(heightInFeet.value)*12)+Number(heightInInches.value)))-(4.676*Number(age.value)))} calorie per day`
        
    } else if (male.checked){
        output.innerText=`You need ${Math.round(Number(lifeStyle.value)*0.2* 66.5+(13.76*Number(weight.value))+(5.003*((Number(heightInFeet.value)*12)+Number(heightInInches.value)))-(6.755 *Number(age.value) ))} calorie per day`
    } else {
        output.innerText = `Something's wrong, please check`
    }
}


//female BMR = 66 + ( 6.2 × weight in pounds ) + ( 12.7 × height in inches ) – ( 6.76 × age in years )
//Male	BMR = BMR = 66.5 + ( 13.76 × weight in kg ) + ( 5.003 × height in cm ) – ( 6.755 × age in years )