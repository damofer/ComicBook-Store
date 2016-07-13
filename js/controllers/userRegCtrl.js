'use strict'

app.controller('userRegCtrl',['$scope','loginService','$http',function($scope,loginService,$http){

$scope.$on('$viewContentLoaded', function ($evt, data) {
	$scope.loadUsers();
});
	$scope.txt='page Dashboard';
	var nav =document.getElementsByClassName('nav')[0];
	nav.style.display= 'block';

	$scope.logout= function(){
		loginService.logout();
	}

	$scope.toggle =function(){
		document.getElementsByClassName("nav__menu__list")[0].classList.toggle("responsive");
	}


$scope.limit=9;
$scope.users = [
	{"username":"dmogollon", "password":"1234","fullname":"David Mogollon"},
	{"username":"edonado", "password":"1234","fullname":"Erika Donado"},
	{"username":"admin", "password":"1234","fullname":"Administrador del sistema"}

	];

$scope.loadUsers=function(){
	$http.get('data/users.json').success(function(data) {
    $scope.users = data;


	});
}
$scope.addNewUser = function(){
	$scope.current = {};

	modal.style.display = "block";

}
$scope.saveNewUser = function(){
	$scope.users.push($scope.current);

	$scope.saveToJSON($scope.current);
	$scope.current = {};
	$scope.closeModal();
}
$scope.saveToJSON = function(data){
	   jQuery.ajax({
        type : "POST",
        dataType : "json",
        url : 'data/save_users.php',
        data : data

   });

}




// Get the modal
var modal = document.getElementById('registration__modal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal


// When the user clicks on <span> (x), close the modal
$scope.closeModal= function() {
    modal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
       modal.style.display = "none";

    }
  }





}]);


