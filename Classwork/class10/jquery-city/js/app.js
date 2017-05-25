// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

$('.thumb').click(function(){
    var thumbnailsSrc = $(this).attr('src');
    $('#bigimage').attr('src', thumbnailsSrc);
    $('#first').next().css('border', '5px solid red');
})

// console.log($('#thumbnail').children())



// $('#first').click(function(){
//     var thumbnailsSrc = $('#first').attr('src');
//     $('#bigimage').attr('src', thumbnailsSrc);
// })


// $('#second').click(function(){
//     var thumbnailsSrc = $('#second').attr('src');
//     $('#bigimage').attr('src', thumbnailsSrc);
// })


// $('#third').click(function(){
//     var thumbnailsSrc = $('#third').attr('src');
//     $('#bigimage').attr('src', thumbnailsSrc);
// })


// $('#fourth').click(function(){
//     var thumbnailsSrc = $('#fourth').attr('src');
//     $('#bigimage').attr('src', thumbnailsSrc);
// })