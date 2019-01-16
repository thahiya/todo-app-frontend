import React from 'react';

class Task extends React.Component {

    onDeleteClicked (id) {
        this.props.onSaveTaskHandler(id);
    }

    render() {
        return (
            <div className="row" style={styles.taskRow}>
                <div className="col">
                    {this.props.taskDescription}
                </div>
                <div className="col">
                    <input type="button" value="Done" style={styles.doneButton}/>
                </div>
                <div className="col">
                    <input type="button" value="Delete" style={styles.deleteButton}/>
                </div>
            </div>
        );
    }

}

const styles = {
    taskRow: {
        paddingTop: "10px",
        paddingBottom: "10px"
    },

    doneButton: {
        backgroundColor: "rgb(228, 128, 145)",
        border: "2px solid lightgrey",
        borderRadius: "5px",
        fontSize: "19px",
        fontStyle: "bold",
        color: "white"
        },

    deleteButton: {
        backgroundColor: "rgb(228, 128, 145)",
        border: "2px solid lightgrey",
        borderRadius: "5px",
        fontSize: "19px",
        fontStyle: "bold",
        color: "white"
        }
    }

export default Task;