//function takeANumber to determine name and place in line at Katz katzDeliLine

function takeANumber(katzDeliLine, nameNew) {
  
     katzDeliLine.push(nameNew)
     
  return `Welcome ${nameNew}. You are number ${katzDeliLine.length} in line.`
}




//function nowServing to inform if line is empty and/or who the next person on line is to be served

function nowServing(katzDeliLine, name) {
  
  if (katzDeliLine.length === 0) {
    
    return "There is nobody waiting to be served!"
  
  } else {
   
    return `Currently serving ${katzDeliLine.shift()}.` 
  }
}




//function currentLine informs who is online when people are waiting (i.e. 1. Bill, 2. Jane, ) or informs that the line is empty

function currentLine(katzDeliLine) {
  
  if (katzDeliLine.length === 0) {
    
    return "The line is currently empty."
    
  } else {
    
    const personOnLine = []
    
    for (let i=0; i<katzDeliLine.length; i++) {
      
      personOnLine.push(`${i+1}. ${katzDeliLine[i]}`)
    }
      
      return `The line is currently: ${personOnLine.join(', ')}`
    
  }
}