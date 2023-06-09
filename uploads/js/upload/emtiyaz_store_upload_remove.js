
function uploadphotos(id) {
    var emtiyaz_store_id = id;


    if ($(".fileuploader-input-2")[0]) {

    } else {
        $('input[name="files_emtiyaz_store"]')
            .fileuploader({
                limit: 1,
                changeInput: '<div class="fileuploader-input-2">' +
                    '<div class="fileuploader-input-inner">' +
                    '<div class="fileuploader-icon-main"></div>' +
                    '<h3 class="fileuploader-input-caption"><span>${captions.feedback}</span></h3>' +
                    '<p>${captions.or}</p>' +
                    '<button type="button" class="fileuploader-input-button"><span>${captions.button}</span></button>' +
                    '</div>' +
                    '</div>',
                theme: 'dragdrop',
                upload: {
                    url: 'emtiyaz_store_upload_remove.aspx?uploadimg=1&emtiyaz_store_id=' + emtiyaz_store_id,
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
                    $.post('emtiyaz_store_upload_remove.aspx?remove=1&ext=' + item.name.split('.').pop());

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