const TodoForm = () => {
    const todo = [
        { name: "task1", priority: "1" },
        { name: "task2", priority: "2" },
    ];
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                border: "6px duble black",
                borderRadius: "35px",
                minHeight: 300,
                textAlign: "center",
                background: "gray",
                fontSize: "1.5rem",
                color: "black",

            }}
        >

            <h4>My todo</h4>
            <form action=""
                style={
                    {
                        // display:"flex",
                        // flexdirection: "column",
                    }
                }

            >

                <input type="text" name="fname" placeholder="task"
                    style={
                        {
                            display: "block",
                            // display:
                            // flexdirection: "column",

                        }
                    }

                />
            </form>
            {todo.map((element) => (
                <div
                    style={
                        {
                            border:"2px solid black ",
                            padding:"0px 20px",
                            margin:"5px 5px"
                            
                        }
                    }
                >
                    {element.name} {element.priority}
                </div>

            ))};




        </div>

    );
};
export default TodoForm