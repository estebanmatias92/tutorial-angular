var tutorial = angular.module('tutorial', []);

tutorial.controller('AlumnoController', ['$scope', function($scope) {
	$scope.alumnos = [
		{nombre: "Juan Blanco", telefono: "123456", curso: "Segundo ESO"},
		{nombre: "Rosa Luxemburgo", telefono: "123456", curso: "Primero ESO"},
		{nombre: "Alberto Herrera", telefono: "123456", curso: "Tercero ESO"},
		{nombre: "Ana Marinio", telefono: "123456", curso: "Tercero ESO"}
	];

	$scope.addAlumno = function() {
		$scope.formVisibility = false;

		$scope.alumnos.push({
			nombre:$scope.nuevoAlumno.nombre,
			telefono:$scope.nuevoAlumno.telefono,
			curso:$scope.nuevoAlumno.curso
		});
	};

	$scope.showForm = function() {
		$scope.formVisibility = true;
	};
}]);
