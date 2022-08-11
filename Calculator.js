let screenInput=document.getElementById("screen");
var screenvalue=screenInput.value;

function numbers(args)
{
    // alert();
    num=args.id;
    document.getElementById("screen").value+=num;
    flagOp=0;

}
function screenClear()
{
    
   document.getElementById("screen").value="";

}
function calculate()
{
 
    try
    {
        let calculation=eval(screenInput.value);
        screenInput.value=calculation;
    }
    catch(e)
    {
        screenInput.value="error";
    }

}

let flagDec=0;
let flagOp=0;
function operators(op)
{
    // alert();
    screenvalue=screenInput.value;

    if(op=="+"||op=="-"||op=="*"||op=="/")
    {
        flagOp++;
      if(flagOp==1 && screenvalue.trim()!="")
      {
        if(op=="*")
        {
            document.getElementById("screen").value+="*";
      
            // screenvalue+="+";
        }
        if(op=="-")
        {
            document.getElementById("screen").value+="-";
        }
        if(op=="+")
        {
            document.getElementById("screen").value+="+";
        }
        if(op=="/")
        {
            document.getElementById("screen").value+="/";
        }
        flagDec=0;
      }
     
    }
    else
    {
        flagOp=0;
    }
    
}
function dot()
{
    flagDec++;
    if(flagDec==1)
    {
        document.getElementById("screen").value+=".";
    }
    else
    {
        return;
    }
}