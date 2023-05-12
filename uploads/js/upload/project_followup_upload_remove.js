//$(document).ready(function () {

function uploadphotos(limit, projectPicId) {


    //const elements = document.getElementsByClassName("fileuploader-input");
 
    //while (elements.length > 0) {
    //    elements[0].parentNode.removeChild(elements[0]);
    //}
    //alert(elements[0]);
	// enable fileuploader plugin  
    //item.name.split('.').pop()
    //$('input[name="files_1"]')

	//$('input[name*="files_"]') // contains of

    // start with
//    $('input[name^="files_"]')

     // alert(projectPicId);
    // $('input[name^="files_1"]').remove();
   

    if ($(".fileuploader-input")[0]) {
      
    } else {
      
        $('input[name^="files_1"]')
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

                    url: 'project_followup_upload_remove.aspx?uploadimg=1&projectPicId=' + projectPicId,
                    data: null,
                    type: 'POST',
                    enctype: 'multipart/form-data',
                    start: true,
                    synchron: true,
                    beforeSend: null,
                    onSuccess: function (result, item) {
                      
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
                        //alert("FFF");
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
                    onComplete: function () {
                        __doPostBack("imageUploaded", projectPicId);
                    },
                },
                onRemove: function (item) {
                    //			$.post('./php/ajax_remove_file.php', {
                    //				file: item.name
                    //			});
                    //item.name.split('.').pop()
                    $.post('project_followup_upload_remove.aspx?remove=1&ext=' + item.name.split('.').pop());

                },
                captions: $.extend(true, {}, $.fn.fileuploader.languages['en'], {
                    feedback: 'Drag and photos here',
                    feedback2: 'Drag and drop files here',
                    drop: 'Drag and drop files here',
                    or: 'or',
                    button: 'Browse files',
                }),
            });

        $('input[name^="files_2"]')
            //alert($(this).data('null_nb'));
            .fileuploader({
                accept: ".pdf",
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

                    url: 'project_followup_upload_remove.aspx?uploadpdf=1&projectPicId=' + projectPicId,
                    data: null,
                    type: 'POST',
                    enctype: 'multipart/form-data',
                    start: true,
                    synchron: true,
                    beforeSend: null,
                    onSuccess: function (result, item) {
                        __doPostBack("imageUploaded", projectPicId);
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
                    feedback: 'Drag and drop PDF file here',
                    feedback2: 'Drag and drop file here',
                    drop: 'Drag and drop files here',
                    or: 'or',
                    button: 'Browse files',
                }),
            });
    }

  }
//});