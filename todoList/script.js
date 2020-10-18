document.addEventListener('DOMContentLoaded', function() {
    
    /*
        1. Add-Button is disabled when input Field is empty
        2. Adds the text from the input field to the list when the "Add Task"-btn is clicked
        3. Removes a selected List-item (li)
    */
    function addAndRemove(){
        if(document.getElementById('inputTask').value == ""){
            document.getElementById('addTask').disable = true;
        } else {
            let ul = document.getElementById('taskList');
            let li = document.createElement('li');
            let task = document.getElementById('inputTask').value;
            li.appendChild(document.createTextNode(task));
            ul.appendChild(li);
            document.getElementById('inputTask').value = "";
            li.onclick = function(){
                this.parentNode.removeChild(this);
            }
        }
    }
   
    //When the Add-Task Button is clicked the addAndRemove-function is called
    document.getElementById('addTask').addEventListener("click", addAndRemove);

    //The Enter Button gets the same function as the Add Task Button
    document.getElementById('inputTask').addEventListener("keypress", function(event){
        if(event.key == "Enter"){
            addAndRemove();
        }
    });

 



});

/*
<i class="far fa-circle"></i>
<i class="far fa-check-circle" style="color: green;"></i>
*/