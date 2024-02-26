


const TodoItem = ({name}) => {




// }
function remove() {
  var element = document.getElementById("removeelement");
  element.parentNode.removeChild(element);
}
function linein(){
document.getElementById("colorstyle").style.textDecoration="line-through";
document.getElementById("colorstyle").style.color="red";


}



  return (
    <div
      style={{
        color: "whitte",
        marginTop: "0.5rem",
        borderBottom:"1px solid white",
        paddingBottom:"10px",
        fontWeight:"bold",
        width:"50",
        height:"50",
        fontSize:"1.4rem",

      }}
    >
        
      

       My Task:
      <button   style={{border:"4px double green",marginLeft:"5px",padding:" 4px 20px",borderRadius:"15px",backgroundColor:"black",color:"green",fontWeight:"600",cursor:"pointer"}}  onClick={remove} >Remove</button>
      <button  style={{border:"4px double red",marginLeft:"5px",padding:"4px 20px",borderRadius:"15px",backgroundColor:"black",color:"red",fontWeight:"600",cursor:"pointer"}} onClick={linein} >Line</button>


    </div>
    
  );

};
export default TodoItem;
