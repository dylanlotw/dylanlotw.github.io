    //Get the currtent year for the copyright
    $('#year').text(new Date().getFullYear());


    //init ScrollSpy
    $('body').scrollspy({target:'#main-nav'});

    //Smooth Scrolling
    $('main-nav a').on('click', function(event){
        event.preventDefault();
        
        const hash = this.hash;

        $('html, body').animate({
           scrollTop: $(hash).offset().top
        },800, function(){
            window.location.hash= hash; 
        });
        }
    });