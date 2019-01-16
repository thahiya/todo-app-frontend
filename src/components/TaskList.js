import React from 'react';

import Task from './Tasks'; 
class TaskList extends React.Component {
    render() {

        return (
           <div>
                {
                    this.props.tasks.map((task, i) => 
                        <Task taskDescription={task.description} key={i} style={styles.taskItem}/>
                        
                    )
                    
                }
            </div>
        );
    }
}

const styles = {
    taskItem: {
        backgroundColor: "transparent",
        border: "2px solid lightgrey",
        borderRadius: "5px",
        fontSize: "19px",
        fontStyle: "bold",
        color: "white"
        }
    }
    
    export default TaskList; 