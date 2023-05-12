////$(document).ready(function () {
////    $(".action-publish").click(function () {
////        function() {
////            $.get("job_action.aspx", { id: $(this).attr('id') }, function (data) {
////                // do something with the data
////                return false;
////            }
////    });
////});


function actionPublish(job_id,publish) {
    $.ajax({
        type: "get",
        url: "job_action.aspx",
        data: {
            job_id: job_id,
            publish: publish
        },
        success: function (data) {
            //alert(data);
            //location.reload();
            $("#div-success").modal("toggle");
            
            //$("#getCode").html(msg);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            $("#div-error").modal("toggle");
        }
    });
    return false;
}

function actionActive(job_id, active) {
    $.ajax({
        type: "get",
        url: "job_action.aspx",
        data: {
            job_id: job_id,
            active: active
        },
        success: function (data) {
            //alert(data);
            //location.reload();
            $("#div-success").modal("toggle");

            //$("#getCode").html(msg);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            $("#div-error").modal("toggle");
        }
    });
    return false;
}




