number();

var selectnumber = "";
var selectnumber2 = "";
var selectoperator = "";

function number(){
    const number = document.querySelectorAll(".numeric2 .number");
    const number2 = document.querySelectorAll(".numeric3 .number"); 
    const operator = document.querySelectorAll(".operation .operator");

    for(let i = 0; i < number.length; i++){
        number[i].addEventListener("click", () =>{
            if(selectoperator == ""){
                selectnumber = 
                number[i] == number[0] ? selectnumber += "7" : 
                number[i] == number[1] ? selectnumber += "8" :
                number[i] == number[2] ? selectnumber += "9" :
                number[i] == number[3] ? selectnumber += "4" :
                number[i] == number[4] ? selectnumber += "5" :
                number[i] == number[5] ? selectnumber += "6" :
                number[i] == number[6] ? selectnumber += "1" :
                number[i] == number[7] ? selectnumber += "2" :
                number[i] == number[8] ? selectnumber += "3" :
                selectnumber = "0";  
                printValueScreen(selectnumber, null);
            }      
        })
    }
    for(let p = 0; p < number2.length; p++){
        number2[p].addEventListener("click", () =>{
            if(selectoperator == ""){
                selectnumber = 
                number2[p] == number2[0] ? selectnumber += "0":
                selectnumber += ".";
                printValueScreen(selectnumber, null);
            }
        })
    }
    for(let i = 0; i < number.length; i++){
        number[i].addEventListener("click", () =>{
            if(selectoperator != ""){
                selectnumber2 = 
                number[i] == number[0] ? selectnumber2 += "7" : 
                number[i] == number[1] ? selectnumber2 += "8" :
                number[i] == number[2] ? selectnumber2 += "9" :
                number[i] == number[3] ? selectnumber2 += "4" :
                number[i] == number[4] ? selectnumber2 += "5" :
                number[i] == number[5] ? selectnumber2 += "6" :
                number[i] == number[6] ? selectnumber2 += "1" :
                number[i] == number[7] ? selectnumber2 += "2" :
                selectnumber2 += "3";
                printValueScreen(selectnumber2, null);
            }
        })
    }
    for(let p = 0; p < number2.length; p++){
        number2[p].addEventListener("click", () =>{
            if(selectnumber2 != ""){
                selectnumber2 = 
                number2[p] == number2[0] ? selectnumber2 += "0":
                selectnumber2 += ".";
                printValueScreen(selectnumber2, null);
            }
        })
    }

    for(let y = 0; y < operator.length; y++){
        operator[y].addEventListener("click", () =>{
            if(selectoperator == ""){
                selectoperator = operator[y] == operator[0] ? selectoperator = "/" :
                selectoperator = operator[y] == operator[1] ? selectoperator = "X" :
                selectoperator = operator[y] == operator[2] ? selectoperator = "-" :
                selectoperator = "+" 
                printValueScreen(null, selectoperator); 
                
            }
        })
    }
    operator[4].addEventListener("click", () =>{
        if(selectnumber == "" || selectnumber2 == "" || selectoperator == ""){
            selectnumber = "0"
            selectnumber2 = "0"
            selectoperator = '+'
        }
        calculate(selectnumber, selectnumber2, selectoperator)
        
    })
    }



function calculate(num1, num2, opr){
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)
        const operator = 
        opr == "+" ? num1 +  num2:  
        opr == "-" ? num1 -  num2: 
        opr == "X" ? num1 *  num2:
        num1 /  num2;
        

        printValueScreen(operator, '')
        selectnumber = operator;
        selectnumber2 = "";
        selectoperator = "";  
}

function printValueScreen(v, o){
    const operator = document.querySelector(".panel .panel-operator span");
    const number = document.querySelector(".panel .panel-number span");

    if(v != null){
        number.outerHTML;
        number.innerHTML = v;
    }
    if(o != null){
        operator.outerHTML;
        operator.innerHTML = o;
    }
    
}