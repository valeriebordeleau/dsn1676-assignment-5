var $form = $('form');
var $addToList = $('.list')
var $input = $('#add-item')

$form.on('submit',function (eventObject) {
     eventObject.preventDefault();
     
     var $listItem = $('<li>');
     $listItem.html($input.val())
     
     $addToList.append($listItem);
     
     $input.val('');
 });