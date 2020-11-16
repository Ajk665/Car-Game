class Form{

    constructor(){

    }

    display(){

        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(250,100);

        var textbox = createInput('name');
        textbox.position(250,200);

        var button = createButton('PLAY');
        button.position(250,400);

        button.mousePressed(function(){
            textbox.hide();
            button.hide();

            var name = textbox.value();
            player.update(name);

            playerCount+=1;
            player.updateCount(playerCount);
            
            var Greeting = createElement('h2');
            Greeting.html("Hello "+ name);
            Greeting.position(250,250);
        })
    }



}