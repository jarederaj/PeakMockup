$(document).ready(function($){
    // START GroupReport Specific JS
    var groupReportTable =  $("<table/>").addClass('display').attr({
        "cellpadding": "0",
        "cellspacing": "0",
        "border": "0"
    });

    $('#viewAllGroupReports').html(groupReportTable);
    var groupReportSet = [
        ["Custom Report #1","11/10/2014","11/24/2014"],
        ["Custom Report #3","12/10/2014","12/24/2014"],
        ["Custom Report #5","02/10/2014","02/24/2014"],
        ["Custom Report #7","04/10/2014","04/24/2014"],
        ["Custom Report #9","06/10/2014","06/24/2014"],
        ["Custom Report #13","07/10/2015","07/24/2015"],
        ["Custom Report #14","08/10/2015","08/24/2015"],
    ];
    
    var cols = [
        {"title": "Report Name"},
        {
            "title": "Start Date",
            "type": "date"
        },
        {
            "title": "End Date",
            "type": "date"
        }
    ];
 
    groupReportTable.dataTable( {
        data: groupReportSet,
        columns: cols,
        searching: false
    });

    $("#selectReport").change(function() {
        alert("Selecting an item here will remove it from this list and place it in the list below.");
    });

    $('#groupEditModal').on('shown.bs.modal', function() {
        /*
        var oTable = $(this).find('table.display').dataTable();
        if ( oTable.length > 0 ) {
            oTable.fnAdjustColumnSizing();
        }
        */
    })

    // END GroupReport Specific JS


    // START Group Specific JS
    var groupTable =  $("<table/>").addClass('display').attr({
        "cellpadding": "0",
        "cellspacing": "0",
        "border": "0"
    });

    $('#viewAllGroups').html(groupTable);
    var groupSet = [
        ["Custom Group #1", "No, this group cannot","Yes, this group can","Yes, this group can"],
        ["Custom Group #2", "No, this group cannot","Yes, this group can","No, this group cannot"],
        ["Custom Group #3", "No, this group cannot","Yes, this group can","No, this group cannot"],
        ["Custom Group #4", "Yes, this group can","No, this group cannot","No, this group cannot"],
        ["Custom Group #5", "Yes, this group can","No, this group cannot","No, this group cannot"],
        ["Custom Group #6", "No, this group cannot","Yes, this group can","No, this group cannot"],
        ["Custom Group #7", "Yes, this group can","No, this group cannot","Yes, this group can"],
        ["Custom Group #8", "Yes, this group can","No, this group cannot","Yes, this group can"],
        ["Custom Group #9", "No, this group cannot","No, this group cannot","Yes, this group can"],
        ["Custom Group #10", "Yes, this group can","Yes, this group can","Yes, this group can"],
        ["Custom Group #11", "No, this group cannot","Yes, this group can","Yes, this group can"],
        ["Custom Group #12", "Yes, this group can","Yes, this group can","Yes, this group can"],
        ["Custom Group #13", "Yes, this group can","Yes, this group can","Yes, this group can"],
        ["Custom Group #14", "No, this group cannot","Yes, this group can","No, this group cannot"],
    ];
    
    var cols = [
        {"title": "Group Name"},
        {"title": "Can manage other users"},
        {"title": "Can create new reports"},
        {"title": "Can assign reports to groups"},
    ];
 
    groupTable.dataTable( {
        data: groupSet,
        columns: cols
    });

    groupTable.on("click", "tbody tr", function() {
        $("#groupEditModal").modal('show');
       alert("When this feature is working the selected group's data will be shown.");
    });

    //var oTable = $('div.dataTables_scrollBody>table.display', ui.panel).dataTable();
    //if ( oTable.length > 0 ) {
    //    oTable.fnAdjustColumnSizing();
    //}

    // END Group Specific JS
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
