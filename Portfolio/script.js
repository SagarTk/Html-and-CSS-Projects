const dynamicId = document.querySelector(".desig");

const arr = ["Frontend Developer..." , "Competitive Programmer..." , "Human Being... :) "]
let letterInd = 0 , arrInd = 0 ;

function display(item){

    if(letterInd == item.length) 
    {
        clearLetters(item) ;
    }
    else if(letterInd < item.length){

        dynamicId.textContent += item.charAt(letterInd++) ;
        setTimeout(()=>{
           display(item)
        } , 300)
    }

}

function clearLetters(str){
    if(letterInd > -1){
        const x = str.slice(0 , str.length-1) ;
        letterInd-- ;
        dynamicId.textContent = x ;
        setTimeout(()=>{
            clearLetters(x) ;
        } , 300)
    }
    else{
        arrInd++ ;
        if(arrInd == 3)  arrInd=0 ;
        display(arr[arrInd]) ;
    }
}

display(arr[0]) ;