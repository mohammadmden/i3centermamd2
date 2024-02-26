import TodoItem from "./TodoItem";
const TodoForm = () => {
    const todo = [
        { name: "task1", priority: "1" },
        // { name: "task2", priority: "2" },
    ];
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "99vw",
                height: "70vh",
                border: "6px duble black",
                borderRadius: "35px",
                minHeight: 300,
                textAlign: "center",
                backgroundImage: "url('vecteezy_desktop-source-code-and-wallpaper-by-coding-and-programming_3343387.jpg')",
                backgroundSize:"cover",
                fontSize: "2rem",
                color: "white",

            }}
        >

            <h4 >My Todo Form</h4>
            <form action=""
                style={
                    {
                        
                        // display:"flex",
                        // flexdirection: "column",
                    }
                }

            >

                <input type="text" name="fname" placeholder="task" id="removeelement"
                    style={
                        {
                            display: "block",
                            width: "30rem",
                            height: "1.3rem",
                            
                            
                            // display:
                            // flexdirection: "column",

                        }
                    }

                />
                 <input type="text" name="fname" placeholder="task" id="colorstyle"
                    style={
                        {
                            display: "block",
                            width: "30rem",
                            height: "1.3rem",
                            marginTop:"1.4rem",
                            // display:
                            // flexdirection: "column",

                        }
                    }

                />
            </form>
            
{todo.map((element, index) => (
        <TodoItem piorit={element.priority} name={element.name} key={index} />
      ))}



        </div>

    );
};
export default TodoForm