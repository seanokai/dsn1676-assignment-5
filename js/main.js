
var $form = $('.form');
var $list = $('.list');
var $input = $('.input');

$form.on('submit', function (e) {
    e.preventDefault();

    var $li = $('<li>').html($input.val());
    var $inputDl = $('<button class="close xbutton ">x</button>');
    
    $inputDl.on('click', function () {
        $li.remove('li');
    });
    
