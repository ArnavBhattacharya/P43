class Form {

    constructor(){
        this.button = createButton('Online');
        this.message = createElement('h1');
    }

    display(){
        this.message.html("Multiplayer Parkour Game");
        
        this.message.position(displayWidth/2 - 50, displayHeight/2 - 50);
        this.button.position(displayWidth/2 - 30, displayHeight/2 + 30);
    }
}