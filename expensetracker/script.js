document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('addButton').addEventListener("click", addExpense);
    document.getElementById('amount').addEventListener("keypress", pressEnter);
    
    function addExpense(){
        let description = document.getElementById('description').value;
        let date = document.getElementById('date').value;
        let amount = document.getElementById('amount').value;

        if(description == "" || date == "" || amount == ""){
            alert("input missing")
        } else {
            let table = document.getElementById('table');
            let row = table.insertRow();

            let dateCell = row.insertCell();
            let descriptionCell = row.insertCell();
            let amountCell = row.insertCell();
            let removeCell = row.insertCell();
            

            descriptionCell.textContent = description;
            dateCell.textContent = date;
            amountCell.textContent = parseFloat(amount).toFixed(2) + " €";
            removeCell.innerHTML = '<i class="fas fa-trash-alt" ></i>';
            amountCell.classList.add("text-right");
            removeCell.classList.add("text-center");

            document.getElementById('description').value = "";
            document.getElementById('amount').value = "";

            removeCell.onclick = function(){
                this.closest("tr").remove();
                totalAmount();
            }
            totalAmount();
        }
        function totalAmount(){
            
            let ttl = 0;

            for(let i = 0; i <= table.rows.length-1; i++){
                ttl += parseFloat(table.rows[i].cells[2].textContent);
            }

            document.getElementById('totalAmount').textContent = ttl.toFixed(2) + " €";
            document.getElementById('description').focus();
        }
    }

    function pressEnter(event){
        if(event.key == "Enter"){
            addExpense();
        }
    }






});
