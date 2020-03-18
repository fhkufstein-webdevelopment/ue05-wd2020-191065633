$(document).ready(function() {

    var userListBody = $('.userList tbody');

    //@todo store and somehow update the current number of users
        sessionStorage.setItem("user","meinName");
        document.getElementById("result").innerHTML=sessionStorage.getItem("user");

    $('.needs-validation').submit(function(event) {

        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }

        //@todo
        //1. get values
        //2. create a new element
        //3. somehow add them to userListBody
        //4. update number of current users
        //5. clear entries from the form
        //6. maybe do something else... :-)

        //your code follows here
        //1
        document.getElementById("user").value="meinName";

        //2
        onclick.apply("meinName","userList");

        //3
        document.getElementsByTagName("button");

        //4
        ontimeupdate.apply("user",userListBody);

        //5
        userListBody.reset();

        return false;
    });


    $('.deleteTrigger').click(function() {
        //@todo
        //1. remove current user from dom
        //2. update number of current users

        //your code follows here

        //1
        removeEventListener("user",onclick,userListBody);

        //2
        ontimeupdate.apply("user",userListBody);


    });

    //maybe some code follows here

});