//let filter1 = document.getElementsByClassName("filter1");
//let f1 = document.getElementById("f1");

//f1.click(function(){
//    document.filter1.style.display="none";
//}) 

$(document).ready(function(){

    $('#udal').click(function(){
        $('.udalit').hide(0);
        $('.poyavis').fadeIn(200);
        $('.poyavis').css('display','flex');
    })

    $('#f1').click(function(){
        $('.fill1').toggleClass('filter1');
    })

    $('#f2').click(function(){
        $('.fill2').toggleClass('filter2');
    })
})

