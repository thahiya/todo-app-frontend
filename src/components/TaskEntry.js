import React from 'react';

class TaskEntry extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            taskDescription: ""
        };

        //Event binding functions
        this.onSavedClicked = this.onSavedClicked.bind(this);
        this.onTaskTextFieldUpdated = this.onTaskTextFieldUpdated.bind(this)
    }

    // This funtion fires when the save button is clicked
    onSavedClicked () {

        const taskToBeAdded = {
            id: (Math.random () * 100), 
            description: this.state.taskDescription,
            complete: false
        };

        this.props.onSaveTaskHandler(taskToBeAdded);

        // Usability to clear out text field after adding
        this.setState ({
            taskDescription: ""
        });
    }

    // This function is fired when the text box is changed
    onTaskTextFieldUpdated(event) {
        const description = event.target.value;
        
        this.setState({
            taskDescription: description 

        });
    }

    render () {
        return ( 
        <div className="row">
            <div className="col">
                <input type="text" value={this.state.taskDescription} onChange={this.onTaskTextFieldUpdated}/>
            </div>
            <div className="col">
                <input type="button" value="Save" onClick={this.onSavedClicked}/>
            </div>
         </div>
            );
        }
    
    }
    


export default TaskEntry;