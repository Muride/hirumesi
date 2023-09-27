// JavaScript Document
var hirumeshi = [];
var random = Math.floor( Math.random() * 6 );

$(function(){
	$("#choose").click(function(){
		hirumeshi.push($("#amount1").val());
		hirumeshi.push($("#amount2").val());
		hirumeshi.push($("#amount3").val());
		hirumeshi.push($("#amount4").val());
		hirumeshi.push($("#amount5").val());
		hirumeshi.push($("#amount6").val());
		$("#result").text(hirumeshi[random]);
		
	});
});
	