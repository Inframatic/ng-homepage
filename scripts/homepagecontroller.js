$(document).ready(function(){
   $(".slider_head").click(function(){
     $(this).siblings(".panel").slideToggle("fast");
   });

  $('#toggleaside').click(function(){
    $('aside').toggle("slide");
  });
});