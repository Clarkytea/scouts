/*
  A General Javascript file for basic utilites
  Author - Michael Clark
*/


$(document).ready(function(){

    //- Initialising carousel -
    // Not currently needed - $('.carousel').carousel();

    //RESPONSIVE NAVIGATION MENU ----------

    var clicks = 0;

    $('form').removeAttr("action");

    $(".handle").on("click",function(){

        if (clicks == 0){
           $('#nav ul').css("height","450px");
           clicks += 1;
        }
        else if (clicks == 1){
            $('#nav ul').css("height","0px");
            clicks -= 1;
        }
    });

    // -------------------------------

    // FORM SUBMISSION
    // - NO PAGE RELOADING

    //Listen to form submit button
    $(".btn").on("click",handleForm);

    //handle form input client-side
    function handleForm(){
        var name = $("#name").val();
        var message = $("#text").val();
        var email = $("#email").val();


        if(name != 0){
            $.post("../scouts/php/contact.php",{
              valid: 'valid',
              name: name,
              email: email,
              message: message
            })
            .done(function(data){
              feedback = data;
              console.log(feedback["message"]);
              Materialize.toast(feedback[0].message, 4000)
            })
            .fail(function(data){
              feedback = data;
              Materialize.toast(feedback[0].message,4000)
            });
        }
        else{
            Materialize.toast('Error!', 4000)
        }
    }
});
