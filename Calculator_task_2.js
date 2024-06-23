// @ts-nocheck
let input = document.getElementById('inputBox');
let buton = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buton);
arr.forEach(button => {
    // @ts-ignore
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
                string = eval(string);
                input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
                string = "";
                input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
                string = string.substring(0,string.length-1);
                input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
});