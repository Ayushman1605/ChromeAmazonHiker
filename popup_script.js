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
  };
}]);



