$(document).ready(function(){
    $('#ch3form').submit(function(){
        if ($('input[name="fruit"]:checked').is(":checked")) {
            return true
        }
        alert("You must pick a fruit!");
            return false;
    })
    $('#ch3form').submit(function(){

       if ($('input[name="standing"]:checked').is(":checked")) {
            return true
        }
        alert("You must pick a standing!");
            return false;
    })
})

//
// ch3form.onsubmit = function() {
//     var fruit =
//     document.querySelectorAll('input[name="fruit"]')
//
//
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//
//     alert("You must pick a fruit!")
//     return false;





    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;

    // alert("You must pick a fruit!")
    // return false;
