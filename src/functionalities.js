function previewProfilePic() {
    const preview = document.querySelector('.pic-preview');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }

    preview.style.display = 'block';
  }