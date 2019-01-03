import React from 'react';
import Task from './Tasks'; 
class TaskList extends React.Component {
    render () {
        return (
            <div style = {styles.taskItem}> 
            <Task/>
            </div>
        )
    }
 
}
const styles = {
    taskItem: {
        color:"rgb(228, 128, 145)",
        backgroundColor: 'transparent',
        fontSize: '20px',
        fontFamily: "Georgia",
        textAlign: 'center'
    }
}


    export default TaskList;