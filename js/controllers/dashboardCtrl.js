'use strict'

app.controller('dashboardCtrl',['$scope','loginService',function($scope,loginService){
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
$scope.comics = [
	{"name":"batman", "year":"1998","img":"img/comics/batman.jpg"},
	{"name":"Superman", "year":"1979","img":"img/comics/superman.jpg"},
	{"name":"Ironman", "year":"1985","img":"img/comics/ironman.jpg"},
	{"name":"Hulk", "year":"1995","img":"img/comics/hulk.jpg"}
	];

$scope.readComic = function(comic){
	$scope.current = comic;
	modal3.style.display = "block";

}
$scope.addNewComic = function(){
	$scope.current = {};

	modal2.style.display = "block";

}
$scope.saveNewComic = function(){
	$scope.comics.push($scope.current);
	$scope.current = {};
	$scope.closeModal();
}

$scope.deleteComic = function(comic){
	var index = $scope.comics.indexOf(comic);
	$scope.closeModal();
	$scope.comics.splice(index,1);
}
$scope.editComic = function(comic){
	var index = $scope.comics.indexOf(comic);
	$scope.current = comic;
	modal.style.display = "block";
}
$scope.saveComic = function(){

	$scope.current = {};
	$scope.closeModal();
}



// Get the modal
var modal = document.getElementById('comicModal__edit');
var modal2 = document.getElementById('comicModal__create');
var modal3 = document.getElementById('comicModal__read');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal


// When the user clicks on <span> (x), close the modal
$scope.closeModal= function() {
    modal.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
       modal.style.display = "none";

    }
     if (event.target == modal2) {

   		modal2.style.display = "none";
    }
    if (event.target == modal3) {

   		modal3.style.display = "none";
    }
}





}]);


