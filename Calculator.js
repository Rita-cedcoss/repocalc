let screenInput=document.getElementById("screen");
buttons=document.querySelectorAll('button');

let screenValue='';
// var flagdt=0;
// function dot()
// {
//         flagdt++;
//     //    console.log(screenValue[i]);
//         if(flagdt==1)
//         {
//             screenValue+=".";
//         } 
//         else
//         {
//             return;
//         }  


// }


for(item of buttons)
{
  item.addEventListener('click' ,(e)=>{

    buttonText=e.target.innerText;
   
    if(buttonText=='X')
    {
        buttonText='*';
        screenValue+=buttonText;
        screenInput.value= screenValue;

    }
    else if(buttonText=='C')
    {
        screenValue=" ";
        screenInput.value= screenValue;
        // screenInput.value=" ";
    }
 
    else if(buttonText=='=')
    {
        screenInput.value=eval(screenValue);
        screenValue=screenInput.value;
       

    }
  
    else 
    {
        screenValue+=buttonText;
        screenInput.value= screenValue;
    }
   





} )

}
