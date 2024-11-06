const form = document.querySelector('form');


form.addEventListener("submit",(event) =>{
    event.preventDefault();
    const data = new FormData(form);
    // data
    const photo = data.get("photo");
    const firstName = data.get("firstname");
    const lastName = data.get("lastname");
    const email = data.get("email");
    const hire = data.get("hire_date");

    
    const newData = document.querySelector("#employeeList");

    // container row
    const row = document.createElement("tr");

    // button
    const button = document.createElement("button");
    button.textContent = "Delete";

    button.addEventListener("click",()=>{
        let text = "Do you want to delete the employee?";
        if (confirm(text) == true){
            row.remove();
        }else{
            text = "Operation Canceled";
        }  
    })

    // td for the button
    const td = document.createElement("td");
    td.append(button);
    


    row.innerHTML = `
        <td><img src="../images/${photo["name"]}"></td>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${hire}</td>`
    newData.appendChild(row);

    row.append(td);

    form.reset();
})

