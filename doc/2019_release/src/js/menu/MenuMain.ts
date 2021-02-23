import { PackMain } from "../PackMain";

export default class MenuMain
{
    public load():void
    {
        this.createCat();
        this.createMenu();
        this.createRupan(); 
        this.createPageTop();
    }

    private createCat():void
    {
        let $cat = $('#catButton');
        $cat.click(()=>{
            PackMain.game().start();            
        });
    }

    private createPageTop():void
    {
        let topBtn=$('#topButton');
        topBtn.hide();
                        
        $(window).scroll(function()
            {
            if($(this).scrollTop() > 80)
            {
                topBtn.fadeIn();        
            }
            else
            {
                topBtn.fadeOut();        
            } 
        });
        
            
        topBtn.click(function()
        {        
            $('body,html').animate({
                scrollTop: 0},500
                );
            return false;                 
        });
    }

    private static getRandom(min:number,max:number):number
    {
        return Math.random() * (max - min) + min;    
    }

    private createRupan()
    {
        let $title = $('#title');
        let titleText = $title.text();  
        $title.show();
        $title.text("");

        for(let i = 0; i < titleText.length;i++)
        {
            let c = titleText.substring(i,i+1);            
            let $item = $(`<text>${c}</text>`).appendTo($title); 
            $item.css('left',MenuMain.getRandom(-500,500));
            $item.css('top',MenuMain.getRandom(-500,500));
            $item.animate({left:0,top: 0}, 2000);
        }
    }

    private createMenu()
    {
        let items = new Array<JQuery>();    
        $('#menu_header').children().each((_,src)=>
        {
            let $src = $(src);
            let id = $src.get(0).id;
            let $content = $(`#content_${id}`);
            items.push($content);
            
            $src.on('click',()=>{
                this.view($content);
            });    
        }); 
    }    
    
    private view($viewItem:JQuery)
    {   
        PackMain.game().stop();
        let $currentView = $('.menu_content >*:visible');
        if($currentView.length == 0)
        {
            $viewItem.css('display','block');    
            $viewItem.animate({opacity: 1}, 500); 
        }
        else
        {
            $currentView.animate({opacity: 0}, 200,function(){
                $currentView.hide();
                $viewItem.css('display','block');
                $viewItem.animate({opacity: 1}, 1000);  
            });
        }
    }
}    

