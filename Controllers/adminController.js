myApp.controller('adminCTRL', function ($scope) {
                  
    $scope.message = "Administrator's Page";

   
    var newBooks = [
        //$scope.books = [    
     { id: 1, name: "Вукодав", description: "", authorFname: "Марија", authorLname: "Семјонова", yearPublished: "", award: "", pic: "img/books/vukodav_marija_semjonova.jpg", genre: "епска фантастика", price: "850", crc: "RSD", inStock: 2, likes: 3, dislikes: 1 },
     { id: 2, name: "Живот Светог Саве", description: "", authorFname: "владика Николај", authorLname: "Велимировић", yearPublished: "", award: "", pic: "img/books/zivot_svetog_Save.jpg", genre: "духовна литература", price: "800", crc: "RSD", inStock: 3, likes: 5, dislikes: 0 },
     { id: 3, name: "Касандрин пут", description: "Радња Књиге збива се у блиској будућности. После еколошке катастрофе европске државе су се ујединиле под влашћу предедника који себе назива 'спаситељ и месија'", authorFname: "Јулија", authorLname: "Вознесенска", yearPublished: "2002", award: "", pic: "img/books/kasandrin_put.jpg", genre: "фантастика", price: "820", crc: "RSD", inStock: 0, likes: 5, dislikes: 0 },
     { id: 4, name: "Ланселотово ходочашће", description: "Полазећи на далеко острво Јерусалим са Планећанином Лансом, који жели да га 'Месија' исцели, почињемо да другачије схватамо познате истине - љубав, веру, доброту..", authorFname: "Јулија", authorLname: "Вознесенска", yearPublished: "2004", award: "", pic: "img/books/lanselotovo_hodocasce.jpg", genre: "фантастика", price: "820", crc: "RSD", inStock: 1, likes: 4, dislikes: 1 },
     { id: 5, name: "Baka gangster", description: "Upoznajte Benovu baku. Ona je vrlo, vrlo tipična baka: ima sedu kosu, debele naočare,veštačke zube,korišćena maramica viri joj iz đžepa i ona..ona je međunarodni kradljivac dragulja! ", authorFname: "Dejvid", authorLname: "Valijams", yearPublished: "2011", award: "", pic: "img/books/baka_gangster.jpg", genre: "dečija knjiga", price: "650", crc: "RSD", inStock: 10, likes: 6, dislikes: 1 },
     { id: 6, name: "Tras!", description: "U jednoj Pračetovoj priči, sve se može preobraziti u nešto drugo, šala u dubokoumno zapažanje, činjenice našeg društva u živopisnu maštariju..", authorFname: "Teri", authorLname: "Pračet", yearPublished: "2005", award: "", pic: "img/books/tras_teri_pracet.jpg", genre: "фантастика", price: "750", crc: "RSD", inStock: 1, likes: 4, dislikes: 1 }
    ];

    $scope.newBooks = newBooks;

    var count = $scope.newBooks.length;          //Object.keys(newBooks).length;
    var bookFound = false;
    var countNew = count + 1;
      
    $scope.bookID = count + 1;
    
    
    $scope.validateEntry = function () {
        var i;
        for (i = 0; i < count; i++) {
            if (newBooks[i].name === $scope.bookName) {
                alert("You alredy have a book named like that.");
                $('.my-double-reset').val('');

                bookFound = true;
            } else {
                bookFound = false;

            }
        }

        if (bookFound === false) {
            
            newBooks.push({ id: $scope.bookID, name: $scope.bookName, description: $scope.bookDesc, authorFname: $scope.bookAuthorFN, authorLname: $scope.bookAuthorLN, yearPublished: $scope.yearPubl, award: "", pic: $scope.bookAuthorLN, genre: $scope.bookGenre, price: $scope.bookPrice, crc: $scope.bookCrc, inStock: $scope.inStock, likes: 0, dislikes: 0 });
            alert("Book succesfully added!");
            countNew += 1;
            modalAdmin.style.display = "none";
            $('.my-reset-field').val('');
            
            $scope.bookID = countNew;
           

        }
        
    };
    // Get the modal
    var modalAdmin = document.getElementById('myModalAdmin');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closeAdmin")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function () {
        modalAdmin.style.display = "block";

    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modalAdmin.style.display = "none";
        $('.my-reset-field').val('');

    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modalAdmin) {
            modalAdmin.style.display = "none";
            $('.my-reset-field').val('');

        }
    };

});

