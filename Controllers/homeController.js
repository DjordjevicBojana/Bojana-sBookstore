myApp.controller('homeCTRL', function ($scope, $filter, $http) {
    $http.get("../data/contentBooks.json")
         .then(function (response) {
                       
            $scope.books = response.data.records;
    
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
       });  //http
})  //controller

  
.filter('startFrom', function () {
    return function (input, start) {
        if (!input || !input.length) {
            return;
        }
        start = +start;
        return input.slice(start);
    };
}); //filter
