o
 
    //Query for your div with the id of container and set it to a variable named $container
    const $container = $('#container');
    //console.log($container);
    //Create an <h1> element and set it to a variable called $h1 and console log it. Add some text inside the h1 element. Example text: 'Hogwarts'
    const $h1 = $('<h1>').text('Hogwarts');
    $('body').append($h1);
    //console.log($h1);
    //Test yourself
    //console.log(document);
    //h2 element with your name
    const $h2 = $('<h2>').text('De\'Amber Watson');
    $('body').append($h2);
    //h3 element with your house
    const $h3 = $('<h3>').text('Gryffindor');
    $('body').append($h3);
    //h4 element with your pet's name, his h4 element should have a class with a value of your pet type
    //h4 element with your wand
    const $h4 = [
      $('<h4>').addClass('owl').text('Starlight'),
      $('<h4>').text('Holly Wand with Unicorn Hair Core'),
    ];
    $('body').append($h4);
    //console.log(document);
