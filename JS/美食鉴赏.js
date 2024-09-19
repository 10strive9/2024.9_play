document.addEventListener('DOMContentLoaded', function() {  
    var sliders = document.querySelectorAll('.slider');  
    sliders.forEach(function(slider) {  
        var slideIndex = 1;  
        var sliderId = slider.getAttribute('data-slider-id');  
  
        function showSlides(n, id) {  
            var slides = document.querySelector(`[data-slider-id="${id}"] .slides`);  
            var imgs = slides.getElementsByTagName("img");  
            slideIndex = (n + imgs.length) % imgs.length;  
            for (var i = 0; i < imgs.length; i++) {  
                imgs[i].style.display = "none";  
            }  
            imgs[slideIndex-1].style.display = "block";  
        }  
  
        function plusSlides(n, id) {  
            showSlides(slideIndex + n, id);  
        }  
  
        showSlides(slideIndex, sliderId);  
        setInterval(function() {  
            plusSlides(1, sliderId);  
        }, 2000);  
  
        // 添加导航按钮的事件监听器（如果有的话）  
        // 注意：这里需要为每个轮播的导航按钮添加适当的id或类，并修改事件监听器以使用正确的sliderId  
    });    setInterval(nextSlide, 3000); 
});