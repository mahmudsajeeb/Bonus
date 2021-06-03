const getBonus = (salary,bonus) =>{
  return bonus ? `£${10 * salary}` : `£${salary}`;
}
console.log(getBonus(10))

//////////

function getBonus(salary,bonus){
  if(bonus)
  return '£' + (salary * 10)
  else
  return '£' + salary
}
console.log(getBonus(199))

//////////////
const getBonus = (salary,bonus) =>`£${salary * (bonus ? 10 : 1)} `

var type = (type =>18) ? "adult" : "Not adult"

function bonusTime(salary,bonus){
  if(bonus){
    return `£$(salary * 10)`
  }else
  return `£$(salary)`
}
function bounsTime(salary,bonus){
  return `£$(salary *(bouns ? 10 : 1))`
}