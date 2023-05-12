//var id = $(this).data('id');
$(document).ready(function () {

    //var id = $('#files').data('id');
    //var number = $('#files').data('number');

    var id = $('#txt_carazone_file_id').val();
    //var dplist = document.getElementById('ddlst_carazone_number');
    //var number = dplist.options[dplist.selectedIndex].value;
    //var number = $('#ddlst_carazone_number').text();

    //$(this).data('id')
	// enable fileuploader plugin
	$('input[name="files"]').fileuploader({
       // changeInput: '<div class="fileuploader-input">' +
					  //    '<div class="fileuploader-input-inner">' +
						 //     '<div class="fileuploader-icon-main"></div>' +
							//  '<h3 class="fileuploader-input-caption"><span>${captions.feedback}</span></h3>' +
							//  '<p>${captions.or}</p>' +
							//  '<button type="button" class="fileuploader-input-button"><span>${captions.button}</span></button>' +
						 // '</div>' +
					  //'</div>',
        changeInput: '<div class="fileuploader-input small-padding">' +
            '<div class="fileuploader-input-inner">' +
            '<div class="fileuploader-icon-main d-inline p-3"></div>' +
            '<h3 class="fileuploader-input-caption font-ar"><span>${captions.feedback}</span></h3>' +
            '</div>' +
            '</div>',
        theme: 'dragdrop',
        upload: {
            
            url: 'carazone_upload_remove.aspx?status=upload&id=' + id,
            data: null,
            type: 'POST',
            enctype: 'multipart/form-data',
            start: true,
            synchron: true,
            beforeSend: null,
            onSuccess: function (result, item) {
                __doPostBack("imageUploaded");
                var data = {};
				
                // get data
				if (result && result.files)
                    data = result;
                else
					data.hasWarnings = true;
                
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
                setTimeout(function() {
                    item.html.find('.progress-bar2').fadeOut(400);
                }, 400);
            },
            onError: function(item) {
				var progressBar = item.html.find('.progress-bar2');
				
				if(progressBar.length) {
					progressBar.find('span').html(0 + "%");
                    progressBar.find('.fileuploader-progressbar .bar').width(0 + "%");
					item.html.find('.progress-bar2').fadeOut(400);
				}
                
//                item.upload.status != 'cancelled' && item.html.find('.fileuploader-action-retry').length == 0 ? item.html.find('.column-actions').prepend(
//                    '<button type="button" class="fileuploader-action fileuploader-action-retry" title="Retry"><i class="fileuploader-icon-retry"></i></button>'
//                ) : null;
            },
            onProgress: function(data, item) {
                var progressBar = item.html.find('.progress-bar2');
				
                if(progressBar.length > 0) {
                    progressBar.show();
                    progressBar.find('span').html(data.percentage + "%");
                    progressBar.find('.fileuploader-progressbar .bar').width(data.percentage + "%");
                }
            },
            onComplete: null,
        },
		onRemove: function(item) {
//			$.post('./php/ajax_remove_file.php', {
//				file: item.name
//			});

            $.post('carazone_upload_remove.aspx?status=remove&id=' + id + '&file=' + item.name);

		},
		captions: $.extend(true, {}, $.fn.fileuploader.languages['ar'], {
            feedback: 'تحميل الصور',
            feedback2: 'Drag and drop files here',
            drop: 'Drag and drop files here',
            or: 'or',
            button: 'Browse files',
        }),
	});
	
});