
$(document).ready(function(){

    // Submit burger name event
    $('#newBurgerForm').on('submit', function(event){
       event.preventDefault(); 
       console.log($('#burgerName').val());
        
            const burgerNames = {
                burger_name: $("#burgerName").val().trim(),
                devoured: 0,
            };


            // POST REQUEST
            $.ajax("/create", { 
                type: "POST", 
                data: burgerNames 
                }).then(function(){
                    $("#burgerName").val("");
                    location.reload();
            });
    });


    // Devour event
    $('.eatDaBurgerBtn').on("click", function(event){
        console.log($(this).attr("id"));
        const eatenBurger= $(this).attr("id");

        // PUT REQUEST
        $.ajax("/api/burgers/" + eatenBurger, { type: "PUT" })
            .then(function(){
                location.reload();
        });
    });
});