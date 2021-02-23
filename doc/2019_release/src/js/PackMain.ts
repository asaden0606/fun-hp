'use strict';


//ここは絶対変えない
declare global {
    interface Window 
    {
        PackMain: any;
    }
}




import WatchMain from './watch/WatchMain';
import MenuMain from './menu/MenuMain';
import GameMain from './game/GameMain';


let watchInstance : WatchMain;
let menuInstance:MenuMain;
let gameInstance:GameMain;


require('../css/styles.css');
export class PackMain
{
    constructor()
    {


    }

    static watch():WatchMain
    {
        if(watchInstance === undefined)
        {
            watchInstance = new WatchMain();
        }

        return watchInstance;
    }

    static menu():MenuMain
    {
        if(menuInstance === undefined)
        {
            menuInstance = new MenuMain();
        }

        return menuInstance;        
    }

    static game():GameMain
    {
        if(gameInstance === undefined)
        {
            gameInstance = new GameMain();
        }

        return gameInstance;
    }

    static test()
    {
        $('#play').click(()=>{
            PackMain.game().start();
        });
        
        $('#stop').click(()=>{
            PackMain.game().stop();
        });    
        
    }
}


addEventListener("load",function(){
});

window.PackMain = PackMain;