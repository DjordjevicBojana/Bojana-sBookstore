myApp.controller('upcomingBooksCTRL', function ($scope) {

    $scope.message = "Upcoming Books";
                  
    var upcomingBooks = [ {id: 1, name: "The Island of adventure", description: "In The Island Of Adventure, Philip, Dinah, Lucy-Ann, Jack, and Kiki the parrot are plunged into danger when they investigate sinister happenings on the mysterious Isle of Gloom. What is the secret of the old castle on the hill, and why are the locals so afraid of it? The children are determined to find out in The Castle Of Adventure.", authorFname: "Blyton", authorLname: "Enid", yearPublished: "1944", award: "no", pic: "img/books/The_island_of_adventure.jpg", genre: "Adventure novel",inStock:1, likes:4, dislikes:1 },
                          {id: 2, name: "The castle of adventure", description: "Jack, Lucy, Dinah and Philip attempt to figure out what is behind the strange goings-on at a ruined castle near Spring Cottage in Scotland where they are on holiday with Dinah and Philip's mother, Aunt Allie.", authorFname: "Enid", authorLname: "Blyton", yearPublished: "1946", award: "no", pic: "img/books/the-castle-of-adventure.jpg", genre: "Adventure novel",inStock:1, likes:4, dislikes:1 },
                          {id: 3, name: "Three musketeers", description: "In 1625 France, d'Artagnan (a poor young nobleman) leaves his family in Gascony and travels to Paris to join the Musketeers of the Guard..", authorFname: "Aleksandar", authorLname: "Dumas", yearPublished: "2018", award: "no", pic: "img/books/three-musketeers.jpg", genre: " Historical and adventure novel",inStock:1, likes:4, dislikes:1 }
                        ];

    $scope.upcomingBooks = upcomingBooks;



});


