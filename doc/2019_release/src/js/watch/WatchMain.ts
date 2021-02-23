



export default class WatchMain
{
    private items:Map<string,WatchItem>;
    private youbis:Array<String>;
    private summerMonths:Map<number,boolean>;
    private beforeAddDays:Map<number,number>;
    private afterAddDays:Map<number,number>;
    constructor()
    {
        this.items = new Map<string,WatchItem>();
        this.items.set("jpn",new WatchItem(            
                "日本",
                0,
                0,
                false,
                "09:00",
                "15:00"
        ));


        this.items.set("chi",new WatchItem(
                "中国",
                -1,
                0,
                false,
                "09:30",
                "15:00"));


        this.items.set("eng",new WatchItem(
                "イギリス",
                -9,
                0,
                true,
                "08:00",
                "16:30"
        ));



        this.items.set("ame",new WatchItem(
                "アメリカ",
                -14,
                0,
                true,
                "09:30",
                "16:00"
        ));

        this.youbis =
        new Array("日","月","火","水","木","金","土");

        this.summerMonths = new Map<number,boolean>();
        this.summerMonths.set(3,true);
        this.summerMonths.set(4,true);
        this.summerMonths.set(5,true);
        this.summerMonths.set(6,true);
        this.summerMonths.set(7,true);
        this.summerMonths.set(8,true);
        this.summerMonths.set(9,true);
        this.summerMonths.set(10,true);


        this.beforeAddDays = new Map<number,number>();
        this.beforeAddDays.set(0,1); //日曜日
        this.beforeAddDays.set(1,0); //月曜日
        this.beforeAddDays.set(2,0); //火曜日
        this.beforeAddDays.set(3,0); //水曜日
        this.beforeAddDays.set(4,0); //木曜日
        this.beforeAddDays.set(5,0); //金曜日
        this.beforeAddDays.set(6,2); //土曜日


        this.afterAddDays = new Map<number,number>();
        this.afterAddDays.set(0,1); //日曜日
        this.afterAddDays.set(1,1); //月曜日
        this.afterAddDays.set(2,1); //火曜日
        this.afterAddDays.set(3,1); //水曜日
        this.afterAddDays.set(4,1); //木曜日
        this.afterAddDays.set(5,3); //金曜日
        this.afterAddDays.set(6,2); //土曜日
    }

    public create(viewID:String)
    {
        let text ="";

        text += "<Table border='1'>";
        text += "<tr>";
        text += "<th>名前</th>";
        text += "<th>現在日時</th>";
        text += "<th>マーケット時間</th>";
        text += "<th>マーケット状態</th>";
        text += "</tr>";


        this.items.forEach((item,key)=>
        {
            let idCurrent = key +"_current";
            let idMarket = key +"_market";

            text += "<tr>";
            text += "<td>";
            text += item.name;
            text += "</td>";

            text += "<td id='${ID}'>".replace("${ID}",idCurrent);
            text += "XXX";
            text += "</td>";

            text += "<td>";
            text += item.openDate +"～" + item.closeDate;
            text += "</td>";

            text += "<td id='${ID}'>".replace("${ID}",idMarket);
            text += "xxx";
            text += "</td>";

            text += "</tr>";
        });


        text += "</table>";
        $('#' + viewID).html(text);

        this.updateColumns();
    }

    private updateColumns()
    {
        this.items.forEach((item,key)=>{        
            let idCurrent = key +"_current";
            let idMarket = key +"_market";

            this.updateCurrentWatch(idCurrent,item);
            this.updateMarket(idMarket,item);
        });

        setTimeout(()=>{this.updateColumns()}, 1000 * 1);
    }


    private targetDate(item:WatchItem)
    {
        let date = new Date();
        let addHours = item.addHours;
        let addMinutes = item.addMinutes;
        if(item.summer === true && this.summerMonths.has(date.getMonth()))
        {
            addHours += 1;
        }


        date.setHours(date.getHours() + addHours);
        date.setMinutes(date.getMinutes() + addMinutes);

        return date;
    }

    private updateCurrentWatch(id:String,item:WatchItem)
    {
        let date = this.targetDate(item);
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let youbi = this.youbis[date.getDay()];

        let text = "";
        text += ("00" + month).slice(-2);
        text += "/";
        text += ("00" + day).slice(-2);
        text += " ";

        text += ("00" + hours).slice(-2);
        text += ":";
        text += ("00" + minutes).slice(-2);

        if(youbi === "日" || youbi === "土")
        {
            text += "(";
            text += "<font color='red'>";
            text += youbi;
            text += "</font>";
            text += ")";
        }
        else
        {
            text += "(";
            text += youbi;
            text += ")";
        }


        $('#' + id).html(text);
    }

    private getClocks(date:string):number
    {
        let texts = date.split(":");
        let hours = Number(texts[0]);
        let minutes = Number(texts[1]);

        let result = 0;
        result += minutes    *  60 * 1000;
        result += hours * 60 *  60 * 1000;

        return result;
    }


    private newClock(current:Date,clock:number):Date
    {
        let tmp = new Date(
                current.getFullYear(),
                current.getMonth(),
                current.getDate());


        let date =  new Date(tmp.getTime() + clock);
        //let key = String(current.getDay());
        //加算
       // console.log(key);

        //date.setDate(date.getDate() + PRE_ADD_DAYS[key]);

        return date;
    }



    private calcAddDay(current:Date,open:Date,close:Date):number
    {
        let key = current.getDay();
        if(close.getHours() <= current.getHours())
        {
            return this.afterAddDays.get(key);
        }
        else
        {
            return this.beforeAddDays.get(key);
        }
    }

    private updateMarket(id:string,item:WatchItem)
    {
        let $view = $('#' + id);
        let current:Date = this.targetDate(item);
        let open:Date = this.newClock(current,this.getClocks(item.openDate));
        let close:Date = this.newClock(current,this.getClocks(item.closeDate));
        let text = "";
        let span;
        if(1 <= current.getDay() &&
            current.getDay() <= 5 &&
            open.getTime() < current.getTime() && current.getTime()  < close.getTime())
        {
            span = new Date(close.getTime() - current.getTime());

            text = "オープン中";
            text += "(終了まで";
            text +=  span.getUTCHours();
            text += "時間";
            text += span.getUTCMinutes();
            text += "分)";
            $view.attr('class','buy');
        }
        else
        {
            //next計算
            let addDays = this.calcAddDay(current,open,close);

            //console.log(addDays);
            open.setDate(open.getDate() + addDays);
            close.setDate(close.getDate() + addDays);



            span = new Date(open.getTime() - current.getTime());

            //console.log(open,current);


            text = "クローズ";
            text += "(開始まで";
            text += (span.getUTCDate() - 1) * 24 + span.getUTCHours();
            text += "時間";
            text += span.getUTCMinutes();
            text += "分)";

            $view.attr('class','sell');
        }

        $view.html(text);
    }
}


class WatchItem
{
	public name:string 
    public addHours:number
    public addMinutes:number
    public summer:boolean
    public openDate:string
    public closeDate:string


    constructor(inName:string,inHours:number,inMinutes:number,inSummer:boolean,inOpenDate:string,inCloseDate:string)
    {
        this.name = inName;
        this.addHours = inHours;
        this.addMinutes = inMinutes;
        this.summer = inSummer;
        this.openDate = inOpenDate;
        this.closeDate = inCloseDate;
    }
}



