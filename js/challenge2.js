$("#useBilling").change(function(){
	var billing = $("#billing").val()
	var home = $("#home")

	if (this.checked) {
		console.log(billing)
		$("#home").val(billing);
		$("#home").prop("disabled", true);
	} else {
		$("#home").val('');
		$("#home").prop("disabled", false);
	}
});



//
// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	let billing = document.querySelector("#billing");
//
// 	if (this.checked){
// 		home.value = billing.value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
//
// 	}
