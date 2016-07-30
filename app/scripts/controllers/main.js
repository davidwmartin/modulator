'use strict';

/**
 * @ngdoc function
 * @name modulator2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the modulator2App
 */
angular.module('modulator2App')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.rootVals = [
		'G# / Ab',
		'A',
		'A# / Bb',
		'B',
		'C',
		'C# / Db ',
		'D',
		'D# / Eb',
		'E',
		'F',
		'F# / Gb',
		'G',
    ];

    $scope.scales = [
    	{
    		name:'Major',
    		notes:[2,2,1,2,2,2]
    	},
    	{
    		name:'Minor',
    		notes:[2,1,2,2,1,2]
    	},
    	{
    		name:'Harmonic Minor',
    		notes: [2,1,2,2,1,3]
    	},
    	{
    		name:'Minor Pentatonic',
    		notes: [3,2,2,3,2]
    	}
    ];

    // goes top -> bottom strings
    $scope.tuningOffsets = {
    	1:9,
    	2:4, 
    	3:12,
    	4:7,
    	5:2,
    	6:9
    };

    $scope.selectedScales = {};
    // $scope.frettedNotes = {};

    // Fires when you hit "update"
    $scope.updateScales = function(selScales){
    	$scope.selectedScales = angular.copy(selScales);
        
        // console.log(selScales.notes);
        // console.log($scope.selectedScales);
    	
        $scope.buildNotes($scope.selectedScales);
    };

    //
    $scope.buildNotes = function(selectedScales){
        //Start should be root note of scale, 0 for testing
        $scope.start = 0;
        $scope.playableNotes = [];

        angular.forEach(selectedScales, function(currentScale){
            // Gets proper scale from above $scope.scales by referencing the id
            var currentScaleRef = $scope.scales[currentScale.id];

            currentScale.notes = currentScaleRef.notes;

            console.log(currentScale.notes);

            //Start should be root note of scale, 0 for testing
            $scope.start = 0;
            $scope.playableNotes = [];

            angular.forEach(currentScale.notes, function(note){
                // Iterate through notes in selected scale
                // console.log('note: ' + note);

                $scope.entry = $scope.start + note;

                if($scope.entry > 12){
                    $scope.entry = $scope.entry - 12;
                }
                $scope.playableNotes.push($scope.entry);

                $scope.start = $scope.entry;

            });

            console.log($scope.playableNotes);


        });

    };

    // $scope.ifActive = function(note){
    //     // Keeps everything in range 1-12
    //     $scope.relativeNote = 0;
    //     if (note <= 12){
    //         $scope.relativeNote = note;
    //     }
    //     else if (note > 24){
    //         $scope.relativeNote = note - 24;
    //     }
    //     else {
    //         $scope.relativeNote = note - 12;
    //     }
    // };

  }]);
