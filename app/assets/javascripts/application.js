//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
// 

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
})


function file_check() {
  var error_summary = document.getElementById("file-error-summary");
  var file_upload = document.getElementById("file-upload");
  var file_upload_text = document.getElementById("file-upload-xhtml-error");
  var file_upload_input = document.getElementById("file-upload-xhtml-error");
  var file_name = document.getElementById("file-upload-1").value;
  var success_message = document.getElementById("success-message");
  var failure_message = document.getElementById("failure-message");

  // Show error if empty file
  if( file_name == "") {
    error_summary.classList.remove('govuk-visually-hidden');
    file_upload_text.classList.remove('govuk-visually-hidden');
    file_upload.classList.add('govuk-form-group--error');
    file_upload_input.classList.add('govuk-file-upload--error');  
  } else {
    // File uploaded so remove error
    error_summary.classList.add('govuk-visually-hidden');
    file_upload_text.classList.add('govuk-visually-hidden');
    file_upload.classList.remove('govuk-form-group--error');
    file_upload_input.classList.remove('govuk-file-upload--error');  
    // Now check file extension
    var ext = file_name.split('.').pop();
    if (ext == "xhtml") {
      // xhtml file so show success message
      success_message.classList.remove('govuk-visually-hidden')
      failure_message.classList.add('govuk-visually-hidden')
    }else{
      // Not xhtml file so show failure message
      success_message.classList.add('govuk-visually-hidden')
      failure_message.classList.remove('govuk-visually-hidden')
    }

  }

}




