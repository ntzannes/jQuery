// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")
//
//     if (name.value.length == 0){
//         document.querySelector("#nameerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }
//
//     if (address.value.length == 0){
//         document.querySelector("#addrerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#addrerrormsg").style.display = "none";
//     }
//
//     return validInput;
// }


$(document).ready(function(){
  $("form").submit(function(event){
    var input = true;
    var name = $("#fullname").val();
    var address = $("#streetaddr").val();
    console.log(name);
    if (name == 0){
      $("#nameerrormsg").css("display", "block");
      event.preventDefault();
      input = false;
    } else {
      $("#nameerrormsg").css("display", "none");
    }
    if (address == 0){
      $("#addrerrormsg").css("display", "block");
      event.preventDefault();
      input = false;
    } else {
      $("#addrerrormsg").css("display", "none");
    }

  return input;

  })
})
