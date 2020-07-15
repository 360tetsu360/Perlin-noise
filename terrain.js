function terrain(width,hight,random){
    var hightSa = 200;
    var terrain = {};
    for(let x = 0; x*10 <= width; x ++){
        var h = 10;
        var c = ('rgb(0%, 0%, 100%)');


        
        var hight = noise(x / 10,random) * 100;
        var y = -Math.round(hight / 10)*10 + hightSa;


        if(y > 160 ){
            fill(c);
            
            var deep = y - 170;
            var deepBlock = deep / 10;
            var num1 = 0;
            for(var blocks = 0; blocks <= deepBlock; blocks ++){
                
                rect(x*10 - width /2, y - blocks*10, 10, h);
                terrain['waterX' + x + 'under' + num1] = y - blocks*10;
                num1 +=10;
            }
            
        }
        else{
            fill('hsb(160, 100%, 50%)');
        }
        
        terrain['terrainX' + x] = y
        rect(x*10 - width /2, y, 10, h);
        var num2 = 0
        for(var under = y; under < height/2; under +=10){
            rect(x*10 - width/2 , under,10,h)
            if(under < y+10){
                fill('hsb(160, 100%, 50%)');
            }else{
            fill(255, 204, 0);
            terrain['UnderX' + x + 'under'+num2] = under;
            num2 += 10
        }}
        
    }
    
}