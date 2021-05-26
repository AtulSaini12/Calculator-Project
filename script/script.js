var buttons = document.getElementsByClassName("buttons");
var display = document.getElementById("display");

display.textContent="0";

var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(data){
    return data=="+"||data=="-"||data=="*"||data=="/";
}

for(var i=0; i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        
        var text = display.textContent.trim();
        var value = this.getAttribute('data-value');

        if(isOperator(value)){
            operator=value;
            operand1 = parseFloat(text);
            display.textContent="";
        }
        else if(value=="ac"){
            display.textContent = "0";
            operand1=0;
            operand2=null;
            operator=null;
        }
        else if(value=="sign"){
            operand1=parseFloat(text);
            operand1 = (-1)*operand1;
            display.textContent=operand1;
        }
        else if(value=="%"){
            operand1 = parseFloat(text);
            operand1 = operand1/100;
            display.textContent = operand1;
        }
        else if(value=="."){
            if(!text.includes('.')){
                display.textContent = text+'.';
            }

        }
        else if(value=="="){
            operand2 = parseFloat(text);
            var result = eval(operand1 +' '+ operator + ' ' + operand2);
            if(result){
                operand1 = result;
                operand2 = null;
                operator = null;
                display.textContent = result;
            }
        }else{
            if(text=="0"){
                display.textContent=value;
            }
            else{display.textContent = display.textContent + value;
            }
        
        }
    });
}