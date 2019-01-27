$(document).ready(main);

function main(){
    $( ".menu" ).hide();
    $( ".close" ).hide();
	$('.hamburger').click(function(){
        $( ".menu" ).slideToggle( "slow", function() {
        $( ".hamburger" ).hide();
        $(".close").show();
        });
    });
    
    $( ".close" ).click(function(){
        $( ".menu" ).slideToggle( "slow", function() {
            $( ".close" ).hide();
            $(".hamburger").show();
        });
    })
 
    window.addEventListener("resize", (e) => {
        const w = window.screen.width
        console.log({w});
        if(w === 1024) {
            $( ".hamburger" ).hide();
            $( ".close" ).hide();
            $( ".menu" ).show();
        }
    })
};