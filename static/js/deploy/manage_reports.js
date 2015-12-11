$(document).ready(function($){
    // START Report Specific JS

    var or1 = $("#optionsRadios1");
    var or2 = $("#optionsRadios2");
    var cb1 = $("#cb1");
    var nc = $(".newCondition");

    or1.change(function() {
        if($(this).is(":checked")) {
            $(".forRI").hide();
            $(".forRS").show();
        }
    });
    or2.change(function() {
        if($(this).is(":checked")) {
            $(".forRS").hide();
            $(".forRI").show();
            $("#cb1").attr('checked', false);
        }
    });
    cb1.change(function() {
        if(!$(this).is(":checked")) {
            $(".forCB").hide();
        }
        if($(this).is(":checked")) {
            $(".forCB").show();
        }
    });

    nc.on("change", function() {
        var sb = $(this);
        var val = sb.val();
        var row = sb.closest("div.row");
        var form = sb.closest("div.form-report");
        switch(val) {
            case "and":
            case "or":
                form.append(row.clone());
                break;
            case "delete":
                row.remove();
            case "":
                row.next().remove();
                break;
        }
    });



    var reportTable =  $("<table/>").addClass('display').attr({
        "cellpadding": "0",
        "cellspacing": "0",
        "border": "0"
    });

    $('#viewAllReports').html(reportTable);
    var reportSet = [
        ["Custom Report #1","11/10/2014","11/24/2014"],
        ["Custom Report #2","10/10/2014","10/24/2014"],
        ["Custom Report #3","12/10/2014","12/24/2014"],
        ["Custom Report #4","01/10/2014","01/24/2014"],
        ["Custom Report #5","02/10/2014","02/24/2014"],
        ["Custom Report #6","03/10/2014","03/24/2014"],
        ["Custom Report #7","04/10/2014","04/24/2014"],
        ["Custom Report #8","05/10/2014","05/24/2014"],
        ["Custom Report #9","06/10/2014","06/24/2014"],
        ["Custom Report #10","11/10/2015","11/24/2015"],
        ["Custom Report #11","12/10/2015","12/24/2015"],
        ["Custom Report #12","01/10/2015","01/24/2015"],
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
 
    reportTable.dataTable( {
        data: reportSet,
        columns: cols,
        searching: false,
    });

    $('#EditModal').on('shown.bs.modal', function() {
        $(".datepicker").datepicker({
            format:'yyyy/mm/dd'
        });
        /*
        var oTable = $(this).find('table.display').dataTable();
        if ( oTable.length > 0 ) {
            oTable.fnAdjustColumnSizing();
        }
        */
    })

    reportTable.on("click", "tbody tr", function() {
        $("#reportEditModal").modal('show');
       alert("When this feature is working the selected report's data will be shown.");
    });

    // END Report Specific JS

    // START GroupReport Specific JS
    var groupReportTable =  $("<table/>").addClass('display').attr({
        "cellpadding": "0",
        "cellspacing": "0",
        "border": "0"
    });

    $('#viewAllGroupReports').html(groupReportTable);
    var groupReportSet = [
        ["Custom Group #1", "No, this group cannot","Yes, this group can","Yes, this group can"],
        ["Custom Group #3", "No, this group cannot","Yes, this group can","No, this group cannot"],
        ["Custom Group #5", "Yes, this group can","No, this group cannot","No, this group cannot"],
        ["Custom Group #7", "Yes, this group can","No, this group cannot","Yes, this group can"],
        ["Custom Group #9", "No, this group cannot","No, this group cannot","Yes, this group can"],
        ["Custom Group #13", "Yes, this group can","Yes, this group can","Yes, this group can"],
        ["Custom Group #14", "No, this group cannot","Yes, this group can","No, this group cannot"],
    ];
    
    var cols = [
        {"title": "Group Name"},
        {"title": "Can manage other users"},
        {"title": "Can create new reports"},
        {"title": "Can assign reports to groups"}
    ];
 
    groupReportTable.dataTable( {
        data: groupReportSet,
        columns: cols,
        searching: false
    });

    $("#selectReport").change(function() {
        alert("Selecting an item here will remove it from this list and place it in the list below.");
    });

        /*
    $('#groupEditModal').on('shown.bs.modal', function() {
        var oTable = $(this).find('table.display').dataTable();
        if ( oTable.length > 0 ) {
            oTable.fnAdjustColumnSizing();
        }
    })
        */

    // END GroupReport Specific JS


});
