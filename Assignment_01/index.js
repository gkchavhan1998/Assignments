$(document).ready(function () {
  var table = $("#example").DataTable({
    ajax: "https://reqres.in/api/users?page=1",
    columns: [
      { data: "id" },
      { data: "first_name" },
      { data: "last_name" },
      { data: "email" }
    //   {
    //     targets: -1,
    //     data: null,
    //     defaultContent:
    //       "<a href='/employee.html'><button>More Info</button></a>",
    //   },
    ],
  });
//   $("#example tbody").on("click", "button", function () {
//     var data = table.row($(this).parents("tr")).data();
//     localStorage.setItem("newId", data.id);
//     // alert(data.first_name + "'s id is: " + data.id);
//   });

  //this below code makes row clicable
  $(".dataTable").on("click", "tbody tr", function () {
    var rowdata = table.row(this).data();
    console.log("API row values : ", table.row(this).data());
    localStorage.setItem("newId", rowdata.id);
    console.log("id : " + rowdata.id);
    console.log("local storage id : "+ localStorage.getItem("newId"));
    $(location).attr("href", "/employee.html");

  });

  //trial code below
  //   $("tbody").click(function () {
  //     console.log("you clicked", this);
  //   });
});
