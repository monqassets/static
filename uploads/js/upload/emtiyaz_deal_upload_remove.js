
function uploadFiles(id) {
   var item_id = id;
    


    if ($(".fileuploader-input")[0]) {

    } else {
        $('input[name="files_emtiyaz_item"]')
            .fileuploader({
                limit: 3,
                changeInput: '<div class="fileuploader-input small-padding">' +
                    '<div class="fileuploader-input-inner">' +
                    '<div class="fileuploader-icon-main d-inline p-3"></div>' +
                    '<h3 class="fileuploader-input-caption font-ar"><span>${captions.feedback}</span></h3>' +
                    '</div>' +
                    '</div>',
                theme: 'dragdrop',
                upload: {

                    url: 'emtiyaz_item_upload_remove.aspx?uploadimg=1&emtiyaz_item_id=' + item_id,
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
                        window.location.reload();
                    },
                },
                onRemove: function (item) {
                    $.post('project_followup_upload_remove.aspx?remove=1&ext=' + item.name.split('.').pop());

                },
                captions: $.extend(true, {}, $.fn.fileuploader.languages['en'], {
                    feedback: 'Upload Files',
                    feedback2: 'Drag and drop files here',
                    drop: 'Drag and drop files here',
                    or: 'or',
                    button: 'Browse files',
                }),
            });

    }



    }



