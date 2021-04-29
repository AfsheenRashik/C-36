class Game{


constructor(){

}


getState(){
    var gameStateRef = database.ref('gameState');

    // function without name is called an anonymous function which is created and called at the same place
    gameStateRef.on("value",function (data){
    gameState = data.val();
    })

}

update(state){
    database.ref('/').update({
    gameState:state

    })

}

start(){
    if(gameState===0){

        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
    }


    }

}