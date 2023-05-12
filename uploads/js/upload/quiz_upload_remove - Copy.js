
function uploadphotos(limit, id) {
   var quiz_id = id;
    var answer_id = id;
    // enable fileuploader plugin  
    //item.name.split('.').pop()
    //$('input[name="files_1"]')

    //$('input[name*="files_"]') // contains of

    // start with
    //    $('input[name^="files_"]')

    //  alert(projectPicId);
    // $('input[name^="files_1"]').remove();


    if ($(".fileuploader-input")[0]) {

    } else {
        $('input[name="files_quiz"]')
            //alert($(this).data('null_nb'));
            .fileuploader({
                limit: limit,
                changeInput: '<div class="fileuploader-input">' +
                    '<div class="fileuploader-input-inner">' +
                    '<div class="fileuploader-icon-main"></div>' +
                    '<h3 class="fileuploader-input-caption"><span>${captions.feedback}</span></h3>' +
                    '<p>${captions.or}</p>' +
                    '<button type="button" class="fileuploader-input-button"><span>${captions.button}</span></button>' +
                    '</div>' +
                    '</div>',
                theme: 'dragdrop',
                upload: {

                    url: 'quiz_upload_remove.aspx?uploadimg=1&quiz_id=' + quiz_id,
                    data: null,
                    type: 'POST',
                    enctype: 'multipart/form-data',
                    start: true,
                    synchron: true,
                    beforeSend: null,
                    onSuccess: function (result, item) {
                        location.reload();
                        // __doPostBack("imageUploaded", projectPicId);
                        var data = {};

                        // get data
                        if (result && result.files) {

                            data = result;


                        }

                        else {
                            data.hasWarnings = true;

                        }


                        // if success
                        if (data.isSuccess && data.files[0]) {
                            item.name = data.files[0].name;
                            item.html.find('.column-title > div:first-child').text(data.files[0].name).attr('title', data.files[0].name);
                        }

                        // if warnings
                        if (data.hasWarnings) {
                            for (var warning in data.warnings) {
                                alert(data.warnings[warning]);
                            }

                            item.html.removeClass('upload-successful').addClass('upload-failed');
                            // go out from success function by calling onError function
                            // in this case we have a animation there
                            // you can also response in PHP with 404
                            return this.onError ? this.onError(item) : null;
                        }

                        item.html.find('.fileuploader-action-remove').addClass('fileuploader-action-success');
                        setTimeout(function () {
                            item.html.find('.progress-bar2').fadeOut(400);
                        }, 400);

                    },
                    onError: function (item) {

                        var progressBar = item.html.find('.progress-bar2');

                        if (progressBar.length) {
                            progressBar.find('span').html(0 + "%");
                            progressBar.find('.fileuploader-progressbar .bar').width(0 + "%");
                            item.html.find('.progress-bar2').fadeOut(400);
                        }

                        //                item.upload.status != 'cancelled' && item.html.find('.fileuploader-action-retry').length == 0 ? item.html.find('.column-actions').prepend(
                        //                    '<button type="button" class="fileuploader-action fileuploader-action-retry" title="Retry"><i class="fileuploader-icon-retry"></i></button>'
                        //                ) : null;
                    },
                    onProgress: function (data, item) {
                        var progressBar = item.html.find('.progress-bar2');

                        if (progressBar.length > 0) {
                            progressBar.show();
                            progressBar.find('span').html(data.percentage + "%");
                            progressBar.find('.fileuploader-progressbar .bar').width(data.percentage + "%");
                        }
                    },
                    onComplete: null,
                },
                onRemove: function (item) {
                    //			$.post('./php/ajax_remove_file.php', {
                    //				file: item.name
                    //			});
                    //item.name.split('.').pop()
                    $.post('project_followup_upload_remove.aspx?remove=1&ext=' + item.name.split('.').pop());

                },
                captions: $.extend(true, {}, $.fn.fileuploader.languages['en'], {
                    feedback: 'Drag and drop files here',
                    feedback2: 'Drag and drop files here',
                    drop: 'Drag and drop files here',
                    or: 'or',
                    button: 'Browse files',
                }),
            });

    }



    }

function uploadphotosAnswer(limit, quiz_id) {

    // enable fileuploader plugin  
    //item.name.split('.').pop()
    //$('input[name="files_1"]')

    //$('input[name*="files_"]') // contains of

    // start with
    //    $('input[name^="files_"]')

    //  alert(projectPicId);
    // $('input[name^="files_1"]').remove();


    if ($(".fileuploader-input")[1]) {

    } else {
        $('input[name="pic_answer"]')

            //alert($(this).data('null_nb'));
            .fileuploader({
                //  accept: ".pdf",
                limit: 1,
                changeInput: '<div class="fileuploader-input">' +
                    '<div class="fileuploader-input-inner">' +
                    '<div class="fileuploader-icon-main"></div>' +
                    '<h3 class="fileuploader-input-caption"><span>${captions.feedback}</span></h3>' +
                    '<p>${captions.or}</p>' +
                    '<button type="button" class="fileuploader-input-button"><span>${captions.button}</span></button>' +
                    '</div>' +
                    '</div>',
                theme: 'dragdrop',
                upload: {

                    //uploadimg=2 for answer img
                    url: 'quiz_upload_remove.aspx?uploadimg=2&quiz_id=' + quiz_id,
                    data: null,
                    type: 'POST',
                    enctype: 'multipart/form-data',
                    start: true,
                    synchron: true,
                    beforeSend: null,
                    onSuccess: function (result, item) {

                        location.reload();
                        var data = {};

                        // get data
                        if (result && result.files) {

                            data = result;


                        }

                        else {
                            data.hasWarnings = true;

                        }


                        // if success
                        if (data.isSuccess && data.files[0]) {
                            item.name = data.files[0].name;
                            item.html.find('.column-title > div:first-child').text(data.files[0].name).attr('title', data.files[0].name);

                        }

                        // if warnings
                        if (data.hasWarnings) {
                            for (var warning in data.warnings) {
                                alert(data.warnings[warning]);
                            }

                            item.html.removeClass('upload-successful').addClass('upload-failed');
                            // go out from success function by calling onError function
                            // in this case we have a animation there
                            // you can also response in PHP with 404
                            return this.onError ? this.onError(item) : null;
                        }

                        item.html.find('.fileuploader-action-remove').addClass('fileuploader-action-success');
                        setTimeout(function () {
                            item.html.find('.progress-bar2').fadeOut(400);
                        }, 400);

                    },
                    onError: function (item) {

                        var progressBar = item.html.find('.progress-bar2');

                        if (progressBar.length) {
                            progressBar.find('span').html(0 + "%");
                            progressBar.find('.fileuploader-progressbar .bar').width(0 + "%");
                            item.html.find('.progress-bar2').fadeOut(400);
                        }

                        //                item.upload.status != 'cancelled' && item.html.find('.fileuploader-action-retry').length == 0 ? item.html.find('.column-actions').prepend(
                        //                    '<button type="button" class="fileuploader-action fileuploader-action-retry" title="Retry"><i class="fileuploader-icon-retry"></i></button>'
                        //                ) : null;
                    },
                    onProgress: function (data, item) {
                        var progressBar = item.html.find('.progress-bar2');

                        if (progressBar.length > 0) {
                            progressBar.show();
                            progressBar.find('span').html(data.percentage + "%");
                            progressBar.find('.fileuploader-progressbar .bar').width(data.percentage + "%");
                        }
                    },
                    onComplete: null,
                },
                onRemove: function (item) {
                    //			$.post('./php/ajax_remove_file.php', {
                    //				file: item.name
                    //			});
                    //item.name.split('.').pop()
                    $.post('project_followup_upload_remove.aspx?remove=1&ext=' + item.name.split('.').pop());

                },
                captions: $.extend(true, {}, $.fn.fileuploader.languages['en'], {
                    feedback: 'Drag and drop files here',
                    feedback2: 'Drag and drop files here',
                    drop: 'Drag and drop files here',
                    or: 'or',
                    button: 'Browse files',
                }),
            });
    }



}
//});

