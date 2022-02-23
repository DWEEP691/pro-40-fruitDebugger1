class Form{
    constructor(){
       this.input = createInput("").attribute("placeholder","Enter your name here");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(625, 100);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(650,300);
        this.input.class("input");
        this.button.position(650,500);
        this.button.class("button");
        this.reset.position(950,500);
        this.reset.class("button");

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name);
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '50px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);



            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();

            
        });

    }
}