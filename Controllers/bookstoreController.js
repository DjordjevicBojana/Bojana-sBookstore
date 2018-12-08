
var myApp = angular.module("bookstoreModule",["ui.router"])
              .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

                  $urlRouterProvider.otherwise("/home");
                  $stateProvider
                    .state("home", {
                     
                        url:"/home",
                        templateUrl: "Views/home.html",
                        controller: "homeCTRL"
                    })
                   .state("about", {
                      
                       url: "/about",
                       templateUrl: "Views/about.html",
                       controller: "aboutCTRL"
                   })
                    .state("adminPage", {
                        
                        url: "/adminPage",
                        templateUrl: "Views/adminPage.html",
                        controller: "adminCTRL"
                    })
                  .state("upcomingBooks", {
                      
                      url: "/upcomingBooks",
                      templateUrl: "Views/upcomingBooks.html",
                      controller: "upcomingBooksCTRL"
                  })
                  
                  ;
                  $locationProvider.html5Mode(true);
                 //$locationProvider.html5Mode({
                 //    enabled: true,
                 //    requireBase: false
                 //});
                

              }) ; 
                
//app.config ["$locationProvider", "$routeProvider", ($locationProvider, $routeProvider) ->
//  $locationProvider.html5Mode(true)
//  $routeProvider.when "/",
//controller: ["$state", ($state) -> 
//  $state.transitionTo("catalogue.popular")
//]
//]