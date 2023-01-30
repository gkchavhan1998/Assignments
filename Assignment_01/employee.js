fetch('https://reqres.in/api/users?page=1')
.then(res=>{
    return res.json();
}).then(data =>{
    console.log(data);
    data.data.forEach(user => {
        // if(user.id==localStorage.getItem("empid"))
        if(user.id==localStorage.getItem("newId")){
            document.getElementById("profile-img").setAttribute("src",user.avatar);
            document.getElementById("emp-id").innerHTML = `<b>Id : </b>${user.id}`
            document.getElementById("emp-fname").innerHTML = `<b>First Name : </b>${user.first_name}`
            document.getElementById("emp-lname").innerHTML = `<b>Last Name : </b>${user.last_name}`
            document.getElementById("emp-email").innerHTML = `<b>Email : </b>${user.email}`
            flag=true;
        }
    });
}).catch(error => console.log(error));