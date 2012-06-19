$(function() {

  $("#get_name").click(function(){
    $("#subject01_result").html($("#yamada_name").html());

  });

  $("#add_sakurako").click(function(){
    $('#member_list').prepend('<li>櫻子</li>');
  });

  $("#add_himawari").click(function(){
    $('#member_list').prepend('<li>向日葵</li>');
  });



});;
