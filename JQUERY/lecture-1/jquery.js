// Jquery syntax

// $(document).ready(function(){
//     $('').click(function(){
//         $('').hide()
//     })
// })


// $(function(){
//     $('').click(function(){
//         $('').hide()
//     })
// })

// $(function(){
//     $('.paragraps-2').click(function(){
//         $('.paragraps-1').hide()
//     })
// })

// $(function(){
//     $('.button').click(function(){
//         $('.paragraps-2').hide()
//     })
// })

// $(function(){
//     $('.button').click(function(){
//         $('.paragraps-1 , .paragraps-2').hide()
//     })
// })



$(function(){
    $('.hide').click(function(){
        $('.paragraps-1,.paragraps-2').hide()
    })
})

$(function(){
    $('.show').click(function(){
        $('.paragraps-1 , .paragraps-2').show()
    })
})

// fade Efect

$(function(){
    $('#btn').click(function(){
        $('.div-1').fadeIn(1000);
        $('.div-2').fadeIn(2000);
        $('.div-3').fadeIn(3000);
        $('.div-4').fadeIn(4000);
        $('.div-5').fadeIn(5000);
        $('.div-6').fadeIn(6000);
    })
})

// slideDown 

$(function(){
    $('.btn').click(function(){
        $('.ptag').slideDown();
    })
})