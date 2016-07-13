'use strict';

app.factory('loginService', function($http,$location,sessionService){
	return{
		login: function(data,scope){

				var $promise=$http.post('data/user.php' , data); //send data to user.php
				$promise.then(function(msg){
					var uid=msg.data;
					if(uid!='error1'){
						// scope.msgtxt ='Bienvenido';
						console.log(uid);
						sessionService.set('uid',uid);
						$location.path('/dashboard');
					}
					else{
						scope.msgtxt ='usuario y/o contraseña erronea';
						$location.path('/login');

					}
				});


		},
		logout: function(){
			sessionService.destroy('uid');
			$location.path('/login');
		},
		islogged: function(){

			var $checkSessionServer =$http.post('data/check_session.php');
			return $checkSessionServer;
			// if(sessionService.get('user')) return true;
			// else return false;

		}

	}

});