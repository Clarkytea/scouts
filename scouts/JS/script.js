/*
  A General Javascript file for basic utilites

  Including : Navigation slider, Carousel and Contact Form scipts

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


    //Owl Carousel customisation
    // Extending owl carousel's script

    $("#owl-example").owlCarousel({
    items : 3,
    itemsCustom : false,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,

    pagination: true,
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,
    //Play automatically - true/false -
    autoPlay : true,
    stopOnHover : true,
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
              feedback = JSON.parse(data);
              console.log(feedback.message);
              Materialize.toast(feedback.message, 4000)
            })
            .fail(function(data){
              feedback = JSON.parse(data);
              Materialize.toast(feedback.message,4000)
            });
        }
        else{
            Materialize.toast('Error!', 4000)
        }
    }
});
