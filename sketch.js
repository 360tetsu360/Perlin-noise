function setup(){
    
    createCanvas(2000,500 ,WEBGL);
    background('skyblue');
    terrain(width,height);
    
    ellipse(200, -180, 120);
}
function draw(){
    randomNum = random(1,100) * random(1,100)
    document.getElementById('btn').onclick = function(){
        background('skyblue');
        terrain(width , height, randomNum);
        ellipse(200, -180, 120);
    }
}
