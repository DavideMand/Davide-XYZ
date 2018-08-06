$(window).on('load', function(){
    
    // initialize isotope
    $("#isotope-container").isotope({
        
       
});
    
    // filter items on button click
    $("#isotope-filters").on('click', 'button', function(){
        
        // get filter value
        var filterValue = $(this).attr('data-filter');
        
        // filter portfolio 
         $("#isotope-container").isotope({
             
             filter: filterValue
             
           
});
        
        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
        
        
    });
    
// magnific pop up plugin
    
    $(function (){
        
        $("#portfolio-wrapper").magnificPopup({
          delegate: 'a', // child items selector, by clicking on it popup will open
          type: 'image', 
          gallery: {
              enabled: true
          }
});
        
    });
    
});