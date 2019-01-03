import React from 'react';
class Task extends React.Component {
    render () {
        return <div id="taskItem" class="container">
        <div class="row">
            <div id="firstTask" class="col-sm"> A first task </div>
            <div class="col-sm">
                <input id="doneButton" type="button" value="done"/>
                <input id="deleteButton" type="button" value="delete"/>
            </div>
        </div>
        </div>
    }
}

export default Task;