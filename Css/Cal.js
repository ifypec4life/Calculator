const oneButton = document.getElementById("btn-one")
const oneText = document.getElementById("btn-one")
const operationArea = document.querySelector(".operation")

oneButton.addEventListener("click",()=>{

    operationArea.innerHTML=operationArea.textContent+"1"
})

const twoButton = document.getElementById("btn-two")
const twoText = document.getElementById("btn-two")
/*const twoOperationArea = document.querySelector(".operation")*/

twoButton.addEventListener("click",()=>{
    operationArea.innerHTML=operationArea.textContent+"2"
})

const threeButton = document.getElementById("btn-three")
const threeText = document.getElementById("btn-three")

threeButton.addEventListener("click",()=>{
    operationArea.innerHTML=operationArea.textContent+"3"
})

const fourButton = document.getElementById("btn-four")
const fourText = document.getElementById("btn-four")
// const fourOperationArea = document.querySelector(".operation")

fourButton.addEventListener("click",()=>{
    operationArea.innerHTML=operationArea.textContent+"4"
})

const fiveButton = document.getElementById("btn-five")
const fiveText = document.getElementById("btn-five")
// const fiveOperationArea = document.querySelector(".operation")

fiveButton.addEventListener("click",()=>{
    operationArea.innerHTML=operationArea.textContent+"5"
})

const sixButton = document.getElementById("btn-six")
const sixText = document.getElementById("btn-six")
// const sixOperationArea = document.querySelector(".operation")

sixButton.addEventListener("click",()=>{
    operationArea.innerHTML=operationArea.textContent+"6"
})

const sevenButton= document.getElementById("btn-seven")
const sevenText = document.getElementById("btn-seven")
// const sevenOperationArea = document.querySelector(".operation")

sevenButton.addEventListener("click",()=>{
    operationArea.innerHTML=operationArea.textContent+"7"
})

const eightButton = document.getElementById("btn-eight")
const eightText = document.getElementById("btn-eight")
// const eightOperationArea = document.querySelector(".operation")

eightButton.addEventListener("click",()=>{
    operationArea.innerHTML=operationArea.textContent+"8"
})

const nineButton = document.getElementById("btn-nine")
const nineText = document.getElementById("btn-nine")
// const nineOperationArea = document.querySelector(".operation")

nineButton.addEventListener("click",()=>{
    operationArea.innerHTML=operationArea.textContent+"9"
})

const zeroButton = document.getElementById("btn-zero")
const zeroText = document.getElementById("btn-zero")
// const zeroOperationArea = document.querySelector(".operation")

zeroButton.addEventListener("click",()=>{
    operationArea.innerHTML=operationArea.textContent+"0"
})

const doublezeroButton = document.getElementById("btn-doublezero")
const doublezeroText = document.getElementById("btn-doublezero")
// const doublezeroOperationArea = document.querySelector(".operation")

doublezeroButton.addEventListener("click",()=>{
    operationArea.innerHTML=operationArea.textContent+"00"
})

const pointButton = document.getElementById("btn-point")
const pointText = document.getElementById("btn-point")
// const pointOperationArea = document.querySelector(".operation")

pointButton.addEventListener("click",()=>{
    operationArea.innerHTML=operationArea.textContent+"."
})

const bracketopenButton = document.getElementById("btn-bracketopen")
const bracketopenText = document.getElementById("btn-bracketopen")
// const bracketopenOperationArea = document.querySelector(".operation")

bracketopenButton.addEventListener("click",()=>{
    operationArea.innerHTML=operationArea.textContent+"("
})

const bracketcloseButton = document.getElementById("btn-bracketclose")
const bracketcloseText = document.getElementById("btn-bracketclose")
// const bracketcloseOperationArea = document.querySelector(".operation")

bracketcloseButton.addEventListener("click",()=>{
    operationArea.innerHTML=operationArea.textContent+")"
})


/* "red button C" */
const redButton = document.querySelector(".red")   /*(idebtify and calling the button class)*/
const resultText = document.querySelector(".result")  /*(identify the class, where the button will be displayed)*/

redButton.addEventListener("click",()=>{ /*(So when we click the button class C....)*/
    /* console.log("Hello") */
    operationArea.innerHTML="" /*(It should display this....)*/
})
/* "green button =" */
const greenButton = document.querySelector(".green")   /*(idebtify and calling the button class)*/
const equalText = document.querySelector(".operation")  /*(identify the class, where the button will be displayed)*/

greenButton.addEventListener("click",()=>{ /*(So when we click the button class C....)*/
    
    const result = eval(operationArea.textContent)
    resultText.innerHTML=result
})

/* "orange button /" */
const divisionButton = document.getElementById("division-sign")
const divisionText = document.getElementById("division-sign")  /*(Use an ID only when you have multiple with different functions)*/
// const divisionOperationArea = document.querySelector(".operation")

divisionButton.addEventListener("click",()=>{
    /*console.log("Hello")*/
    operationArea.innerHTML=operationArea.textContent+"/"
})
/* "orange button x" */
const multiplicationButton = document.getElementById("multiplication-sign")
const multiplicationText = document.getElementById("multiplication-sign")
// const multiplicationOperationArea = document.querySelector(".operation")

multiplicationButton.addEventListener("click",()=>{
    console.log("Hello")
    operationArea.innerHTML=operationArea.textContent+"*"
})
/* "orange button -" */
const subtractionButton = document.getElementById("subtraction-sign")
const subtractionText = document.getElementById("subtraction-sign")
// const subtractionOperationArea = document.querySelector(".operation")

subtractionButton.addEventListener("click",()=>{
    console.log("Hello")
    operationArea.innerHTML=operationArea.textContent+"-"
})
/* "orange button +" */
const additionButton = document.getElementById("addition-sign")
const additionText = document.getElementById("addition-sign")
// const additionOperationArea = document.querySelector(".operation")

additionButton.addEventListener("click",()=>{
    operationArea.innerHTML=operationArea.textContent+"+"
})
/* "blue button e" */
const exponentialButton = document.getElementById("exponential-sign")
const exponentialText = document.getElementById("exponential-sign")
// const exponentialOperationArea = document.querySelector(".operation")

exponentialButton.addEventListener("click",()=>{
    exponentialOperationArea.innerHTML="e"
})
/* "blue button %" */
const percentageButton = document.getElementById("percentage-sign")
const percentageText = document.getElementById("percentage-sign")
const percentageOperationArea = document.querySelector(".operation")

percentageButton.addEventListener("click",()=>{
    percentageOperationArea.innerHTML="%"
})
/* "blue button sin" */
const sinusButton = document.getElementById("sinus-sign")
const sinusText = document.getElementById("sinus-sign")
const sinusOperationArea = document.querySelector(".operation")

sinusButton.addEventListener("click",()=>{
   sinusOperationArea.innerHTML="sin"
})
/* "blue button deg" */
const degreeButton = document.getElementById("degree-sign")
const degreeText = document.getElementById("degree-sign")
const degreeOperationArea = document.querySelector(".operation")

degreeButton.addEventListener("click",()=>{
    const newresult=operationArea.textContent.slice(0,operationArea.textContent.length-1)
    degreeOperationArea.innerHTML=newresult

})