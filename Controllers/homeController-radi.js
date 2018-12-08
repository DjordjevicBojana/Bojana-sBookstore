myApp.controller('homeCTRL', function ($scope,$filter) {
            
    var books = [
    //$scope.books = [    
            { id: 1, name: "Вукодав", description: "", authorFname: "Марија", authorLname: "Семјонова", yearPublished: "", award: "", pic: "img/books/vukodav_marija_semjonova.jpg", genre: "епска фантастика", price: "850", crc: "RSD", inStock: 2, likes: 3, dislikes: 1 },
            { id: 2, name: "Живот Светог Саве", description: "", authorFname: "владика Николај", authorLname: "Велимировић", yearPublished: "", award: "", pic: "img/books/zivot_svetog_Save.jpg", genre: "духовна литература", price: "800", crc: "RSD", inStock: 3, likes: 5, dislikes: 0 },
            { id: 3, name: "Касандрин пут", description: "Радња Књиге збива се у блиској будућности. После еколошке катастрофе европске државе су се ујединиле под влашћу предедника који себе назива 'спаситељ и месија'", authorFname: "Јулија", authorLname: "Вознесенска", yearPublished: "2002", award: "", pic: "img/books/kasandrin_put.jpg", genre: "фантастика", price: "820", crc: "RSD", inStock: 0, likes: 5, dislikes: 0 },
            { id: 4, name: "Ланселотово ходочашће", description: "Полазећи на далеко острво Јерусалим са Планећанином Лансом, који жели да га 'Месија' исцели, почињемо да другачије схватамо познате истине - љубав, веру, доброту..", authorFname: "Јулија", authorLname: "Вознесенска", yearPublished: "2004", award: "", pic: "img/books/lanselotovo_hodocasce.jpg", genre: "фантастика", price: "820", crc: "RSD", inStock: 1, likes: 4, dislikes: 1 },
            { id: 5, name: "Baka gangster", description: "Upoznajte Benovu baku. Ona je vrlo, vrlo tipična baka: ima sedu kosu, debele naočare,veštačke zube,korišćena maramica viri joj iz đžepa i ona..ona je međunarodni kradljivac dragulja! ", authorFname: "Dejvid", authorLname: "Valijams", yearPublished: "2011", award: "", pic: "img/books/baka_gangster.jpg", genre: "dečija knjiga", price: "650", crc: "RSD", inStock: 10, likes: 6, dislikes: 1 },
            { id: 6, name: "Tras!", description: "U jednoj Pračetovoj priči, sve se može preobraziti u nešto drugo, šala u dubokoumno zapažanje, činjenice našeg društva u živopisnu maštariju..", authorFname: "Teri", authorLname: "Pračet", yearPublished: "2005", award: "", pic: "img/books/tras_teri_pracet.jpg", genre: "фантастика", price: "750", crc: "RSD", inStock: 1, likes: 4, dislikes: 1 },
            { id: 7, name: "wBook7", description: "description7", authorFname: "Author7F", authorLname: "Author7L", yearPublished: "2018", award: "no", pic: "img/books/no_image.jpg", genre: "genre7", price: "500", crc: "RSD", inStock: 1, likes: 4, dislikes: 1 },
            { id: 8, name: "wBook8", description: "description8", authorFname: "Author8F", authorLname: "Author8L", yearPublished: "2018", award: "no", pic: "img/books/no_image.jpg", genre: "genre8", price: "500", crc: "RSD", inStock: 1, likes: 4, dislikes: 1 },
            { id: 9, name: "wBook9", description: "description9", authorFname: "Author9F", authorLname: "Author9L", yearPublished: "2018", award: "no", pic: "img/books/no_image.jpg", genre: "genre7", price: "500", crc: "RSD", inStock: 1, likes: 4, dislikes: 1 }
    ];
    $scope.books = books;

    $scope.incrementLikes = function (book) {
        book.likes++;
    };
    $scope.incrementDislikes = function (book) {
        book.dislikes++;
    };
    $scope.sortColumn = "id";

    $scope.getInfo = function (bookInfoName, bookInfoAuthor, bookInfoDescription, bookInfoPrice) {
        $scope.bookInfoName = bookInfoName;
        $scope.bookInfoAuthor = bookInfoAuthor;
        $scope.bookInfoDescription = bookInfoDescription;
        $scope.bookInfoPrice = bookInfoPrice;
    };

    //------pagination--------
    var numPages;
    $scope.totalItems = $scope.books.length;
    $scope.currentPage = 0;
    $scope.pageSize = 3;

    $scope.pages = [];
    $scope.q = '';




    $scope.setPage = function (pageNo) {

        $scope.currentPage = pageNo;
        document.getElementById("liNext").className = "enabled";
        document.getElementById("liPrev").className = "enabled";

        if (pageNo === 1) {
            document.getElementById("liPrev").className = "disabled";
        };
        if (pageNo === numPages) {
            document.getElementById("liNext").className = "disabled";
        }
    };

    $scope.getData = function () {
        return $filter('filter')($scope.books, $scope.q);
    };



    numPages = Math.ceil($scope.getData().length / $scope.pageSize);
    $scope.numPages = numPages;

    for (var i = 0; i < $scope.numPages; i++) {
        $scope.pages.push(i);
    };


    $scope.nextPage = function (currentPage) {
        if (currentPage >= numPages - 1) {
            document.getElementById("liNext").className = "disabled";
        }
        document.getElementById("liPrev").className = "enabled";
    };

    $scope.prevPage = function (currentPage) {
        if (currentPage <= 0) {
            document.getElementById("liPrev").className = "disabled";
        }
        document.getElementById("liNext").className = "enabled";
    };



    $scope.$watch('q', function (newValue, oldValue) {
        if (oldValue !== newValue) {


            $scope.currentPage = 0;

            numPages = Math.ceil($filter('filter')($scope.books, $scope.q).length / $scope.pageSize);

            $scope.numPages = numPages;

            $scope.pages = [];
            for (var i = 0; i < numPages; i++) {
                $scope.pages.push(i);
            };
            if (numPages === 0 || numPages === 1) {
                document.getElementById("liPrev").className = "disabled";
                document.getElementById("liNext").className = "disabled";
            };


        }
    }, true);
           

})
   .filter('startFrom', function() {
        return function(input, start) {
         start = +start;
         return input.slice(start);
        };
});
