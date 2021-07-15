// console.log("I am the popup");

let amazonextension = angular.module("amazonextension", ['ui.router']);
amazonextension.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('login', {
        url: '/login',
        templateUrl: '/login.html',
        controller: 'logger'
        });
    $urlRouterProvider.otherwise('login');
}]);
amazonextension.controller('logger',function(){})
var ID;
var Password;
var userdata={
  ID,
  Password
};
amazonextension.controller('logger',['$scope',function($scope){
  $scope.username='Ayushman';
  $scope.password='password';
  
  $scope.makedata=function(usernam,passwor){
    $scope.username=usernam;
    userdata.ID=usernam;
    userdata.Password=passwor;
    console.log(userdata);
    chrome.runtime.sendMessage(userdata);
  };
}]);

// let submission = function(){
//   let userdata = new Object();
//   userdata.email = document.getElementById("email").value;
//   userdata.password = document.getElementById("password").value;
//   console.log(userdata);
//   $("#clickBtn").on("click",function(e){
//       e.preventDefault();
//   });
// };
// document.getElementById("Clickbtn").addEventListener("click", submission);

