import react,{useState} from "react"
function Timer(){
    const [count,setCount]=useState(0)
    let date=new Date()
    let dayArr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    let days=date.getDay()
    console.log(days)
    let day=""
    dayArr.forEach((val,ind)=>{
        return ind===days?day=val:null
    })
    setInterval(function(){
        setCount(count+1)
    },1000)
       return(
           
           <div className="timerStyle">
        <span >{day} |  {date.getHours()} hr| {date.getMinutes()} Mn|  {date.getSeconds()} s</span>
        </div>
       )
       
}
export default Timer