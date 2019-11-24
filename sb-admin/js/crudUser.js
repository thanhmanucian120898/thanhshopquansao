function getUser(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/users",
        "method": "GET",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          "Postman-Token": "5a82167f-12c5-42b7-b775-f67b68b32396"
        },
        "data": {
         
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}
var btnget=document.getElementById('btnget');
btnget.addEventListener('click',getUser);
function listUser(){    
  $(document).ready(function(){
    $.ajax({
        url: "http://localhost:3000/users",
        dataType: 'json',
        type: 'get',
        cache:false,
        success: function(data){
            /*console.log(data);*/
            var event_data = '';
            $.each(data, function(index, value){
                /*console.log(value);*/
                event_data += '<tr>';
                event_data += '<td>'+value.id+'</td>';
                event_data += '<td>'+value.name+'</td>';
                event_data += '<td>'+value.email+'</td>';
                event_data += '<tr>';
            });
            $("#list_table_json").append(event_data);
        },
        error: function(d){
            /*console.log("error");*/
            alert("404. Please wait until the File is Loaded.");
        }
    });
});
}
listUser();
var iduser=document.getElementById('iduser');
var nameser=document.getElementById('name');
var emailser=document.getElementById('email');
function addUser(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/users",
        "method": "POST",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          "Postman-Token": "2428d281-67e0-4c37-8a8e-864078662dd5"
        },
        "data": {
            "id": iduser.value ,
            "email": emailser.value,
            "name": nameser.value
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}
var btnadd=document.getElementById('btnadd');
btnadd.addEventListener('click',addUser);
function updateUser(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/users/"+iduser.value,
        "method": "PATCH",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          "Postman-Token": "a8d69c41-caed-4c15-9fe4-5b61132c95f4"
        },
        "data": {
            "id": iduser.value ,
            "email": emailser.value,
            "name": nameser.value
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}
var btnupdate=document.getElementById('btnup');
btnupdate.addEventListener('click',updateUser);
//DELETE
function deleteUser(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/users/"+iduser.value,
        "method": "DELETE",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          "Postman-Token": "7ffb9243-8acf-4e66-8040-242a73664fea"
        },
        "data": {
           
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}
var btndelete=document.getElementById('btndel');
btndelete.addEventListener('click',deleteUser);
