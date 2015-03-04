var $form = $('form');
var $addToList = $('.list');
var $input = $('#add-item');
var $li =$('.list li');

$form.on('submit',function (eventObject) {
     eventObject.preventDefault();
     
     var $listItem = $('<li>');
     $listItem.html($input.val())
     
     $addToList.append($listItem).addClass($priority.val());
   
    var $listItem = $('<button class="delete">X</button>');
    
    var $priority = $('[name=priority]:checked');
 });

    $form.on('click', function () {
    var current = $addToList.offset ();
});

    $addToList.on('click', 'li', function () {
    $(this).toggleClass('grey-out');
});

    $addToList.on('submit', 'button', function () {
    $(this).addClass('delete');
});
