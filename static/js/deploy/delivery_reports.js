$(document).ready(function($){
    // START Report Specific JS
    var reportTable =  $("<table/>").addClass('display').attr({
        "cellpadding": "0",
        "cellspacing": "0",
        "border": "0"
    });

    $('#viewReport').html(reportTable);
    var reportSet = [
        ["1","1","11/10/2014 1:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","1","2314","4506.4","11/11/2014 1:51:19 PM"],
        ["2","1","11/11/2014 2:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","2","2314","4606.4","11/12/2014 1:52:29 PM"],
        ["3","1","11/12/2014 3:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","3","2314","4706.4","11/13/2014 1:53:49 PM"],
        ["4","1","11/13/2014 4:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","4","2314","4806.4","11/14/2014 1:54:19 PM"],
        ["5","1","11/14/2014 5:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","5","2314","4906.4","11/15/2014 1:55:19 PM"],
        ["6","1","11/15/2014 6:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","6","2314","4106.4","11/16/2014 1:56:19 PM"],
        ["7","1","11/16/2014 7:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","7","2314","4306.4","11/17/2014 1:57:19 PM"],
        ["8","1","11/17/2014 8:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","8","2314","4406.4","11/18/2014 1:58:19 PM"],
        ["9","1","11/18/2014 9:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","9","2314","4306.4","11/19/2014 1:59:19 PM"],
        ["10","1","12/10/2014 1:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","1","2314","4506.4","1/11/2014 1:51:19 PM"],
        ["11","1","12/10/2014 1:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","1","2314","4506.4","1/11/2014 1:51:19 PM"],
        ["12","1","12/11/2014 2:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","2","2314","4606.4","1/12/2014 1:52:29 PM"],
        ["13","1","12/12/2014 3:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","3","2314","4706.4","1/13/2014 1:53:49 PM"],
        ["14","1","12/13/2014 4:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","4","2314","4806.4","1/14/2014 1:54:19 PM"],
        ["15","1","12/14/2014 5:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","5","2314","4906.4","1/15/2014 1:55:19 PM"],
        ["16","1","12/15/2014 6:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","6","2314","4106.4","1/16/2014 1:56:19 PM"],
        ["17","1","12/16/2014 7:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","7","2314","4306.4","1/17/2014 1:57:19 PM"],
        ["18","1","12/17/2014 8:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","8","2314","4406.4","1/18/2014 1:58:19 PM"],
        ["19","1","12/18/2014 9:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","9","2314","4306.4","1/19/2014 1:59:19 PM"],
        ["20","1","1/10/2015 1:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","1","2314","4506.4","2/11/2014 1:51:19 PM"],
        ["21","1","1/10/2015 1:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","1","2314","4506.4","2/11/2014 1:51:19 PM"],
        ["22","1","1/11/2015 2:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","2","2314","4606.4","2/12/2014 1:52:29 PM"],
        ["23","1","1/12/2015 3:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","3","2314","4706.4","2/13/2014 1:53:49 PM"],
        ["24","1","1/13/2015 4:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","4","2314","4806.4","2/14/2014 1:54:19 PM"],
        ["25","1","1/14/2015 5:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","5","2314","4906.4","2/15/2014 1:55:19 PM"],
        ["26","1","1/15/2015 6:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","6","2314","4106.4","2/16/2014 1:56:19 PM"],
        ["27","1","1/16/2015 7:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","7","2314","4306.4","2/17/2014 1:57:19 PM"],
        ["28","1","1/17/2015 8:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","8","2314","4406.4","2/18/2014 1:58:19 PM"],
        ["29","1","1/18/2015 9:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","9","2314","4306.4","2/19/2014 1:59:19 PM"],
        ["30","1","2/10/2015 1:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","1","2314","4506.4","3/11/2014 1:51:19 PM"],
        ["31","1","2/10/2015 1:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","1","2314","4506.4","3/11/2014 1:51:19 PM"],
        ["32","1","2/11/2015 2:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","2","2314","4606.4","3/12/2014 1:52:29 PM"],
        ["33","1","2/12/2015 3:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","3","2314","4706.4","3/13/2014 1:53:49 PM"],
        ["34","1","2/13/2015 4:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","4","2314","4806.4","3/14/2014 1:54:19 PM"],
        ["35","1","2/14/2015 5:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","5","2314","4906.4","3/15/2014 1:55:19 PM"],
        ["36","1","2/15/2015 6:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","6","2314","4106.4","3/16/2014 1:56:19 PM"],
        ["37","1","2/16/2015 7:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","7","2314","4306.4","3/17/2014 1:57:19 PM"],
        ["38","1","2/17/2015 8:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","8","2314","4406.4","3/18/2014 1:58:19 PM"],
        ["39","1","2/18/2015 9:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","9","2314","4306.4","3/19/2014 1:59:19 PM"],
        ["40","1","3/10/2015 1:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","1","2314","4506.4","4/11/2014 1:51:19 PM"],
        ["41","1","3/10/2015 1:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","1","2314","4506.4","4/11/2014 1:51:19 PM"],
        ["42","1","3/11/2015 2:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","2","2314","4606.4","4/12/2014 1:52:29 PM"],
        ["43","1","3/12/2015 3:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","3","2314","4706.4","4/13/2014 1:53:49 PM"],
        ["44","1","3/13/2015 4:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","4","2314","4806.4","4/14/2014 1:54:19 PM"],
        ["45","1","3/14/2015 5:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","5","2314","4906.4","4/15/2014 1:55:19 PM"],
        ["46","1","3/15/2015 6:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","6","2314","4106.4","4/16/2014 1:56:19 PM"],
        ["47","1","3/16/2015 7:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","7","2314","4306.4","4/17/2014 1:57:19 PM"],
        ["48","1","3/17/2015 8:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","8","2314","4406.4","4/18/2014 1:58:19 PM"],
        ["49","1","3/18/2015 9:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","9","2314","4306.4","4/19/2014 1:59:19 PM"],
        ["50","1","4/10/2015 1:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","1","2314","4506.4","5/11/2014 1:51:19 PM"],
        ["51","1","4/10/2015 1:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","1","2314","4506.4","5/11/2014 1:51:19 PM"],
        ["52","1","4/11/2015 2:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","2","2314","4606.4","5/12/2014 1:52:29 PM"],
        ["53","1","4/12/2015 3:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","3","2314","4706.4","5/13/2014 1:53:49 PM"],
        ["54","1","4/13/2015 4:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","4","2314","4806.4","5/14/2014 1:54:19 PM"],
        ["55","1","4/14/2015 5:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","5","2314","4906.4","5/15/2014 1:55:19 PM"],
        ["56","1","4/15/2015 6:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","6","2314","4106.4","5/16/2014 1:56:19 PM"],
        ["57","1","4/16/2015 7:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","7","2314","4306.4","5/17/2014 1:57:19 PM"],
        ["58","1","4/17/2015 8:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","8","2314","4406.4","5/18/2014 1:58:19 PM"],
        ["59","1","4/18/2015 9:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","9","2314","4306.4","5/19/2014 1:59:19 PM"],
        ["60","1","5/10/2015 1:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","1","2314","4506.4","6/11/2014 1:51:19 PM"],
        ["61","1","5/10/2015 1:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","1","2314","4506.4","6/11/2014 1:51:19 PM"],
        ["62","1","5/11/2015 2:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","2","2314","4606.4","6/12/2014 1:52:29 PM"],
        ["63","1","5/12/2015 3:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","3","2314","4706.4","6/13/2014 1:53:49 PM"],
        ["64","1","5/13/2015 4:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","4","2314","4806.4","6/14/2014 1:54:19 PM"],
        ["65","1","5/14/2015 5:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","5","2314","4906.4","6/15/2014 1:55:19 PM"],
        ["66","1","5/15/2015 6:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","6","2314","4106.4","6/16/2014 1:56:19 PM"],
        ["67","1","5/16/2015 7:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","7","2314","4306.4","6/17/2014 1:57:19 PM"],
        ["68","1","5/17/2015 8:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","8","2314","4406.4","6/18/2014 1:58:19 PM"],
        ["69","1","5/18/2015 9:58:18 PM","Platville","Triton","Well House #2","Plantville","Water Pumped [Acre Feet(AF)]","Temp","9","2314","4306.4","6/19/2014 1:59:19 PM"],
    ];
    
    var cols = [
        {"title": "Delivery Report ID"},
        {"title": "Customer ID"},
        {
            "title": "Report Date",
            "type": "date"
        },
        {"title": "Location Name"},
        {"title": "Customer"},
        {"title": "Project"},
        {"title": "Address"},
        {"title": "Mix Name"},
        {"title": "Application"},
        {"title": "Truck Number"},
        {"title": "Invoice Number"},
        {"title": "Cubic Yards"},
        {
            "title": "Date Completed",
            "type": "date"
        }
    ];

    function getGroupLabel(dateTime) {
        var arr = dateTime.split("/");
        if(typeof(arr[1]) !== "string") {
            return dateTime;
        }
        var months = [ "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December" ];
        return months[parseInt(arr[0]-1,10)] + " " + arr[2].split(" ")[0];
    }

 
    reportTable.dataTable( {
        data: reportSet,
        columns: cols,
        drawCallback: function ( settings ) {
            var api = this.api();
            var rows = api.rows( {page:'current'} ).nodes();
            var last=null;
            window.all6 = 0;
            window.col6 = 0;

            window.col6dat = api.column(11).data();
            api.column(settings.aaSorting[0][0], {page:'current'} ).data().each( function ( group, i ) {
                var groupDate = getGroupLabel(group);
                window.lastRow = i;
                if ( last !== groupDate ) {
                    if(last === null) {
                        window.col6 = "";
                    } else {
                        col6 = parseFloat(col6).toFixed(2);
                    }
                    $(rows).eq( i ).before(
                        '<tr class="group"><td colspan="2"><h4>'
                                +groupDate+
                            '</h4></td>' + 
                            '<td>' +
                            '</td>' + 
                            '<td>' +
                            '</td>' + 
                            '<td>' +
                            '</td>' + 
                            '<td>' +
                            '</td>' + 
                            '<td>' +
                            '</td>' + 
                            '<td>' +
                            '</td>' + 
                            '<td>' +
                            '</td>' + 
                            '<td>' +
                            '</td>' + 
                            '<td>' +
                            '</td>' + 
                            '<td ><strong class="bold pull-right">' +
                             col6 +
                            '</strong></td>' + 
                        '</tr>'
                    );
                    col6 = 0;
                    last = groupDate;
                }
                var c6 = parseFloat(col6dat[i].replace(/[^0-9-.]/g, ''));
                if(c6 > 0) {
                    col6 += c6;
                    all6 += c6;
                }
            });
        }

    });

    $('#selectReport').change(function() {
       alert("When this feature is working the selected report's data will be shown in the table below.");
    });

    // END Report Specific JS


});
