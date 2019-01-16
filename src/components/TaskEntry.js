import React from 'react';

class TaskEntry extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            taskDescription: "",
            id: ""
        };

        //Event binding functions
        this.onSavedClicked = this.onSavedClicked.bind(this);
        this.onTaskTextFieldUpdated = this.onTaskTextFieldUpdated.bind(this)
    }

    // This funtion fires when the save button is clicked
    onSavedClicked () {

        const id = (Math.random () * 100);

        const taskToBeAdded = {
            id: id, 
            description: this.state.taskDescription,
            complete: false
        };

        this.props.onSaveTaskHandler(taskToBeAdded);

        // Usability to clear out text field after adding
        this.setState ({
            taskDescription: "",
            id: id
        });
    }

    handleDeleteClicked = () => {
        const id = this.state.id;
        this.props.onDeleteTaskHandler(id);
    };
    
    // This function is fired when the text box is changed
    onTaskTextFieldUpdated(event) {
        const description = event.target.value;

        this.setState({
            taskDescription: description 

        });
    }

    render () {
        return ( 
        <div class="input-group mb-3">
            <div className="col">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Enter new task..."
                    aria-label="Enter new task..."
                    aria-describedby="button-addon2"
                    value={this.state.taskDescription}
                    onChange={this.onTaskTextFieldUpdated}
                    style={styles.taskBar}
                />
            </div>
            <div class="input-group-append">
                <input
                    type="button"
                    value="submit"
                    id="button-addon2"
                    onClick={this.onSavedClicked}
                    style={styles.submitButton}
            
                />
            </div>
         </div>
            );
        }

    }

    const styles = {
        submitButton: {
        color:"grey",
        backgroundColor: "transparent",
            fontSize: "18px",
            fontFamily: "arial",
            fontStyle: "bold",
            textAlign: "center"
            },

        }

            

export default TaskEntry; 