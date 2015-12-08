$(document).ready(function($){
    // START User Specific JS
    var userTable =  $("<table/>").addClass('display').attr({
        "cellpadding": "0",
        "cellspacing": "0",
        "border": "0"
    });

    $('#viewAllUsers').html(userTable);
    var userSet = [
        ["Tim Sar",           "ts@gmail.com","Custom Group #1"],
        ["Albert Applegate",  "aa@gmail.com","Custom Group #2"],
        ["Herbert Jones",     "hj@gmail.com","Custom Group #2"],
        ["Nick Sor",          "ns@gmail.com","Custom Group #2"],
        ["Nikoli Atkins",     "na@gmail.com","Custom Group #2"],
        ["Jim Sar",           "js@gmail.com","Custom Group #3"],
        ["Joseph Applegate",  "ja@gmail.com","Custom Group #4"],
        ["Jessie Jones",      "jj@gmail.com","Custom Group #4"],
        ["Pam Sor",           "ps@gmail.com","Custom Group #4"],
        ["Robert Atkins",     "ra@gmail.com","Custom Group #6"],
        ["Greg Jones",        "gj@gmail.com","Custom Group #6"],
        ["Jin Cho",           "jc@gmail.com","Custom Group #6"],
        ["Franklin Appleton", "fa@gmail.com","Custom Group #7"],
        ["Amy Jones",         "aj@gmail.com","Custom Group #7"],
    ];
    
    var cols = [
        {"title": "Full Name"},
        {"title": "Email Address"},
        {"title": "Group assignment"},
    ];
 
    userTable.dataTable( {
        "data": userSet,
        "columns": cols
    });
    userTable.on("click", "tbody tr", function() {
        $("#userEditModal").modal('show');
       alert("When this feature is working the selected users's data will be shown.");
    });

    // END User Specific JS
});


/*
angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

    $scope.items = [{
        label: 'firstName',
        title: 'First Name',
        value: 'Test Name',
        type: 'textbox'
    },{
        label: 'firstName',
        title: 'First Name',
        value: 'Test Name2',
        type: 'textbox'
    },{
        label: 'firstName',
        title: 'First Name',
        value: 'testName3',
        type: 'textbox'
    }];

    $scope.animationsEnabled = true;

    $scope.open = function (size) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
*/
