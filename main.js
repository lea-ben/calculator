let arr = [];

function my_f(sign){
   
        arr.push(sign);
        //  console.log (arr); 
        // let str = arr.join ("+");
        console.log(arr);
}

function calculate (){
     let str = arr.join('');
     console.log(str);

    
let calcul= eval(str);
alert(calcul);

}

function reset (){ 

    arr = [""]; 
}

// var calculateString = ''; 
// var calculateDisplay = document.getElementById("display");

// function my_f(btn) {

//     calculateString = calculateString + btn;
//     calculateDisplay.innerHTML = calculateDisplay;
//     console.log (calculateString); 
// } 

// function results () { 

//     var calculateResultat = eval(calculateString); 
//     calculateDisplay.innerHTML = calculateResultat;
//     console.log(calculateString + "=" + calculateResultat);
//     calculateString = calculateResultat;
// }
// function clear () { 

//     alert ("clear");
// }
