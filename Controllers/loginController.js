myApp.controller('loginCTRL', function ($scope, $location) {

    var users = { userID: 1, userName: "bojana", password: "bojana3" };
    $scope.users = users;

    $scope.checkUP = function (uname, passw) {

        if (users.userName == uname) {
            if (users.password == passw) {
                $scope.error = "";
                $scope.username = "";
                $scope.password = "";
                modalL.style.display = "none";

                $location.path("/adminPage");
            } else {
                $scope.error = "Wrong password!";
            }
        } else {
            $scope.error = "Wrong username!";

        }

    };
                                      
    // Get the modal
    var modalL = document.getElementById('loginModal');

    // Get the button that opens the modal
    var btnL = document.getElementById("loginBtnopen");

    // Get the <span> element that closes the modal
    var spanL = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btnL.onclick = function () {
        modalL.style.display = "block";
        $scope.error = "";
    };

    // When the user clicks on <span> (x), close the modal
    spanL.onclick = function () {

        modalL.style.display = "none";
        document.getElementById("myLoginForm").reset();

    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modalL) {

            modalL.style.display = "none";
            document.getElementById("myLoginForm").reset();
        }
    };
});
