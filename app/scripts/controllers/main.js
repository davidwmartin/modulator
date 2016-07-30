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

    // Define scales by an array - integers represent intervals (1 for half step, 2 for whole step)
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

    // goes top -> bottom strings, offset counts from 0 (G#/Ab) to 11 (G)
    $scope.tuningOffsets = {
    	1:8,
    	2:3, 
    	3:11,
    	4:6,
    	5:1,
    	6:8
    };

    $scope.selectedScales = {};

    // Fires when you hit "update"
    $scope.updateScales = function(selScales){
    	$scope.selectedScales = angular.copy(selScales);
    	
        $scope.buildNotes($scope.selectedScales);
    };

    //
    $scope.buildNotes = function(selectedScales){

        // Object to hold arrays of playable notes
        $scope.computedScales = {};

        // Iterate over passed in scales
        angular.forEach(selectedScales, function(currentScale, i){
            // Gets proper scale from above $scope.scales by referencing the id, sets notes on current scale by getting notes from reference scale
            var currentScaleRef = $scope.scales[currentScale.id];
            currentScale.notes = currentScaleRef.notes;

            // Create array to hold playable notes, first entry is currentScale's root note
            var playableNotes = [];
            var start = parseInt(currentScale.root);
            playableNotes.push(start);
            

            angular.forEach(currentScale.notes, function(note){
                // Iterate through notes in selected scale
                var entry = start + note;
                // Keep everything in the range 1-12
                if(entry > 12){
                    entry = entry - 12;
                }
                //Push note, reset start
                playableNotes.push(entry);
                start = entry;

            });
            // Assign playable notes to indexed spot in computedScales
            $scope.computedScales[i] = playableNotes;

        });

        console.log($scope.computedScales);

    };

    $scope.ifActive = function(note){
        // create array to hold classes
        var noteClasses = [];

        // relativeNote of each fret, in range 1-12
        var relativeNote = {};
        if (note <= 12){
            relativeNote = note;
        }
        else if (note > 24){
            relativeNote = note - 24;
        }
        else {
            relativeNote = note - 12;
        }

        // var scalePos = $scope.computedScales[0].indexOf(relativeNote);

        // check if relativeNote is in each scale, return appropriate class and append to noteClasses array
        angular.forEach($scope.computedScales, function(tempScale, i){
            var noteClass = '';
            var scalePos = tempScale.indexOf(relativeNote);
            if (scalePos === -1){
                noteClass = '';
            }
            // else if(scalePos === 0){
            //     noteClass = 'root-'+i+' scale-'+i;
            // }
            else {
                noteClass = 'scale-'+i;
            }

            noteClasses.push(noteClass);
        });

        return noteClasses;
    };

  }]);
