"use strict";app.controller("userRegCtrl",["$scope","loginService","$http",function(e,s,n){e.$on("$viewContentLoaded",function(s,n){e.loadUsers()}),e.txt="page Dashboard";var o=document.getElementsByClassName("nav")[0];o.style.display="block",e.logout=function(){s.logout()},e.toggle=function(){document.getElementsByClassName("nav__menu__list")[0].classList.toggle("responsive")},e.limit=9,e.users=[{username:"dmogollon",password:"1234",fullname:"David Mogollon"},{username:"edonado",password:"1234",fullname:"Erika Donado"},{username:"admin",password:"1234",fullname:"Administrador del sistema"}],e.loadUsers=function(){n.get("data/users.json").success(function(s){e.users=s})},e.addNewUser=function(){e.current={},t.style.display="block"},e.saveNewUser=function(){e.users.push(e.current),e.saveToJSON(e.current),e.current={},e.closeModal()},e.saveToJSON=function(e){jQuery.ajax({type:"POST",dataType:"json",url:"data/save_users.php",data:e})};var t=document.getElementById("registration__modal");document.getElementsByClassName("close")[0];e.closeModal=function(){t.style.display="none"},window.onclick=function(e){e.target==t&&(t.style.display="none")}}]);