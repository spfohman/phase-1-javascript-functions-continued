// Your code here
function saturdayFun(activity= 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(string = 'go to the office'){
    return `This Monday, I will ${string}.`;
}
function wrapAdjective(parm='*'){
	
    return function(string='special'){
        return `You are ${parm}${string}${parm}!`;
    }
}
