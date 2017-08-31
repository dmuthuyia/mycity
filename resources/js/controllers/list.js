
(function(){

	angular
		.module("turtleFacts")
		.controller('listCtrl', ListController);

		function ListController(){
			var vm = this;

			vm.data  = buildingData;
			vm.searchtext ="";
			vm.activeBuilding = {};
			vm.activateQuiz = activateQuiz;
			vm.quizActivate = false;

			vm.changeActiveBuilding = changeActiveBuilding;

			function changeActiveBuilding(index){
				vm.activeBuilding =index;

			}

			function activateQuiz(){
				vm.quizActivate = true;
			}
		}


		var buildingData = 

		[
			{
				name: "Hass Tower",
				height: "330 m",
				floors: "66",
				location: "Upperhill",
				image_url: "./resources/images/featured/hass.jpg"
			},
			{
				name: "Britam Tower",
				height: "200 m",
				floors: "32",
				location: "Upperhill",
				image_url: "./resources/images/featured/britam.jpg"
			},
			{
				name: "Kenya Commercial Bank Plaza",
				height: "100 m",
				floors: "24",
				location: "Upperhill",
				image_url: "./resources/images/featured/kcb.jpg"
			},
			{
				name: "Kenyatta International Conference Centre",
				height: "105 m",
				floors: "28",
				location: "CBD",
				image_url: "./resources/images/featured/kicc.jpg"
			},
			{
				name: "Prism Tower",
				height: "133 m",
				floors: "32",
				location: "Upperhill",
				image_url: "./resources/images/featured/prism.jpg"
			},
			{
				name: "UAP Old Mutual Tower",
				height: "163 m",
				floors: "33",
				location: "Upperhill",
				image_url: "./resources/images/featured/uap.jpg"
			}
		]

})();