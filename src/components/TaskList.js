import React from 'react';
import Task from './Tasks'; 
class TaskList extends React.Component {
    render() {


        return (
           <div>
                {
                    this.props.tasks.map((task, i) => 
                        <Task taskDescription={task.description} key={i} style = {styles.taskItem}/>
                        
                    )
                    
                }
            </div>
        );
    }

}

const styles = {
    taskItem: {
        color:"pink",
        backgroundColor: "transparent",
        fontSize: "20px",
        fontFamily: "Georgia",
        textAlign: "center"
    }
}

export default TaskList; 