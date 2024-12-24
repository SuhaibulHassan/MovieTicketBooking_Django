// $('card').on('click',()=>{
document.getElementById('card').addEventListener('click',()=>{
    let urlsegment=document.getElementById('card').getAttribute('href');
    console.log(urlsegment);
     $.ajax({
        type:'POST',
        url:'http://localhost:8000/movieticket/book/',
        data:urlsegment,
        contentType: 'application/json',
        success:function(urlsegment){
            console.log(urlsegment)
        }
    });
// });
})
// var url='http://localhost/movieticket/success/'
