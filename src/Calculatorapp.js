import { useRef, useState } from "react";
import  './Calstyle.css';

function Calculatorapp(){
    var [count,setCount]=useState('');
    var inpt=useRef();

                var abc=()=>{
                    var space=inpt.current.value;
                    var cal=eval(space)
                  setCount(cal) 
                  console.log(count)
                }

                var xyz=()=>{
                    setCount(count.slice(0,count.length-1))         
                }


    return(
        <div>
             <h1>Calculator App</h1>
         <div className="one">
             <center>
            <input type="text" name="fnf" value={count} ref={inpt}/><br></br><br></br>
            <div className="two">
            <button  className="AA" onClick={()=>{setCount(count+'1')}}>1</button>
            <button  className="BB" onClick={()=>{setCount(count+'2')}}>2</button>
            <button  className="CC" onClick={()=>{setCount(count+'3')}}>3</button><br></br>
            <button  className="DD" onClick={()=>{setCount(count+'4')}}>4</button>
            <button  className="EE" onClick={()=>{setCount(count+'5')}}>5</button>
            <button  className="FF" onClick={()=>{setCount(count+'6')}}>6</button><br></br>
            <button  className="GG" onClick={()=>{setCount(count+'7')}}>7</button>
            <button  className="HH" onClick={()=>{setCount(count+'8')}}>8</button>
            <button  className="II" onClick={()=>{setCount(count+'9')}}>9</button><br></br>
            <button  className="KK" onClick={()=>{setCount(count+'+')}}>+</button>
            <button  className="JJ" onClick={()=>{setCount(count+'0')}}>0</button>
            <button  className="LL" onClick={()=>{setCount(count+'-')}}>-</button><br></br>
            <button  className="MM" onClick={()=>{setCount(count+'*')}}>*</button>
            <button  className="NN" onClick={()=>{setCount(count+'%')}}>%</button>

            <button  className="OO" onClick={abc}>=</button><br></br>
            <button  className="PP"onClick={xyz} style={{height:"40px",width:"100px"}}>back</button>
            <button  className="QQ"onClick={()=>{setCount('')}} style={{height:"40px",width:"100px"}}>clear</button>
            </div>
            </center>
        </div>
    </div> 
    )
}
export default Calculatorapp;