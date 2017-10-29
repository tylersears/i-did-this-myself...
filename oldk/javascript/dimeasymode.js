/*
This game and levels were edited using Jacob's Platformer Engine Pro (V1.0)
https://www.khanacademy.org/computer-programming/platformer-engine-pro-version-10/5991819078533120
CREDIT to Ryan Kee for monsters
*/

/***

"DIMENSION"-the game

I took a long time making this game, 
But it would have taken even longer if it weren't for Jacobs Platformer- Engine 
https://www.khanacademy.org/computer-programming/platformer-engine-pro-version-10/5991819078533120

Click the top right buttons to change your power and character
Press and hold on the screen to activate your power
Each character has a different power.
Once you are done choosing your power click play
click the "HOW TO PLAY" button to see how to play
Stay tuned for more levels that are comming soon

Angel is the Easy version
I hope you like it.

***/




var boy2 = "BOB";//Change the boys name
var girl = "Sarah";//Change the girls name
var ninjaLook = 0;
var votes = 20;


var xpos5 = 0;
var speed5 = 1;


var xpos2 = 50;
var speed2 = 1;

var xpos3 = 50;
var speed3 = 1;
var falling = 43;


var Time = 0;
var Typing = 0.5;

var startScreen = true;
var sound_off_on =true;//make this variable false if you don't want sound
var boy =["BOB"];
var death_count = 0;
var male_or_female = "male";
var suits = "ninja";
var suits56 = false;
var powerCursor=true;
var powerUP = "ultraNinja";
var FEMALE_OR_MALE_POSSITION = -148;
var MORE = false;
var if_has_votes = true;
var male = color(7, 176, 18);//Change the male color
var female = color(214, 8, 190);//Change the female color
var sounds={
monsterDeath:getSound("rpg/giant-no"),
NinjaDeath:getSound("retro/boom2"),
DoneWithLevel:getSound("retro/whistle2"),
Lava:getSound("rpg/water-bubble"),
JUMP:getSound("retro/jump1"),
SPIKE:getSound("rpg/hit-splat"),
gandalf:getSound("retro/whistle1"),
press:getSound("retro/whistle1"),
matelPower:getSound("rpg/metal-clink"),
ground:getSound("rpg/metal-clink"),


}; 
var awesome_button = 0;
var LOGOSTATE=true;
var scene = 1;
var COOL = 0;
var move = 0;
var move2 = 0;
var move3 = 0;
var move4 = 0;
var move5 = 0;
var sun_and_beam_sise = 60;
var monster_Body =color(77, 77, 77);
var monster_Outside_Of_Eye =color(255, 255, 255);
var monster_Main_Eye =color(0, 0, 0);
var monster_Pupil =color(255, 255, 255);
var moreDown =55;
var soundMakeSure = "on";
var spoundButton = 0; 
var spoundButtonY = -46; 
var howToDoIt = false;
var CREDITS = false;
var block = color(148, 91, 6);
var evil123 = 0;
var metal546 = 0;
var angel2 = 0;
var angel = -150;
var beard2 = 0;
var beard = 120;
var female_or_male56 = false;
var playerRightEye = -45;
var curves = -40;
var playerColorStart = color(0, 0, 0);
var alchemey = "default";
var alchemey2 = "male";
var alchemey3 = "defualt";
var back = color(4, 183, 196);
var square = 0;
var square2 = 0;
var epicScene = 0;
var cloud = 155;
var EyeLash = 15;
var move = 0;
var move2 = 0;
var xpos3 = 1;
var sun_and_beam_sise = 60;
var playerSize = [35,30];
var pJumpHeight=10.5;
var monster_color = color(54, 53, 54);
var BackColor = color(0, 0, 0);
var grid = 50;
var speedoMeter = 12;
var X = 0;
var offset = 0;
var offset2 = 0;
var offset3 = 0;
var xpos = 0;
var xpos2 = 0;
var speed = 1;
var speed2 = 1;
var Side_To_Side = 0;
var black = color(0, 0, 0);
var white = color(255, 255, 255);
/***********vvv ADD YOUR LEVELS HERE vvv***********/
var levels = [
    //Replace these with the code for your levels.
    //You can add as many as you want. just put them one after the other.
[
"                   b",
"@                  b",
"bbbbb & &b& & &b   b",
"b                  b",
"b                  b",
"b                  b",
"b                  b",
"b           A     Mb",
"b&   b&    bb&    bb",
"b                  b",
"b                  b",
"b                  b",
"b                  b",
"bM  A      b       b",
"bb  b  b   bb P   bb",
"b##########bbb   bbb",
"bbbbbbbbbbbbbbbbbbbb",

],
[
"                   b",
"@                  b",
"bbb  b  b          b",
"b    %             b",
"b                  b",
"b         b        b",
"b                  b",
"b&     b&          b",
"b                  b",
"b   b              b",
"b        %         b",
"b                  b",
"b                  b",
"bM               bbb",
"bb  b&  b   b   bbPb",
"b                  b",
"bbbbbbbbbbbbbbbbbbbb",

],
[
"                   ",
"                   ",
"@  b   _      b  % ",
"bbbb     %         ",
"bbb                ",
"bb  A       #      ",
"b   b              ",
"b                 M",
"b       _         b",
"b   #   %   _     %",
"b%                 ",
"b   _              ",
"b      A   M       ",
"b _    b   b  P    ",
"b           b   bbbb",
"b############b bbbbb",
"bbbbbbbbbbbbbbbbbbbb",

],
[
"b      A   A       b",
"b      b @ b       b",
"b #%   %bbb%     MAb",
"b          &   &bbbb",
"bM                 b",
"bbb&  #          # b",
"b&        b__&     b",
"b M A             %b",
"b bbb___%    &     b",
"b%         #    MA b",
"b   #        ___bbbb",
"b&    &      &  # #b",
"bM      AM         b",
"bbb    bbbbbb   ###b",
"b&    &       &bbbbb",
"b                  P",
"bbbbbbbbbbbbbbbbbbbb",

],
[
"         %    %    ",
"      A     A   A b@",
"b  &bbbbbbbbbbbbbbbb",
"    b&%     %     &b",
"   b               ",
" bb      A   A     ",
"       bbbbbbbbbb  ",
"      b& %   %  &b ",
"M    b           b ",
"bbbbb    A  A       ",
"        bbbbbbbA    ",
"      Ab&  %  %b   ",
"      b         b MM",
"   bbb    bbbb   bbb",
"MM      Ab####b    P",
"bb      b######bbbbb",
"bbbbbbbbbbbbbbbbbbbb",

],
[
"        @b         ",
"     bbbbb         ",
"                   ",
"                   ",
" M                 ",
" b  _   b   _   b  ",
"                   ",
"  % % % % % % % % %",
"                   ",
"  A   A   A   A   AM",
" bb  bb  bb  bb  bbb",
"                   ",
"                   ",
"                   ",
"M                  P",
"b##b###b###b###b###b",
"bbbbbbbbbbbbbbbbbbbb",

],
[
"                   ",
"                   ",
"                   ",
"                   ",
" b #      #  % #   ",
"    b & b       & b&",
"& %    # %  &   b  b",
" b  @&      b M   #",
" M &b   & #        ",
"   b #b b M  M  & b",
"b&  & % & % b b b &#",
" b      b   && &  bM",
"  # & &   bb      b",
" M %b b %  b&    b %",
"%           b P b #",
" b&&&&&  b&& bbb &&",
"bbbbbbbbbbbbbbbbbbbb",

],

  
[
"             bbbb  ",
"  bbbb b b  b % b  ",
" b b  b b bb     b ",
"b    %     &  b  %b",
"@ b b bAbAbbbb%b  b",
"bbb &  b b    b& b ",
"   b A &    bb& b  ",
"   b b  b%b b& b   ",
"  b   %  b &   %b  ",
" b&% b b    b  b  b",
" b&     b  bA   bb ",
" b&b  b  b  bb & %b",
" bA b    bA&  bA  b",
"##b##bb#b#b    bb  b",
"###b######bAb&   b b",
"###b##b#b##b#b    Pb",
"bbbbbbbbbbbbbbbbbbbb",

],

[
"b  b%%%%%%%%%%%%%%%b",
"b @b              %b",
"b bb   b%b%b%b%b%bbb",
"b AA              %b",
"b                 %b",
"bbbbbbbbbbbbbbbb  %b",
"b %##%  %##%##%   %b",
"b                 %b",
"b       bbbbbbbbbbbb",
"b&                %b",
"b&A  A  A  A      %b",
"bbbbbbbbbbbbb     %b",
"b##### % %###     %b",
"b%             A  &b",
"b%       bbbbbbbbbbb",
"b&                 P",
"bbbbbbbbbbbbbbbbbbbb",

],
[
"               @AAAA",
"      M bbbbbbbb####",
"   MM              ",
"   %%   %%   %%    ",
"   ##   ##   ##    ",
" b                  ",
"bb    b    b    bb ",
" %    %    %    % b",
"                   ",
"    %   %   %    % ",
"  bA AbA AbA AbbA Ab",
"  bb bbb bbb bbb    ",
"b              %bbbb",
"               %b P%",
" M             %   %",
"b&&&&&&&&&&&&&&&&b b",
"bbbbbbbbbbbbbbbbbbbb",

],
[
"@AA                ",
"bbb                ",
"MM  MM             ",
"AM MM    b#        ",
"MMAM      bb       ",
"MM    b       #A## ",
"MA  Ab &bb  &bbbbbb",
"MM bb  b  %  %% %% ",
"MM   &b  # &b%     ",
"     b  %b% %% &b# ",
"     b  % b#& # %b ",
"      b#% % & b&%%b",
"       bA   b  &b  ",
"        bbb#       ",
"           bbb#   bb",
"              bbb P ",
"                 b ",
"bbbbbbbbbbbbbbbbbbbb",

],
    [
"                   ",
"%   bbbbbbbbbbb    ",
" %  &%& &b#####bAA P",
"   % %   % % %  bbbb",
"###bbbb      bbbb  ",
"##b### bA % b& %&b ",
"#b     &b %       b",
"bb bbb % b% % b b b",
"b  #bb%  &b  b  b b",
"b b#b   bbb b% b#%b",
"  ##b b& #b%b b# &b ",
" bbb % b%   b b %b ",
" bb# b bb& b# b  #b",
"  b#%  bbbb## %  ##b",
" @b#    #  &   &A##b",
"bbb# A%    &Abbbbbbb",
"bbbbbbbbbbbbbbbbbbbb",

],

[
"                   ",
"    @              ",
"  bbbbb     b      ",
" b% % %b    %b     ",
"b      %b bb #b    ",
"    A   %b##%##bbb ",
"   bbb   %b# #b   b",
"  b  %bA  %b b     b",
" b     b           ",
" b  b  %bA  M  Abb ",
" b###bA  b     b  b",
"Mb####b  %b%%%b    b",
" b#####b   bbb     ",
" bbbbbbb        bA ",
"               b b ",
"M         bbbbb   bP",
"bbbbbbbbbbbbbbbbbbbb",

],
  [
"                   b",
"@                  b",
"bb   & #     &     b",
"b           #    # b",
"b  &               b",
"b   #  % &     %& &b",
"b           #&   & b",
"b                  b",
"b&    &         _  b",
"b %    &    % &    b",
"b         &        b",
"b              %   b",
"bM                 b",
"b                 Pb",
"b_    _     _     _b",
"b##################b",
"bbbbbbbbbbbbbbbbbbbb",

],

[
"           @       ",
"   b b b bbb       ",
"                   ",
"                   ",
"  M                ",
"  bbb %% bbb % bbb ",
"  %%      %     % b",
"                   ",
"                   ",
"   bbb % %bb % bbb b",
"  b                ",
"                   ",
"                   ",
" bb  A bb  A bb     ",
"##################bP",
"##################bb",
"bbbbbbbbbbbbbbbbbbbb",

],

[
"     ###           ",
"    ###b           @",
"   ###b%  bbbbbbbbbb",
"  ###b% &b  %  %  %%",
" ###b%  b%    &    ",
" ###b% b%  bbbbbbb &",
"###b% &b%& b&   %  b",
"###b%&b   b&      %b",
"#bbb &b%  b  bbbbbbb",
"b%   bb  %  %b##   #",
"%   &bb  b& #b#    #",
"  bbbbb% b b#b# bb b",
"&  %b#b  b b#b# b   ",
"b&  %bb  b  #b# b  P",
"b#b       b  b# b b ",
"b##b&  &  b&    b b",
"bbbbbbbbbbbbbbbbbbbb",

],

[
"b                  b",
"b@   b             b",
"bbbbbb % % % % % % b",
"b&   #             b",
"b  #    #  %       b",
"b%    %      #  #  b",
"b         #     %  b",
"b &  #  #    A     b",
"b% # A %  %   #    b",
"b       &  #   #   b",
"b% &# #  #    %  M b",
"b         A  &   bPb",
"b%# %& #       #&b b",
"b        %  #    bMb",
"b   #     &    A bbb",
"b###################",
"bbbbbbbbbbbbbbbbbbbb",

],
[
"            % %b % %",
"         # b&b   % ",
"@    b %  b%b  %b #b",
"bb  b% b b&   # b& b",
"  %   #    % b  % %",
" %%%b  b%b # %&b  b",
" b %b% %b&  %    b b",
"      b% % b b%#  #%",
" #% & %   b&%   bbb",
"   %b#  #%% %b& &  ",
" % b%bb   bb #b%bb%b",
" b&%b  b% bb%   %  ",
"   b%b%  b  % b %  ",
"  %   b #   b  b%b ",
"# b&    %%    %    ",
"    A   %b # A   b P",
"bbbbbbbbbbbbbbbbbbbb",

],
[
"                   b",
"@  #&      %   & # b",
"b           #    % b",
"b    % #           b",
"b% #          %    b",
"b           #   #% b",
"b  &   %      &    b",
"b      # &         b",
"b%     %   %    % &b",
"b  b               b",
"b b                b",
"b                  b",
"b%      %     %    b",
"b                 Pb",
"bM    _    _     __b",
"b##################b",
"bbbbbbbbbbbbbbbbbbbb",

],
[
"b                 @b",
"b            bbbbbbb",
"b %      #%      % b",
"b                  b",
"b &     &    #     b",
"b   #      %  %  # b",
"b                  b",
"b     %         &  b",
"b #                b",
"b       & #        b",
"b%                 b",
"b    #%   %        b",
"b &             & Pb",
"b                 Mb",
"b##################b",
"b##################b",
"bbbbbbbbbbbbbbbbbbbb",

],

    ];
/******* vvv DON'T TOUCH THOSE! vvv ******/
var level = 0;
var keys = [];
var level_h = 800;
var level_w = 800;
var transparence = 0;
var redTrans = 0;
var cam;
//@key interaction
keyPressed = function(){keys[keyCode]=true;};
keyReleased = function(){ keys[keyCode]=false; };

var polygonCollide = function(shape1, shape2) {

    var isBetween = function(c, a, b) {
        return (a - c) * (b - c) <= 0;
    };
    /* Do ranges a and b overlap? */
    var overlap = function(a, b) {
        return isBetween(b.min, a.min, a.max) || isBetween(a.min, b.min, b.max);
    };
    
    /*
     * Project shape onto axis.  Simply
     * compute dot products between the
     * shape's vertices and the axis, and
     * keep track of the min and max values.
     */
    var project = function(shape, axis) {
        var mn = Infinity;
        var mx = -Infinity;
        for (var i = 0; i < shape.length; i++) {
            var dot = shape[i].x*axis.x + shape[i].y*axis.y;
            mx = max(mx, dot);
            mn = min(mn, dot);
        }
        return { min: mn, max: mx };
    };
    
    /* Compute all projections axes of shape. */
    var getAxes = function(shape) {
        var axes = [];
        for (var i = 0; i < shape.length; i++) {
            var n = (i + 1) % shape.length; 
            /*
             * The edge is simply the delta between i and n.
             * The axis is the edge's normal. And a normal 
             * of (x, y) is either of (y, -x) or (-y, x).
             */
            axes[i] = {
                y: shape[i].x - shape[n].x,
                x: -(shape[i].y - shape[n].y)
            };
        }
        return axes;
    };

    var shapes = [ shape1, shape2 ];
    for (var s = 0; s < shapes.length; s++) {
        var axes = getAxes(shapes[s]);
        for (var i = 0; i < axes.length; i++) {
            var axis = axes[i];
            /* Project both shapes onto this axis */
            var p1  = project(shape1, axis);
            var p2  = project(shape2, axis);
            if (! overlap(p1, p2)) {
                /* The two shapes cannot overlap */
                return false;
            }
        }
    }
    return true;  /* they overlap */
};//for triangular collisions


var Camera = function(x,y){
    this.x=x; this.y=y; this.w=width; this.h = height;
    this.view = function(plyer){
        this.x=plyer.x;
        this.y=plyer.y;
        
        this.x = constrain(this.x,this.w/2,level_w-this.w/2);
        this.y = constrain(this.y,this.h/2,level_h-this.h/2);
        translate(200-this.x,200-this.y);
    };
};

var view = function(obj){
    return obj.x+200-cam.x<width&&obj.x+200-cam.x>-obj.w&&
    obj.y+200-cam.y<height&&obj.y+200-cam.y>-obj.h;
};


var collide=function(obj1,obj2){ 
    return obj1.x<obj2.x+obj2.w&&obj1.x+obj1.w>obj2.x&& 
    obj1.y<obj2.y+obj2.h&&obj1.y+obj1.h>obj2.y;
};

var Player = function(x,y,w,h){
    this.x=x; this.y=y;
    this.w=w; this.h=h; 
    this.speed = 0.5;
    this.yvel = 0; this.xvel = 0;
    this.gravity = 0.3; this.JH = pJumpHeight;
    this.falling = false; this.speedLimit = 5;
    this.fallLimit = 8; this.health = 1000000;
    this.powerBar = 100;this.dir = 0; this.color = male;//art stuff
    this.dead = false; this.deadTimer = 0; 
    this.update = function(blocks){
        this.sight = this.w/4;//calculate the offset of the face based on the width of the player.
        if(startScreen===false){
        if(!this.dead){//moving
        if(keys[UP]&&!this.falling){ this.yvel=-this.JH;
        if(sound_off_on===true){
        playSound(sounds.JUMP); 
        }
        }
        if(keys[RIGHT]){this.xvel+=this.speed; this.dir+=this.speed;}
        if(keys[LEFT]){ this.xvel-=this.speed; this.dir-=this.speed;} 
        }
        if(!keys[RIGHT]&&!keys[LEFT]){
        if(this.dir>0){this.dir-=this.speed;}
        if(this.dir<0){this.dir+=this.speed;}
        if(this.xvel>0){this.xvel-=this.speed;}
        if(this.xvel<0){this.xvel+=this.speed;}
        }
        this.dir = constrain(this.dir,-this.sight,this.sight);
        this.xvel=constrain(this.xvel,-this.speedLimit,this.speedLimit);
        if(this.yvel>this.fallLimit){ this.yvel=this.fallLimit; }
        this.x = constrain(this.x,0,level_w-this.w);
        this.x+=this.xvel;
        this.applyCollision(blocks,this.xvel,0); // apply speed and collisions
        this.falling=true;
        this.y+=this.yvel;
        this.applyCollision(blocks,0,this.yvel);
        this.yvel+=this.gravity;
        
        if(this.health<=0){
            this.dead = true;
        }
        if(this.dead){
            this.deadTimer++;
        }
        }
    };
    this.draw = function() {
    noStroke();
    var d = (this.dir/this.w)*15;
    fill(this.color);
    if(male_or_female === "female"){
    
    fill(female);    
        
    }

    if(suits === "ninja"){
        
    fill(74, 74, 74);

    }
    if(powerUP === "ultraNinja"){
    fill(0, 0, 0);
    }
    
    if(suits === "evil"){
    
    fill(145, 140, 140);
    arc(this.x+25+-28,this.y+-9,this.w+15,this.h+15,30,60);
    arc(this.x+25+14,this.y+-9,this.w+15,this.h+15,120,150);
    
    fill(179, 7, 7);
        
    }  
    if(powerUP==="gandalf"){
    this.health+= 0.008;    
    }
    if(powerUP === "gandalf"&&suits === "wizard"&&this.health<100){
    fill(255, 255, 255,50);
    ellipse(d+this.x+45,this.y+-9,this.w+10,this.h+10);
    ellipse(d+this.x+45,this.y+-9,this.w+20,this.h+20);
    }
    if(powerUP==="gandalf"&&suits === "wizard"&&mouseIsPressed&&this.powerBar>5){
        
    fill(255, 255, 255,150);
    
    ellipse(d+this.x+45,this.y+-9,this.w+10,this.h+10);
    ellipse(d+this.x+45,this.y+-9,this.w+20,this.h+20);
    
    arc(d+this.x+45,this.y+-9,this.w+2000,this.h+2000,move2+20,move2+40);
    arc(d+this.x+45,this.y+-9,this.w+2000,this.h+2000,move2+20+45,move2+40+45);
    arc(d+this.x+45,this.y+-9,this.w+2000,this.h+2000,move2+20+90,move2+40+90);
    arc(d+this.x+45,this.y+-9,this.w+2000,this.h+2000,move2+20+90+45,move2+40+90+45);
    arc(d+this.x+45,this.y+-9,this.w+2000,this.h+2000,move2+20+180,move2+40+180);
    arc(d+this.x+45,this.y+-9,this.w+2000,this.h+2000,move2+20+180+45,move2+40+180+45);
    arc(d+this.x+45,this.y+-9,this.w+2000,this.h+2000,move2+20+180+90,move2+40+180+90);
     arc(d+this.x+45,this.y+-9,this.w+2000,this.h+2000,move2+20+180+90+45,move2+40+180+90+45);
     move2+=1;
    }
    if(suits === "angel"){
    noStroke();
    fill(255, 255, 255,150);
    arc(this.x+18,this.y+10,this.w+50,this.h+50,move+140,move+160); 
    arc(this.x+18,this.y+10,this.w+50,this.h+50,move+140+180,move+160+180); 
    arc(this.x+18,this.y+10,this.w+50,this.h+50,move+140+90,move+160+90); 
    arc(this.x+18,this.y+10,this.w+50,this.h+50,move+140+90+180,move+160+90+180); 
    strokeWeight(3);    
    stroke(255, 251, 0);
    fill(255, 0, 0,0);
    ellipse(this.x+18,this.y+-9,this.w+15-3,this.h+-18);
    noStroke();
    
    fill(255, 255, 255);
    }
    if(powerUP === "ultraAngel"&&keyPressed&&mouseIsPressed){
        
    fill(255, 187, 0);
    arc(this.x+18,this.y+10,this.w+50,this.h+50-40,160,220);  
    arc(this.x+18,this.y+10,this.w+50,this.h+50-40,140+180,200+180);  
    fill(255, 255, 255);
    }
    if(suits === "wizard"){
    
    fill(97, 97, 97);
    arc(this.x+17,this.y+-21,this.w+150,this.h+-100,140+120,160+120);
    }
    if(suits === "metal"){
    fill(48, 47, 48);
    square=-50;
    square2=-20;
    }else{
    square=0;    
    square2=0;    
    }
    if(powerUP === "darkMetal"){
    
    fill(5, 136, 153,random(100,200));
    if(powerUP === "darkMetal"&&mouseIsPressed){
    fill(255,242,0,random(100,200));    
    }
    ellipse(this.x+18,this.y+14,this.w+30,this.h+30);    
    arc(this.x+18,this.y+14,this.w+50,this.h+50,move+20,move+40);
    arc(this.x+18,this.y+14,this.w+50,this.h+50,move+20+180,move+40+180);
    arc(this.x+18,this.y+14,this.w+50,this.h+50,move+20+180+90,move+40+180+90);
    arc(this.x+18,this.y+14,this.w+50,this.h+50,move+20+180+90+45,move+40+180+90+45);
    arc(this.x+18,this.y+14,this.w+50,this.h+50,move+20+180+90+45+90,move+40+180+90+45+90);
    arc(this.x+18,this.y+14,this.w+50,this.h+50,move+20+180+90+45+90+45,move+40+180+90+45+90+45);
    arc(this.x+18,this.y+14,this.w+50,this.h+50,move+20+180+90+45+90+45+45,move+40+180+90+45+90+45+45);
    arc(this.x+18,this.y+14,this.w+50,this.h+50,move+20+180+90+45+90+45+45+90,move+40+180+90+45+90+45+45+90);
    fill(48, 47, 48); 
    }
    if(powerUP === "darkMetal"&&suits === "metal"&&mouseIsPressed){
        
    fill(255,242,0);
        
    }

    rect(this.x,this.y,this.w,this.h,(this.w+this.h)/20+50+square);
    rect(this.x+5,this.y+10,this.w+-25,this.h,(this.w+this.h)/20+50);
    rect(this.x+20,this.y+10,this.w+-25,this.h,(this.w+this.h)/20+50);
    arc(this.x+25,this.y+10,this.w+15,this.h+15,20,40);
    arc(this.x+10,this.y+10,this.w+15,this.h+15,140,160);
    
    fill(245, 0, 0);
    textSize(15);
    text(boy[0],this.x+16,this.y+-10);
    
    this.eyeSize = (this.w+this.h)/10;
    
    if(suits==="ninja"&&male_or_female === "female"){
    fill(female);
    rect(this.x+5+-2,this.y+11+-7,this.w+-25+18,this.h+-18,(this.w+this.h)/20+50);
    }
    if(suits==="ninja"&&male_or_female === "male"){
    fill(male);
    rect(this.x+5+-2,this.y+11+-7,this.w+-25+18,this.h+-18,(this.w+this.h)/20+50);
        
    }
    if(suits === "wizard"){
    
    fill(247, 207, 62);
    rect(this.x+5+-4.5,this.y+11+-7,this.w+-25+24,this.h-15,(this.w+this.h)/20+50);
    fill(30, 0, 255);
    }
    if(suits === "ninja"&&powerUP === "ultraNinja"){
        
    fill(255, 0, 0);
    rect(this.x+5+-4,this.y+11+-9,this.w+-25+18+4,this.h+-18+4,(this.w+this.h)/20+50);
    fill(0, 0, 0);
    rect(this.x+5+-2,this.y+11+-7,this.w+-25+18,this.h+-18,(this.w+this.h)/20+50);
    }
    
    if(male_or_female === "female"){
    fill(0, 0, 0);
    if(suits === "ninja"&&powerUP === "ultraNinja"&&male_or_female === "female"){
    fill(255, 255, 255);
    }
    arc(d+this.x+10,this.y+10,this.w+-20,this.h+-20,215,220);
    arc(d+this.x+10,this.y+10,this.w+-20,this.h+-20,245,250);
    arc(d+this.x+10,this.y+10,this.w+-20,this.h+-20,275,280);
    arc(d+this.x+10,this.y+10,this.w+-20,this.h+-20,305,310);
    
    arc(d+this.x+10+EyeLash,this.y+10,this.w+-20,this.h+-20,215,220);
    arc(d+this.x+10+EyeLash,this.y+10,this.w+-20,this.h+-20,245,250);
    arc(d+this.x+10+EyeLash,this.y+10,this.w+-20,this.h+-20,275,280);
    arc(d+this.x+10+EyeLash,this.y+10,this.w+-20,this.h+-20,305,310);
    
    arc(d+this.x+10,this.y+10,this.w+-20,this.h+-20,215,220);
    arc(d+this.x+10,this.y+10,this.w+-20,this.h+-20,245,250);
    arc(d+this.x+10,this.y+10,this.w+-20,this.h+-20,275,280);
    arc(d+this.x+10,this.y+10,this.w+-20,this.h+-20,305,310);
    
    arc(d+this.x+10+EyeLash,this.y+10,this.w+-20,this.h+-20,215,220);
    arc(d+this.x+10+EyeLash,this.y+10,this.w+-20,this.h+-20,245,250);
    arc(d+this.x+10+EyeLash,this.y+10,this.w+-20,this.h+-20,275,280);
    arc(d+this.x+10+EyeLash,this.y+10,this.w+-20,this.h+-20,305,310);
    
    boy = [girl];
    }
    if(powerUP==="gandalf"){
    this.powerBar -=0.008; 
    }
    
    if(suits === "wizard"){
    fill(110, 75, 4);
    rect(d+this.x+39,this.y+-18,this.w+-25,this.h+30,(this.w+this.h)/20+50); 

    fill(5, 145, 163);
    if(powerUP === "gandalf"&&suits === "wizard"&&this.health<100){
    fill(175, 241, 250);    
    }

    if(powerUP==="gandalf"&&suits === "wizard"&&mouseIsPressed){
    fill(255, 255, 255);
    }
    rect(d+this.x+36,this.y+-18,this.w+-18,this.h+-15,(this.w+this.h)/20+60);
    
    }


    
    if(male_or_female === "male"){
    boy = [boy2];   
    }
    if(powerUP === "ultraAngel"&&mouseIsPressed&&this.powerBar>5){
    this.powerBar-=2.5;
    this.yvel+=this.gravity-1;
    
    }else{
    this.powerBar+=0.03; 
    //this.yvel+=this.gravity;
    }
    
    this.powerBar+=0.008;
    
    if(powerUP === "darkMetal"&&mouseIsPressed&&this.powerBar>10){
        
    this.yvel+=this.gravity+100;    
    }
     if(powerUP === "darkMetal"&&mouseIsPressed){
            
    this.powerBar-=0.3; 
         
    }

    

    if(powerUP === "ultraNinja"&&mouseIsPressed&&this.powerBar>5){
     
     
    //pJumpHeight=10.5;   
    this.speedLimit = 8;
    this.JH = pJumpHeight+2.5;

    }else{
    this.JH = pJumpHeight;    
    this.speedLimit = 5;    
    }
    if(powerUP === "ultraNinja"&&mouseIsPressed){
        
    this.powerBar-=2;     
    }
    
    fill(255, 255, 255);
    
    if(suits === "evil"){
        
    fill(0, 0, 0);
        
    }
    if(suits === "ninja"&&powerUP === "ultraNinja"){
    fill(0, 0, 0);
    }
    ellipse(d+this.x+this.w/3,this.y+this.h/3,this.eyeSize+8,this.eyeSize+xpos2);
    ellipse(d+this.x+this.w*2/3,this.y+this.h/3,this.eyeSize+8,this.eyeSize+xpos2);
    
    fill(0, 0, 0);
    
    if(suits === "evil"){
        
    fill(255, 0, 0);
        
    }
    if(suits === "angel"){
    fill(67, 160, 247);
        
    }
    if(suits === "ninja"&&powerUP === "ultraNinja"){
    fill(255, 255, 255);
    }
    ellipse(d+this.x+this.w/3,this.y+this.h/3,this.eyeSize,this.eyeSize+xpos2);
    ellipse(d+this.x+this.w*2/3,this.y+this.h/3,this.eyeSize,this.eyeSize+xpos2);
    if(suits === "evil"){
        
    fill(166, 7, 7);
    
    ellipse(d+this.x+this.w/3,this.y+this.h/3,this.eyeSize-4,this.eyeSize+xpos2-1);
    ellipse(d+this.x+this.w*2/3,this.y+this.h/3,this.eyeSize-4,this.eyeSize+xpos2-1);
        
    }
    
    fill(255, 255, 255,50);
    rect(this.x,this.y,this.w-5,this.h-5,(this.w+this.h)/20+50+square);
    
    if(suits === "wizard"){
    
    fill(255, 255, 255);
    arc(this.x+17,this.y+33.5,this.w+100,this.h,140+120,160+120);
    
    }
    if(powerUP === "gandalf"&&mouseIsPressed){
        
    this.powerBar-=0.2;    
    }
    if(powerUP==="ultraEvil"&&mouseIsPressed){
        
    this.powerBar-=0.1;    
    }
    if (suits==="evil"&&mouseIsPressed){
    
    fill(0, 123, 255,100);
    ellipse(this.x+18,this.y+10,this.w+50,this.h+50); 
    
    fill(255, 255, 255,50);
    ellipse(this.x+8,this.y+3,this.w+5,this.h+5);     
    }
    
    noFill();
    stroke(0);
    strokeWeight(1);
    };
    this.applyCollision=function(obj,velx,vely){
    for(var i=0; i<obj.length; i++){
        if(collide(this,obj[i])&&obj[i].solid){ // handle collisions
            if(obj[i].type==="ice"){obj[i].melting = true;}//make the ice blocks start melting
            if(vely>0){ this.yvel=0; this.falling=false; this.y=obj[i].y-this.h; }
            if(vely<0){ this.yvel=0; this.falling=true; this.y=obj[i].y+obj[i].h; }
            if(velx<0){ this.xvel=0; this.x=obj[i].x+obj[i].w; }
            if(velx>0){ this.xvel=0; this.x=obj[i].x-this.w; }
        }
    }
};
this.healthBar = function(){
    noStroke();
    textSize(14);
    fill(255);
    rect(20,20,100,15);
    fill(255, 0, 0);
    rect(20,20,this.health,15);
    fill(0);
    textAlign(CENTER,CENTER);
    text("Health "+max(0,round(this.health))+"%",70,20+15/2);
    this.health = constrain(this.health,0,100);
    
    textSize(14);
    fill(255, 255, 255);
    rect(20,40,100,15);
    fill(0, 51, 255);
    rect(20,40,this.powerBar,15);
    fill(0);
    textAlign(CENTER,CENTER);
    text("power "+max(0,round(this.powerBar))+"%",70,20+15/2+20);
    this.powerBar = constrain(this.powerBar,0,100);
};
};
var player = new Player(200,100,playerSize[0],playerSize[1]);

//@blocks
var Block = function(x,y,w,h,type,i){
    this.x=x; this.y=y; this.w=w; this.h=h; this.isImage = i;
    this.type = type; this.melting = false;
    this.solid = true; this.op = 255;
    this.draw = function() {
        if(view(this)){
            switch(this.type){
                case "solid":
                case "moving":
                    noStroke();
                    fill(128, 125, 125);
                    
                    if(suits === "evil"){
                    fill(random(0,300), 0, 0);
                    }
                    if(suits === "angel"){
                    fill(255, 247, 0);
                    }
                    if(suits === "ninja"){
                    fill(158, 77, 6);
                    }
                    if(suits === "wizard"){
                    fill(173, 118, 7);
                    }
                    rect(this.x,this.y,this.w,this.h);
                    fill(0, 0, 0,50);
                    rect(this.x,this.y,this.w,this.h+-10);
                    rect(this.x,this.y,this.w,this.h+-20);
                    rect(this.x,this.y,this.w,this.h+-30);
                    rect(this.x,this.y,this.w,this.h+-40);
                break;
                case "ice":
                    strokeWeight(2); stroke(255,255,255,this.op); fill(24, 245, 245,this.op);
                    rect(this.x+1,this.y+1,this.w-2,this.h-2);
                break;
            }
        }
    };
    this.update = function(){
        if(this.type==="ice"){
            if(this.melting){
                this.op-=2;
                
            }
            if(this.op<50){
                this.solid = false;
            }
            
            if(this.op<-120){
                this.op=255;
                this.melting = false;
                this.solid = true;
            }
            
        }
    };
    
};
var blocks = [];
blocks.add = function(x,y,w,h,t){ this.push(new Block(x,y,w,h,t)); };
blocks.apply = function(){
    for(var i=0;i<this.length;i++){
        this[i].draw();
        this[i].update();
    }
};


//@portal
var Goal = function(x,y,radius,i){
    this.x=x; this.y=y; this.w=radius; this.h=radius; this.isImage = i;
    this.timer = 0; this.complete = false; this.color = 0;
    this.draw = function() {
        if(view(this)){
            colorMode(HSB);
            noStroke();
            for(var i=0;i<this.w/2;i+=2){
            fill(255,0,255,i*10);
        ellipse(this.x+this.w/2,this.y+this.h/2,this.w-i*2,this.h-i*2);
        }
        noFill();
        strokeWeight(2);
        for(var i=0;i<this.w/2;i+=2){
            this.opacity = (sin(i*frameCount)*70);
            stroke(frameCount%255, 255,255,this.opacity);
        ellipse(this.x+this.w/2,this.y+this.h/2,this.w-i*2,this.h-i*2);
        }
        colorMode(RGB);
        }
    };
    this.update = function(){
        
        if(collide(this,player)){
            transparence+=5;
            player.health=1000;
        }
        if(transparence>=250){
            this.complete = true;
            if(sound_off_on===true){
            playSound(sounds.DoneWithLevel); 
            }
        }
        
    };
};
var portals = [];
portals.add=function(x,y,r){ this.push( new Goal(x,y,r));};
portals.apply = function(){
    for(var i=0;i<this.length;i++){
        this[i].draw();
        this[i].update();
    }
};

//@lava
var Lava = function(x,y,s,i){
    this.x=x; this.y=y; this.w=s; this.h=s;
    this.s = (s/3); this.isImage = i;
    this.draw = function() {
        if(view(this)){
        noStroke();
        for(var x=0;x<this.w;x+=this.s){
            for(var y=0;y<this.h;y+=this.s){
                fill(random(0,300),0,0);
                if(suits === "angel"){
                fill(0,random(0,300),200);
                }
                if(suits === "evil"){
                fill(random(0,300), 43,0);
                }
                if(suits === "ninja"){
                fill(26,random(0,300), 0);
                }
                
                if(suits === "wizard"){
                fill(random(0,300), 170, 0);
                }
                if(suits === "metal"){
                fill(0,random(0,300),200);
                }
                rect(this.x+x,this.y+y,this.s,this.s);
                
                
            }
        }
        }
    };
    this.update = function(){
        if(collide(this,player)){
            player.health-=2;
            if(powerUP === "darkMetal"){
            fill(255, 0, 0,150);
            
    rect(this.x,this.y,this.w,this.h,(this.w+this.h)/20+50+square);
            }
            if(powerUP==="gandalf"&&mouseIsPressed&&player.powerBar>5){
            player.health+=2;
            player.powerBar-=5;    
            }
            if(powerUP === "ultraEvil"&&mouseIsPressed&&player.powerBar>2){
            player.health+=2;  
            player.powerBar-=2;
            }
            redTrans = 80;
            if(sound_off_on===true){
            playSound(sounds.Lava);  
            }
        }
    };
};
var lava = [];
lava.add = function(x,y,s){ this.push(new Lava(x,y,s)); };
lava.apply = function(){
    for(var i=0;i<this.length;i++){
        this[i].draw();
        this[i].update();
    }};
    
//@spikes
var Spike = function(x,y,w,h,i){
    this.x=x; this.y=y; this.w=w; this.h=h;
    this.isImage = i;
    this.draw = function() {
        if(view(this)){
            noStroke();
        fill(156, 152, 158);
        if(suits === "evil"){
            fill(255, 225, 0);
        }

        if(suits === "angel"){
        fill(255, 247, 0);
        }
        if(suits === "ninja"){
        fill(8, 120, 2);
        }
        if(suits === "wizard"){
        fill(130, 88, 3);
        }
        triangle(this.x+this.w/2,this.y,this.x,this.y+this.h,this.x+this.w,this.y+this.h);
        fill(255, 255, 255,50);
        if(suits === "ninja"){
        fill(120, 67, 2,50);
        }
        if(suits === "wizard"){
        fill(29, 240, 43,50);
        }
        triangle(this.x+this.w/2,this.y,this.x+10,this.y+this.h,this.x+this.w,this.y+this.h);
        triangle(this.x+this.w/2,this.y,this.x+20,this.y+this.h,this.x+this.w,this.y+this.h);
        triangle(this.x+this.w/2,this.y,this.x+30,this.y+this.h,this.x+this.w,this.y+this.h); 
        triangle(this.x+this.w/2,this.y,this.x+40,this.y+this.h,this.x+this.w,this.y+this.h);
        }
        
        
    };
    this.update = function(){
        if(polygonCollide([
            {x:player.x,y:player.y},
            {x:player.x+player.w,y:player.y},
            {x:player.x+player.w,y:player.y+player.h},
            {x:player.x,y:player.y+player.h}],//the player
            [{x:this.x+this.w/2,y:this.y},
            {x:this.x,y:this.y+this.h},
            {x:this.x+this.w,y:this.y+this.h}])){
        player.yvel=-player.JH;
        player.health-=5;
        if(powerUP === "gandalf"&&mouseIsPressed&&player.powerBar>10){
        player.health+=5;    
        player.powerBar-=10;    
        }
        
        redTrans = 80;//red flash
        if(sound_off_on===true){
        playSound(sounds.SPIKE); 
        }
        }
    };
    
};
var spikes = [];
spikes.add=function(x,y,s){ this.push( new Spike(x,y,s,s)); };
spikes.apply = function(){
    for(var i=0;i<spikes.length;i++){
        this[i].draw();
        this[i].update();
    }
};

//@jumpBlocks
var JumpBlock = function(x,y,w,h,i){
    this.x=x; this.y=y; this.w=w; this.h=h; this.isImage = i;
    this.draw = function() {
        if(view(this)){
            noStroke();
            fill(random(100,300), 96, 255);
            rect(this.x,this.y,this.w,this.h);
            fill(0, 0, 0,50);
            rect(this.x,this.y,this.w,this.h+-5);
            rect(this.x,this.y,this.w,this.h+-10);
            
        }
    };
    this.update = function(){
        if(collide(this,player)){
            player.yvel=-player.JH*1.3;
            if(sound_off_on===true){
            playSound(sounds.JUMP); 
            }
        }
        
    };
    
};
var jumpBlocks = [];
jumpBlocks.add = function(x,y,w,h){ this.push( new JumpBlock(x,y,w,h) );  };
jumpBlocks.apply = function(){
    for(var i=0;i<this.length;i++){
        this[i].draw();
        this[i].update();
    }
};
    
var Bullet = function(x,y,s,angle){
    this.x=x; this.y=y; this.w=s; this.h=s;
    this.deleted = false; this.angle = angle;
    this.draw = function() {
        if(!this.deleted){
        noStroke();
        fill(194, 6, 6);
        stroke(252, 60, 60);
        if(suits === "ninja"){
            
        fill(8, 194, 14);
        stroke(60, 250, 69);
            
        }
        ellipseMode(CORNER);
        ellipse(this.x+epicScene,this.y+epicScene,this.w+2,this.h+2);
        stroke(255, 0, 0);
        fill(255, 0, 0,0);
        if(suits === "ninja"){
        stroke(21, 255, 0);
            
        }

        ellipseMode(CENTER);
        noStroke();
        }
    };
    this.update = function(){
        this.x+=cos(this.angle)*2;
        this.y+=sin(this.angle)*2;
        if(collide(this,player)&&!this.deleted&&!player.dead){
            this.deleted = true;
            player.health -=10;
            redTrans = 80;
            if(powerUP==="gandalf"&&mouseIsPressed&&player.powerBar>20){
            player.health +=10;
            player.powerBar-=20;
            }
            
            if(sound_off_on===true){
            playSound(sounds.NinjaDeath); 
            }
        }
        for(var i=0;i<blocks.length;i++){
        if(collide(this,blocks[i])&&!this.deleted){
            this.deleted = true;
        }
        }
        
    };
};
var bullets = [];
bullets.add = function(x,y,angle){
    this.push( new Bullet(x,y,5,angle));
};
bullets.apply = function(){
    for(var i=0;i<this.length;i++){
        bullets[i].draw();
        bullets[i].update();
        if(bullets[i].deleted){
            bullets.splice(i,1);
        }
    }
};
var Cannon = function(x,y,w,h){
    this.x=x; this.y=y; this.w=w; this.h=h;
    this.angle = atan2(this.x-player.x,player.y-this.y);
    this.bullets = [];
    this.draw = function() {
        if(view(this)){
        noStroke();
        fill(107, 107, 102);
        if(suits === "evil"){
        fill(random(100,300), 115, 0);
        }

        if(suits === "angel"){
        fill(255, 247, 0);
        }
        if(suits === "ninja"){
        fill(6, 161, 27);
        }
        ellipse(this.x+this.w/2,this.y+this.h/2,this.w*3/5,this.h*3/5);
        pushMatrix();
        translate(this.x+this.w/2,this.y+this.h/2);
        rotate(this.angle);
        rect(-10,5,this.w/3,20);
        popMatrix();
        }
        
    };
    this.update = function(){
        this.angle = atan2(this.x-player.x,player.y-this.y);
        if((frameCount%100)===99){
            
            bullets.add(this.x+this.w/2,this.y+this.h/2,this.angle+90);
                 
        }
        
    };
    
};
var cannons = [];
cannons.add = function(x,y,s){this.push( new Cannon(x,y,s,s));};
cannons.apply = function(){
    for(var i=0;i<this.length;i++){
        this[i].draw();
        this[i].update();
    }
};

var Monster=function(x,y,w,h){
    this.x=x; this.y=y; this.w=w; this.h=h;
    this.dead=false; // is the monster "dead"?
    this.xvel=1; // monster's speed
    this.angle=0; // the monster's eye's angle
this.draw= function() {
    if(view(this)&&!this.dead){
        // draw the monster
        fill(monster_color );
        noStroke();
        if(suits === "evil"){
        fill(128, 3, 3);
        }
        if(suits === "angel"){
        fill(255, 255, 255);
        }
        if(suits === "wizard"){
        fill(252, 195, 81);
        }
                
        if(suits === "metal"){
        fill(250, 202, 10);
        }
        rect(this.x,this.y,this.w,this.h,Math.abs(cos(frameCount*2))*10); // main body
        
        
        fill(255, 255, 255);
        if(suits === "evil"){
        fill(0, 0, 0);
        }
    
        if(suits === "wizard"){
        fill(247, 170, 15);
        }
                
        if(suits === "metal"){
        fill(255, 255, 0);
        }
        ellipse(this.x+this.w/2,this.y+this.h/2,this.w/2+15,this.h/2+15);
        
        fill(0, 0, 0);
        if(suits === "evil"){
        fill(255, 0, 0);
        }
        if(suits === "angel"){
        fill(92, 197, 250);
        noStroke();    
        }
    
        if(suits === "wizard"){
        fill(255, 255, 255);
        }
        if(suits === "metal"){
        fill(250, 202, 10);
        }
        ellipse(this.x+this.w/2,this.y+this.h/2,this.w/2,this.h/2); // the white of the eye
        textSize(12);
        fill(random(0,300));
        text("SAFETY\nKILLER DROID",this.x+this.w/2,this.y+this.h/2+-35);
        // the pupil
        pushMatrix();
        translate(this.x+this.w/2,this.y+this.h/2);
        rotate(this.angle+40);
        fill(255, 255, 255);
    
        if(suits === "wizard"){
        fill(242, 123, 19);
        }
        
        if(suits === "metal"){
        fill(255, 255, 0);
        }
        ellipseMode(CORNER);
        ellipse(0,0,this.w/5,this.h/5);
        ellipseMode(CENTER);
        popMatrix();
    }
};
this.update = function(){
    if(!this.dead){
    this.angle = atan2(this.x-player.x,player.y-this.y);//make the angle point to the player
    this.x+=this.xvel;
    for(var i=0;i<blocks.length;i++){
        if(collide(this, blocks[i])){
            this.xvel=-this.xvel;
        }
    }
    if(collide(this, player)){
        if(!player.falling&&!this.dead&&!player.dead){
                player.health-=5;
                if(powerUP === "gandalf"&&player.powerBar>5&&mouseIsPressed){
                player.health+=5;
                player.powerBar-=5;
                }
                redTrans = 80;
        }else if(player.yvel>0&&player.falling){
                this.dead=true; // the monster is "dead"
                player.yvel=-player.JH; // make the player hop 
                fill(255, 0, 0,150);
                rect(this.x,this.y,this.w,this.h,Math.abs(cos(frameCount*2))*10);
                rect(this.x+-20,this.y+-20,this.w+40,this.h+40,Math.abs(cos(frameCount*2))*10); 
                
                if(suits === "wizard"&&powerUP==="gandalf"){
                            
                fill(255, 255, 255,200);
                ellipse(this.x+45,this.y+-9,this.w+500*2,this.h+500*2);
                ellipse(this.x+45,this.y+-9,this.w+500*2,this.h+500*2);
            }
                if(powerUP === "darkMetal"){
                fill(128, 208, 245,200);
                    
                ellipse(this.x+45,this.y+-9,this.w+500*2,this.h+500*2);
                ellipse(this.x+45,this.y+-9,this.w+500*2,this.h+500*2);
      
      
                    }
                player.health+=2;
                
                
                if(sound_off_on===true){
                playSound(sounds.monsterDeath); 
                }
                
                        

            }
    }
    }
};
};
var monsters=[];
monsters.add=function(x,y,w,h){ this.push(new Monster(x,y,w,h)); };
monsters.apply=function(){
    for(var i=0; i<this.length; i++){
        this[i].update();
        this[i].draw();
        if(this[i].dead){this.splice(i,1);}
    }
};
    
//manage the objects in the game
var objects = [blocks,portals,lava,spikes,jumpBlocks,cannons,bullets, monsters];
objects.remove = function(){
    for (var i = 0; i < objects.length; i++) {
        for (var j = 0; j < objects[i].length; j++) {
            objects[i].splice(j, objects[i].length);
        }
    }
};

var updateMap = function(){
    objects.remove();
    for(var col=0; col<levels[level].length; col++){
        var cells = levels[level][col];
        for(var row=0; row<cells.length; row++){
            switch(cells[row]){
                case "b": blocks.add(row*grid,col*grid,grid,grid,"solid");
                    break;
                case "@": portals.add(row*grid,col*grid,grid);
                    break;
                case "_": blocks.add(row*grid,col*grid+(grid/3)*2,grid*2,grid/3,"ice");
                    break;
                case "#": lava.add(row*grid,col*grid,grid,grid);
                    break;
                case "P": player = new Player(row*grid-(player.w-grid)/2,col*grid-(player.h-grid)/2,playerSize[0],playerSize[1]);
                    break;
                case "A": spikes.add(row*grid,col*grid,grid,grid);
                    break;
                case "M": jumpBlocks.add(row*grid,col*grid+grid*2/3,grid,grid/3);
                    break;
                case "%": cannons.add(row*grid,col*grid,grid);
                    break;
                case "&": monsters.add(row*grid,col*grid,grid,grid);
                    break;
                
                
            }
            level_w = levels[level][col].length * grid;
            level_h = levels[level].length * grid;
        }
    }
};

    
var resetCam = function(){
cam.x=player.x; cam.y=player.y;
};//reset the cam to the player's location.
var applyGame = function(){
    blocks.apply();
    portals.apply();
    if(!player.dead){ player.draw(); }
    lava.apply();
    spikes.apply();
    jumpBlocks.apply();
    monsters.apply();
    bullets.apply();
    cannons.apply();
    player.update(blocks);
    
};
    

updateMap();
var cam = new Camera(player.x,player.y);
var draw = function() {
    player.health= 100;
    player.powerBar=100;
    
    background(back);
    if(suits === "ninja"){
    background(0, 225, 255);
    }    
    if(suits === "angel"){
    background(0, 250, 225);
    
    fill(242, 255, 0,150);
    ellipse(200,129,120,120);
    fill(242, 255, 0);
    ellipse(200,129,100,100);
    fill(255, 255, 255);
    ellipse(133,110,66,50);
    ellipse(133,100,66,50);
    ellipse(163,110,66,50);
    ellipse(99,110,66,50);
    
    ellipse(cloud+133,cloud+110,66,50);
    ellipse(cloud+133,cloud+100,66,50);
    ellipse(cloud+163,cloud+110,66,50);
    ellipse(cloud+99,cloud+110,66,50);
    
    }

    if(suits === "wizard"){
    background(204, 126, 8);
    }
    
    if(suits === "metal"){
    background(71, 70, 70);
    fill(82, 200, 255,100);
    rect(100,100,100,100,50);
    rect(115,115,50,50,50);
    
    rect(100+200,100+100,50,50,50);
    rect(115+200,115+100,10,10,50);
    
}
    


    

    pushMatrix();
    cam.view(player);
    applyGame();
    popMatrix();
    player.healthBar();
    
    if(powerUP==="gandalf"&&suits === "wizard"&&mouseIsPressed){
    
    fill(255, 255, 255,100);
    rect(0,0,400,400);    
    if(sound_off_on===true){
    playSound(sounds.gandalf); 
    }    
    }
    
    if(player.deadTimer>1){updateMap(); resetCam();}
    if(player.deadTimer>0){
        
    death_count+=1;    
    }
    
    fill(68, 0, 255);
    textSize(30);
    text("DEATHS: "+death_count,200,40);
    
    
    if(portals[0]){
        if(portals[0].complete){
            if(level<levels.length-1){level++; updateMap(); resetCam();}else{
                background(0, 0, 0);
                            
            
            //Speed of hands
            offset += speedoMeter+5;
            offset2 += speedoMeter+10;
            offset3 += speedoMeter+15;
        
            
                //Light blue line
                fill(0, 255, 255);
                for(var i = 0; i < 18; i++)
                {
                    X = 0 + (i * 20);  
                    arc(200,200,1000,1000,X+5+offset3,X+5+offset3);
                }
            
            
                //Wight line
                fill(255, 255, 255);
                for(var i = 0; i < 18; i++)
                {
                    X = 0 + (i * 20);  
                    arc(200,200,1000,1000,X+5+offset2,X+5+offset2);
                }
            
                
                //Dark blue line
                fill(0, 136, 255);
                for(var i = 0; i < 18; i++)
                {
                    X = 0 + (i * 20);  
                    arc(200,200,1000,1000,X+5+offset,X+5+offset);
                }
                fill(0, 217, 255);
                
                textSize(35.5);
                text("CONGRADULATIONS",200,163);
                textSize(36);
                text("CONGRADULATIONS",200,163);
                textSize(36.5);
                transparence = 0;
                text("CONGRADULATIONS",200,162);
                
                fill(36, 47, 255);
                textSize(37);
                transparence = 0;
                text("CONGRADULATIONS",200,159);
                textSize(36.5);
                fill(255, 255, 255,100);
                text("CONGRADULATIONS",200,160);
                textSize(26.65);
                fill(255, 255, 255);
                text("\nyou have beat 'DEMENSION'\nstay tuned\nmore levels comming soon",200,206);
                text("\n\n\n\nyou died: "+death_count+"-times",200,221);
                fill(255, 0, 0);
                textSize(27);
                text("\nyou have beat 'DEMENSION'\nstay tuned\nmore levels comming soon",200,205);
                text("\n\n\n\nyou died: "+death_count+"-times",200,220);
                fill(255, 255, 255,100);
                textSize(26.6);
                text("\nyou have beat 'DEMENSION'\nstay tuned\nmore levels comming soon",200,205);
                text("\n\n\n\nyou died: "+death_count+"-times",200,220);
                fill(male);
                if(male_or_female === "female"){
                fill(female);
                }

                
            }
        }
    }
    
//@transparency
{
fill(255, 255, 255,transparence);
noStroke();
rect(0,0,width,height);
fill(255,0,0,redTrans); 
rect(0,0,width,height);
transparence -=3;
redTrans-=3;
transparence=constrain(transparence,0,255);
redTrans = constrain(redTrans,0,255);

fill(0, 0, 0,transparence);
textSize(52.5);
text("Level complete",200,201);

fill(0, 0, 0,transparence);
textSize(52);
text("Level complete",200,201);


fill(0, 0, 0,transparence);
textSize(51.5);
text("Level complete",200,202);

fill(61, 216, 255,transparence);
textSize(53);
text("Level complete",200,200);


fill(0, 0, 0,transparence);
textSize(20);
text("Stay on the portal\nso you can go to the next level...",200,251);

stroke(106, 61, 255,transparence);
strokeWeight(6);
fill(17, 0, 255,0);
arc(200,200,380,380,20+move,60+move);
arc(200,200,380,380,20+move+180,60+move+180);
noStroke();

}
//background(255);

xpos+=speed;
if(xpos > 5  ) {  
xpos =-12; }
if(xpos < -5  ) {  
xpos = 1; }

xpos2+=speed2;
if(xpos2 > 0  ) {  
speed2 =-1; }
if(xpos2 < -5  ) {  
speed2 = 0.5; }


/*start screen*/


if(mouseIsPressed &&powerUP === "darkMetal"){       
    fill(225, 255, 0,100);
    rect(0,0,400,400);
    if(sound_off_on===true){
    playSound(sounds.matelPower); 
    }
}
move+=5;

var more = function(){


fill(0, 255, 17);
rect(0,0,400,400);
fill(255, 0, 0);
textSize(20);
text("some times you need to jump on spikes\nto fling up so you can go on the next block\nbut they take 5-health\nso choose the right spike wisely.\nCanons take 10-health if they hit you\nand they are really hard to dodge.\nLava drains your health if you are on it.\nPress and hold mouse on the screen to\nturn on your power. you have a power and\nhealth limit for each level. If you are\nout of health, the level will restart\nEach character has a different power\n\nGOOD LUCK".substring(0, Time),200,178);
Time += Typing;
    
fill(26, 0, 255);
if(mouseY<300+50&&mouseX<400&&mouseY>300&&mouseX>300){
    
fill(255, 0, 0);
}
if(mouseIsPressed&&mouseY<300+50&&mouseX<400&&mouseY>300&&mouseX>300){
    
howToDoIt=false;

MORE=false;
}

rect(300,300,100,40);

fill(255, 255, 255);
textSize(20);
text("HOME",350,323);   
  
};
var cover = function(){
fill(0, 255, 17);
rect(247,294+moreDown,200,60);    
    
};

var how = function(){
    

fill(0, 255, 47);
rect(0,0,400,400);
textSize(20);
fill(255, 0, 0);
text("avoid lava and spikes\n\n\n\n   canons will shoot at you\n try to avoid there bullets",107,77);

noStroke();
fill(random(0,300), 0, 0);
rect(30,40,10,10);
fill(random(0,300), 0, 0);
rect(40,40,10,10);
fill(random(0,300), 0, 0);
rect(50,40,10,10);
fill(random(0,300), 0, 0);
rect(60,40,10,10);

fill(random(0,300), 0, 0);
rect(30,40+10,10,10);
fill(random(0,300), 0, 0);
rect(40,40+10,10,10);
fill(random(0,300), 0, 0);
rect(50,40+10,10,10);
fill(random(0,300), 0, 0);
rect(60,40+10,10,10);

fill(random(0,300), 0, 0);
rect(30,40+20,10,10);
fill(random(0,300), 0, 0);
rect(40,40+20,10,10);
fill(random(0,300), 0, 0);
rect(50,40+20,10,10);
fill(random(0,300), 0, 0);
rect(60,40+20,10,10);

fill(random(0,300), 0, 0);
rect(30,40+30,10,10);
fill(random(0,300), 0, 0);
rect(40,40+30,10,10);
fill(random(0,300), 0, 0);
rect(50,40+30,10,10);
fill(random(0,300), 0, 0);
rect(60,40+30,10,10);

fill(120, 120, 120);
arc(131,46,136+20,50+20,70,106);
ellipse(67,200,50,50);
rect(52,200,30,34);

fill(71, 71, 71);
rect(46-20,348,50,50,20);
fill(0, 0, 0);
ellipse(71-20,373,40,40);
fill(255, 255, 255);
ellipse(71-20,373,35,35);
fill(0, 0, 0);
ellipse(76-20,374,15,15);

textSize(15);
fill(255, 0, 0);
text("These are killer droids. If you are\non the ground near one of these\n they will drain you health\nbut if you jump on there head\nthey won't kill you and will make\nyou fling in the air and give you\n2+health",107,298);


text("this is the goal",336,30);
fill(255, 255, 255,150);
ellipse(40+300,40+40,70,70);

fill(255, 255, 255);
ellipse(40+300,40+40,50,50);

stroke(255, 10, 255);
ellipse(40+300,40+40,frameCount%50,frameCount%50);

stroke(26, 10, 255);
ellipse(40+300,40+40,frameCount%40,frameCount%40);    

noStroke();
fill(9, 153, 2);
rect(320,150+40,50,50,16);
rect(326,186+40,15,30,30);
rect(349,186+40,15,30,30);
arc(354,168+40,70,70,20,40);
arc(338,168+40,70,70,145,165);
fill(255, 255, 255);
ellipse(338,168+40,25,15);
ellipse(354,168+40,25,15);
fill(0, 0, 0);
ellipse(338,168+40,15,15);
ellipse(354,168+40,15,15);

text("this is your player\nuse the arrow-keys to move\nyour guy in the game\npress up arrow-key to jump",307,149);
    
fill(26, 0, 255);
if(mouseY<300+50&&mouseX<400&&mouseY>300&&mouseX>300){
    
fill(255, 0, 0);
}
if(mouseIsPressed&&mouseY<300+50&&mouseX<400&&mouseY>300&&mouseX>300){
    
howToDoIt=false;

MORE=false;
}

rect(300,300,100,40);

fill(255, 255, 255);
textSize(20);
text("HOME",350,323);    
    


if(MORE === true){
    
more();    
    
}

fill(26, 0, 255);
if(mouseY<300+50+moreDown&&mouseX<400&&mouseY>300+moreDown&&mouseX>300){
    
fill(255, 0, 0);
}
if(mouseIsPressed&&mouseY<300+50+moreDown&&mouseX<400&&mouseY>300+moreDown&&mouseX>300){
    
MORE=true;
}

rect(300,300+moreDown,100,40);

fill(255, 255, 255);
textSize(20);
text("MORE",350,323+moreDown);  






    
};

var Credits = function(){


noStroke();
fill(255, 255, 255,150);
ellipse(188,188,5,5);
ellipse(222,188,5,5);

ellipse(188,179,5,8);
ellipse(222,179,5,8);

fill(112, 112, 112);
rect(0,0,400,400);
fill(61, 61, 61);
if(mouseY<180&&mouseX<400&&mouseY>80&&mouseX>0){
fill(255, 0, 0);
}
rect(0,80,400,100);
fill(61, 61, 61);
if(mouseY<300&&mouseX<400&&mouseY>200&&mouseX>0){
fill(255, 0, 0);
}
rect(0,200,400,100);

if(mouseIsPressed&&mouseY<300&&mouseX<400&&mouseY>200&&mouseX>0){
print("link to kenaniahs programs");

print("");

var s = "https://www.khanacademy.org/profile/kennysub10/programs\n\n\n";
println(s);    
    
    
}

if(mouseIsPressed&&mouseY<180&&mouseX<400&&mouseY>80&&mouseX>0){
print("link to Jacobs programs");

print("");

var s = "https://www.khanacademy.org/profile/Jacob124/programs\n\n\n";
println(s);    
    
}

fill(255, 255, 255);
textSize(70);
text("CREDITS:",200,30);

textSize(20);
text("for making the\nmap generater",320,130);
text("for Ideas with\nsuits and powers",320,242);
textSize(80);
text("Jacob:",119,126); 
textSize(50);
text("Kenaniah:",119,248); 

fill(26, 0, 255);
if(mouseY<300+50&&mouseX<100&&mouseY>300&&mouseX>0){
    
fill(255, 0, 0);
}

rect(0,300,100,40);

fill(255, 255, 255);
textSize(20);
text("BACK",50,323);

if(mouseIsPressed&&mouseY<300+50&&mouseX<100&&mouseY>300&&mouseX>0){
    
CREDITS=false; 
}


    
    
};

var female_or_male = function(){
    
fill(0, 0, 0);
if(suits==="ninja"){
fill(255, 255, 255);
}
arc(224,188,50,50,-10,0);
arc(224,188,50,50,-10-45,0-45);
arc(224,188,50,50,-10-90,0-90);
arc(224,188,50,50,-10-90-45,0-90-45);


arc(224+playerRightEye,188,50,50,-10+curves,0+curves);
arc(224+playerRightEye,188,50,50,-10-45+curves,0-45+curves);
arc(224+playerRightEye,188,50,50,-10-90+curves,0-90+curves);
arc(224+playerRightEye,188,50,50,-10-90-45+curves,0-90-45+curves);    
    
};

var powerState = function(){
    
cursor("NONE");
noStroke();
fill(15, 95, 255);
rect(mouseX-7.5,mouseY+13,15,20);
arc(mouseX,mouseY,50,50,60,120);
fill(255, 255, 255,150);
arc(mouseX,mouseY+3,40,40,90,115);


};

var start = function(){
 
background(back);


noStroke();
fill(block);
rect(150,284,100,100);
fill(0, 0, 0,50);
rect(150,284,100,100-20);
rect(150,284,100,100-40);
rect(150,284,100,100-60);
rect(150,284,100,100-80);
fill(random(0,300), 0, 0);

if(suits === "angel"){
fill(0,random(0,300),200);
}
if(suits === "evil"){
fill(random(0,300), 43,0);
}
if(suits === "ninja"){
fill(26,random(0,300), 0);
}

if(suits === "wizard"){
fill(random(0,300), 170, 0);
}
if(suits === "metal"){
fill(0,random(0,300),200);
}



rect(50+1,284,33.3,33.3);
fill(random(0,300), 0, 0);

if(suits === "angel"){
fill(0,random(0,300),200);
}
if(suits === "evil"){
fill(random(0,300), 43,0);
}
if(suits === "ninja"){
fill(26,random(0,300), 0);
}

if(suits === "wizard"){
fill(random(0,300), 170, 0);
}
if(suits === "metal"){
fill(0,random(0,300),200);
}



rect(50+33.3+1,284,33.3,33.3);
fill(random(0,300), 0, 0);

if(suits === "angel"){
fill(0,random(0,300),200);
}
if(suits === "evil"){
fill(random(0,300), 43,0);
}
if(suits === "ninja"){
fill(26,random(0,300), 0);
}

if(suits === "wizard"){
fill(random(0,300), 170, 0);
}
if(suits === "metal"){
fill(0,random(0,300),200);
}



rect(50+66.3+1,284,33.3,33.3);
fill(random(0,300), 0, 0);

if(suits === "angel"){
fill(0,random(0,300),200);
}
if(suits === "evil"){
fill(random(0,300), 43,0);
}
if(suits === "ninja"){
fill(26,random(0,300), 0);
}

if(suits === "wizard"){
fill(random(0,300), 170, 0);
}
if(suits === "metal"){
fill(0,random(0,300),200);
}



rect(50+66.3+1,284,33.3,33.3);
fill(random(0,300), 0, 0);

if(suits === "angel"){
fill(0,random(0,300),200);
}
if(suits === "evil"){
fill(random(0,300), 43,0);
}
if(suits === "ninja"){
fill(26,random(0,300), 0);
}

if(suits === "wizard"){
fill(random(0,300), 170, 0);
}
if(suits === "metal"){
fill(0,random(0,300),200);
}



rect(50+1,284+33.3,33.3,33.3);
fill(random(0,300), 0, 0);

if(suits === "angel"){
fill(0,random(0,300),200);
}
if(suits === "evil"){
fill(random(0,300), 43,0);
}
if(suits === "ninja"){
fill(26,random(0,300), 0);
}

if(suits === "wizard"){
fill(random(0,300), 170, 0);
}
if(suits === "metal"){
fill(0,random(0,300),200);
}



rect(50+33.3+1,284+33.3,33.3,33.3);
fill(random(0,300), 0, 0);

if(suits === "angel"){
fill(0,random(0,300),200);
}
if(suits === "evil"){
fill(random(0,300), 43,0);
}
if(suits === "ninja"){
fill(26,random(0,300), 0);
}

if(suits === "wizard"){
fill(random(0,300), 170, 0);
}
if(suits === "metal"){
fill(0,random(0,300),200);
}



rect(50+66.3+1,284+33.3,33.3,33.3);
fill(random(0,300), 0, 0);

if(suits === "angel"){
fill(0,random(0,300),200);
}
if(suits === "evil"){
fill(random(0,300), 43,0);
}
if(suits === "ninja"){
fill(26,random(0,300), 0);
}

if(suits === "wizard"){
fill(random(0,300), 170, 0);
}
if(suits === "metal"){
fill(0,random(0,300),200);
}



rect(50+1,284+33.3+32.3,33.3,33.3);
fill(random(0,300), 0, 0);

if(suits === "angel"){
fill(0,random(0,300),200);
}
if(suits === "evil"){
fill(random(0,300), 43,0);
}
if(suits === "ninja"){
fill(26,random(0,300), 0);
}

if(suits === "wizard"){
fill(random(0,300), 170, 0);
}
if(suits === "metal"){
fill(0,random(0,300),200);
}



rect(50+33.3+1,284+32.3+33.3,33.3,33.3);
fill(random(0,300), 0, 0);

if(suits === "angel"){
fill(0,random(0,300),200);
}
if(suits === "evil"){
fill(random(0,300), 43,0);
}
if(suits === "ninja"){
fill(26,random(0,300), 0);
}

if(suits === "wizard"){
fill(random(0,300), 170, 0);
}
if(suits === "metal"){
fill(0,random(0,300),200);
}
rect(50+66.3+1,284+33.3+32.3,33.3,33.3);

var xx = constrain(mouseX,285,315);
var yy = constrain(mouseY,320,350);




fill(monster_Body);
rect(250,284,100,100,20);
fill(monster_Outside_Of_Eye);
ellipse(300,333,90,90);
fill(monster_Main_Eye);
ellipse(300,333,65,65);
fill(monster_Pupil);
ellipse(xx,yy,20,20);

fill(255, 255, 255,0+angel2);
arc(200,200,250,250,20+move,40+move);
arc(200,200,250,250,20+90+move,40+90+move);
arc(200,200,250,250,20+180+move,40+180+move);
arc(200,200,250,250,20+180+90+move,40+180+90+move);




fill(96, 161, 252,metal546);
ellipse(200,200,200,200);
arc(200,200,250,250,20+move,40+move);
arc(200,200,250,250,20+45+move,40+45+move);
arc(200,200,250,250,20+90+move,40+90+move);
arc(200,200,250,250,20+90+45+move,40+90+45+move);
arc(200,200,250,250,20+180+move,40+180+move);
arc(200,200,250,250,20+45+180+move,40+45+180+move);
arc(200,200,250,250,20+180+90+45+move,40+180+90+45+move);
arc(200,200,250,250,20+180+90+move,40+180+90+move);

fill(105, 105, 105,evil123);
arc(148,116,200,200,40,70);
arc(252,116,200,200,112,142);

fill(255, 255, 255);
rect(0,137,100,110);

if(mouseIsPressed&&mouseY<40&&mouseX<40&&mouseY>0&&mouseX>0){
    
ninjaLook=0;    
    
suits = "evil";    

back=color(0, 0, 0);

alchemey = "evil";

powerUP = "ultraEvil";

alchemey3 = "potentiol lava sheild";

black = color(194, 0, 0);
white = color(0, 0, 0);

playerColorStart=color(156, 9, 9);

beard2=0;

angel=0;

angel2=0;

metal546 = 0;

evil123 = 500;

block = color(196, 6, 6);


monster_Body =color(168, 3, 12);

monster_Outside_Of_Eye =color(0, 0, 0);

monster_Main_Eye =color(255, 0, 0);

monster_Pupil =color(255, 255, 255);

}

if(mouseIsPressed&&mouseY<40&&mouseX<82&&mouseY>0&&mouseX>42){
    
ninjaLook=0;     
    
suits = "angel"; 

back=color(105, 245, 255);

alchemey = "angel";

powerUP = "ultraAngel";

alchemey3 = "flying power";
black = color(0, 0, 0);
white = color(255, 255, 255);

playerColorStart=color(255, 255, 255);

beard2=0;

angel=300;

angel2=150;

metal546 = 0;

evil123 = 0;

block = color(255, 242, 0);

monster_Body =color(255, 255, 255);

monster_Outside_Of_Eye =color(255, 255, 255);

monster_Main_Eye =color(97, 181, 255);

monster_Pupil =color(255, 255, 255);
}
if(mouseIsPressed&&mouseY<40&&mouseX<144&&mouseY>0&&mouseX>108){
    
ninjaLook=0;     
    
suits = "metal";    

back=color(145, 142, 142);    

alchemey = "metal";

powerUP = "darkMetal";

alchemey3 = "gravity pull";


playerColorStart=color(89, 87, 87);

black = color(0, 0, 0);
white = color(255, 255, 255);

beard2=0;

angel=0;

angel2=0;

metal546 = 100;

evil123 = 0;

block = color(133, 131, 133);

monster_Body =color(255, 191, 0);

monster_Outside_Of_Eye =color(255, 242, 0);

monster_Main_Eye =color(255, 191, 0);

monster_Pupil =color(255, 242, 0);
}
if(mouseIsPressed&&mouseY<40&&mouseX<176&&mouseY>0&&mouseX>136){
    
ninjaLook=0;     
suits = "wizard";    
back=color(161, 86, 6);    
alchemey = "wizard";
powerUP = "gandalf";
alchemey3 = "potentiol sheild";
beard2=500;
playerColorStart=color(140, 138, 138);
black = color(0, 0, 0);
white = color(255, 255, 255);
angel=-150;
angel2=0;
metal546 = 0;
evil123 = 0;
block = color(184, 131, 7);
monster_Body =color(252, 212, 101);
monster_Outside_Of_Eye =color(230, 171, 7);
monster_Main_Eye =color(255, 255, 255);
monster_Pupil =color(255, 132, 0);
}
if(suits==="ninja"){

playerColorStart=color(0, 0, 0);    
    
beard2=0;    
back=color(8, 148, 255);
ninjaLook=500;     
    
black = color(255, 255, 255);
white = color(0, 0, 0);    
    
alchemey = "ninja";

alchemey3 = "super speed";

monster_Body =color(79, 79, 79);

monster_Outside_Of_Eye =color(255, 255, 255);

monster_Main_Eye =color(0, 0, 0);

monster_Pupil =color(255, 255, 255);
block = color(173, 123, 5);
angel=-150;
angel2=0;
metal546 = 0;
evil123 = 0;
}

if(mouseIsPressed&&mouseY<40&&mouseX<176+50&&mouseY>0&&mouseX>136+50){
    
suits="ninja";
powerUP="ultraNinja";
}

fill(34, 148, 40);
textSize(20);
text("Character = "+alchemey,200,328);
text("Gender = "+alchemey2,200,347);
text("Power = "+alchemey3,200,367);
text("sound="+soundMakeSure,50,144);
text("Character = "+alchemey,200,328);
text("Gender = "+alchemey2,200,347);
text("Power = "+alchemey3,200,367);
text("sound="+soundMakeSure,50,144);
text("Character = "+alchemey,200,328);
text("Gender = "+alchemey2,200,347);
text("Power = "+alchemey3,200,367);
text("sound="+soundMakeSure,50,144);

textSize(16);
text("CHOOSE YOUR\nCHARACTER\nAND WORLD",309,28);
text("CHOOSE YOUR\nCHARACTER\nAND WORLD",310,28);

fill(255, 255, 255);
textSize(48);
textAlign(CENTER,CENTER);
text("DIMENSION",height/2,width/2+-98);
textSize(49);

textAlign(CENTER,CENTER);
text("DIMENSION",height/2,width/2+-99);
textSize(50);
fill(255, 0, 0);

text("DIMENSION",height/2,width/2+-100);


textSize(50-1);
fill(255, 255, 255,100);
text("DIMENSION",height/2,width/2+-100);


stroke(255, 255, 255,100);
strokeWeight(2);
for (var i = 0; i < 100; i++) {
rect(random(50, 350), random(70, 130),10,0);
}

noStroke();
fill(playerColorStart);

rect(150,150,100,100,35+square2);

fill(playerColorStart);

rect(164,190,26,94,50);
rect(210,190,26,94,50);

arc(200,184,200,150,20,40);
arc(200,184,200,150,140,160);

fill(255, 197, 115,beard2);
rect(150,160,100,50,15);

fill(255, 255, 255,beard2);
arc(200,270,125+beard,10+beard,-110,-70);

fill(140, 138, 138,beard2);
arc(200,98,125+beard,-250+beard,-109,-70);


fill(110, 78, 3,beard2);
rect(278-4,157,20,125,20);

fill(6, 125, 189,beard2);
rect(274-4,148,28,28,50);

fill(255, 0, 0,0);
stroke(255, 238, 0,angel);
strokeWeight(5);
ellipse(200,135,110,20);
noStroke();


stroke(255, 0, 0,ninjaLook);
rect(155,157,87,50,20);
noStroke();
if(mouseIsPressed&&mouseY<FEMALE_OR_MALE_POSSITION+240&&mouseX<60&&mouseY>FEMALE_OR_MALE_POSSITION+200&&mouseX>0){

female_or_male56=true;
    
male_or_female="female";

female_or_male();

alchemey2="female";

}
if(mouseIsPressed&&mouseY<FEMALE_OR_MALE_POSSITION+240+40&&mouseX<60&&mouseY>FEMALE_OR_MALE_POSSITION+200+40&&mouseX>0){

female_or_male56=false;

alchemey2="male";

male_or_female="male";

}

if(female_or_male56===true){
    
female_or_male();   
}

fill(white);
ellipse(185,183,40,20);
ellipse(218,183,40,20);

fill(black);

ellipse(185,183,20,20);
ellipse(218,183,20,20);

fill(0, 0, 0,evil123);
ellipse(185,183,5,20);
ellipse(218,183,5,20);

fill(255, 255, 255,100);
rect(150,150,100-10,100-10,35+square2);

textSize(25);
fill(255, 0, 0);
if(mouseY<230&&mouseX<260&&mouseY>210&&mouseX>149){

fill(0, 234, 255);
textSize(30);  
}
text(">PLAY<",height/2,width/2+20); 
textSize(25);
fill(255, 0, 0);
if(mouseY<230+35&&mouseX<270&&mouseY>210+35&&mouseX>139){

fill(0, 221, 255);
textSize(30);  
}

if(mouseIsPressed&&mouseY<230+35&&mouseX<270&&mouseY>210+35&&mouseX>139){

howToDoIt = true;
    
}


text(">How To Play<",height/2,width/2+60); 

strokeWeight(1);
stroke(255, 0, 0);

fill(55, 0, 255);
rect(0,0,50,50);  
fill(255, 255, 255);
if(mouseY<40&&mouseX<40&&mouseY>0&&mouseX>0){
fill(255, 0, 0);
}
if(mouseIsPressed&&mouseY<40&&mouseX<40&&mouseY>0&&mouseX>0){
fill(58, 221, 250);
if(sound_off_on===true){
playSound(sounds.gandalf); 
}
}
rect(5,5,40,40);  
fill(21, 0, 255);
textSize(16);
text("evil",24,24); 

fill(55, 0, 255);
rect(45,0,50,50);  
fill(255, 255, 255);
if(mouseY<40&&mouseX<82&&mouseY>0&&mouseX>42){
fill(255, 0, 0);    
}
if(mouseIsPressed&&mouseY<40&&mouseX<82&&mouseY>0&&mouseX>42){
fill(58, 221, 250);    
if(sound_off_on===true){
playSound(sounds.gandalf); 
}
}
rect(50,5,40,40);  
fill(21, 0, 255);
textSize(16);
text("angel",70,24); 

fill(55, 0, 255);
rect(90,0,50,50);  
fill(255, 255, 255);
if(mouseY<40&&mouseX<144&&mouseY>0&&mouseX>108){
fill(255, 0, 0);
    
}
if(mouseIsPressed&&mouseY<40&&mouseX<144&&mouseY>0&&mouseX>108){
fill(58, 221, 250);
if(sound_off_on===true){
playSound(sounds.gandalf); 
}
}
rect(95,5,40,40);  
fill(21, 0, 255);
textSize(16);
text("metal",115,24); 

fill(55, 0, 255);
rect(90+45,0,50,50);  
fill(255, 255, 255);

if(mouseY<40&&mouseX<176&&mouseY>0&&mouseX>136){
fill(255, 0, 0);
    
}
if(mouseIsPressed&&mouseY<40&&mouseX<176&&mouseY>0&&mouseX>136){
fill(58, 221, 250);
if(sound_off_on===true){
playSound(sounds.gandalf); 
}
}
rect(95+45,5,40,40);  
fill(21, 0, 255);
textSize(16);
text("wiz-\n-ard",158,24); 



fill(55, 0, 255);
rect(90+45+50,0,50,50);  
fill(255, 255, 255);

if(mouseY<40&&mouseX<176+50&&mouseY>0&&mouseX>136+50){
fill(255, 0, 0);
    
}
if(mouseIsPressed&&mouseY<40&&mouseX<176+50&&mouseY>0&&mouseX>136+50){
fill(58, 221, 250);
if(sound_off_on===true){
playSound(sounds.gandalf); 
}
}
rect(95+45+50,5,40,40);  
fill(21, 0, 255);
textSize(16);
text("ninja",158+50,20); 
textSize(13);
text("default",158+51,34); 







fill(55, 0, 255);
rect(0,FEMALE_OR_MALE_POSSITION+200,40+20,40);  
fill(255, 255, 255);

if(mouseY<FEMALE_OR_MALE_POSSITION+240&&mouseX<60&&mouseY>FEMALE_OR_MALE_POSSITION+200&&mouseX>0){
fill(255, 0, 0);
}
if(mouseIsPressed&&mouseY<FEMALE_OR_MALE_POSSITION+240&&mouseX<60&&mouseY>FEMALE_OR_MALE_POSSITION+200&&mouseX>0){
fill(0, 221, 255);
if(sound_off_on===true){
playSound(sounds.gandalf); 
}
}
rect(5,FEMALE_OR_MALE_POSSITION+205,30+20,30);  
fill(21, 0, 255);
textSize(16);
text("female",31,FEMALE_OR_MALE_POSSITION+219); 


fill(55, 0, 255);
rect(0,FEMALE_OR_MALE_POSSITION+200+40,40+20,40);  
fill(255, 255, 255);
if(mouseY<FEMALE_OR_MALE_POSSITION+240+40&&mouseX<60&&mouseY>FEMALE_OR_MALE_POSSITION+200+40&&mouseX>0){
fill(255, 0, 0);
}
if(mouseIsPressed&&mouseY<FEMALE_OR_MALE_POSSITION+240+40&&mouseX<60&&mouseY>FEMALE_OR_MALE_POSSITION+200+40&&mouseX>0){
fill(0, 221, 255);
if(sound_off_on===true){
playSound(sounds.gandalf); 
}
}
rect(5,FEMALE_OR_MALE_POSSITION+205+40,30+20,30);  
fill(21, 0, 255);
textSize(16);
text("male",29,FEMALE_OR_MALE_POSSITION+258); 

fill(55, 0, 255);
rect(spoundButton+0,spoundButtonY+200,40+20,40);  
fill(255, 255, 255);
if(mouseY<spoundButtonY+240&&mouseX<spoundButton+ 60&&mouseY>spoundButtonY+200&&mouseX>spoundButton+ 0){
fill(255, 0, 0);
}
if(mouseIsPressed&&mouseY<spoundButtonY+240&&mouseX<spoundButton+ 60&&mouseY>spoundButtonY+200&&mouseX>spoundButton+ 0){
fill(0, 221, 255);
sound_off_on =true;
soundMakeSure="on"; 
if(sound_off_on===true){
playSound(sounds.gandalf); 
}
}
rect(spoundButton+ 5,spoundButtonY+205,30+20,30);  
fill(21, 0, 255);
textSize(16);
text("on",spoundButton+ 29,spoundButtonY+219); 


fill(55, 0, 255);
rect(spoundButton+0,spoundButtonY+200+40,40+20,40);  
fill(255, 255, 255);
if(mouseY<spoundButtonY+240+40&&mouseX<spoundButton+ 60&&mouseY>spoundButtonY+200+40&&mouseX>spoundButton+ 0){
fill(255, 0, 0);
}
if(mouseIsPressed&&mouseY<spoundButtonY+240+40&&mouseX<spoundButton+60&&mouseY>spoundButtonY+200+40&&mouseX>spoundButton+ 0){
fill(0, 221, 255);
sound_off_on =false;
soundMakeSure="off"; 
}
rect(spoundButton+ 5,spoundButtonY+205+40,30+20,30);  
fill(21, 0, 255);
textSize(16);
text("off",spoundButton+ 29,spoundButtonY+258);

if(mouseY<360+50&&mouseX<100&&mouseY>360&&mouseX>0){
    
fill(255, 0, 0);
}
rect(0,360,100,40);

fill(255, 255, 255);
textSize(20);
text("CREDITS",50,380);

fill(0, 0, 0);
noStroke();
rect(301,142,100,100);
rect(302,142,100,100+2);
rect(303,143,100,100+2);

stroke(255, 0, 0);
strokeWeight(2);
fill(30, 0, 255);
rect(awesome_button+300,awesome_button+140,100,100);
fill(255, 255, 255);
if(mouseY<150+100&&mouseX<310+100&&mouseY>150&&mouseX>310){

fill(255, 0, 0);
    
}
rect(awesome_button+310,awesome_button+150,100-20,100-20);
fill(255, 255, 255);
textSize(15);
fill(0, 0, 0);
text("make your\nown levels\nBy Jacob",awesome_button+351,awesome_button+191);
fill(255, 0, 0);
if(mouseY<150+100&&mouseX<310+100&&mouseY>150&&mouseX>310){

fill(0, 21, 255);
    
}
if(mouseIsPressed&&mouseY<150+100&&mouseX<310+100&&mouseY>150&&mouseX>310){
var s = "\nhttps://www.khanacademy.org/computer-programming/platformer-engine-pro-version-10/5991819078533120\n\n";
println(s);

awesome_button=+3;
}else{
    
awesome_button=0;    
}
text("make your\nown levels\nBy Jacob",awesome_button+350,awesome_button+190);

if(mouseIsPressed&&mouseY<360+50&&mouseX<100&&mouseY>360&&mouseX>0){
    
CREDITS=true; 
}

if(if_has_votes===true){

pushMatrix();
textSize(20+xpos);
rotate(-30);
fill(30, 0, 255); 
text(votes+ "+ levels", 124, 481);
text(votes+ "+ levels", 124, 481);
text(votes+ "+ levels", 125, 481);
popMatrix();
}

if(CREDITS===true ){

Credits();

}
if(howToDoIt === true){

how();    
    
}


};

if(startScreen===true){
start();
}

if(mouseIsPressed&&mouseY<230&&mouseX<260&&mouseY>210&&mouseX>149){

startScreen=false;    

}

if(MORE===true){
    
cover();

}

if(mouseIsPressed&&mouseY<230&&mouseX<260&&mouseY>210&&mouseX>149){
    
powerCursor=false;
    
}

if(powerCursor===true){
powerState();
}

var LOGO = function(){

background(0, 0, 0);

stroke(255, 255, 255);
strokeWeight(2);
for (var i = 0; i < 50; i++) {
point(random(0, width), random(0, height));
}

fill(0,0,0,0);

stroke(0, 255, 255);

strokeWeight(2);

arc(200,200,sun_and_beam_sise+220,sun_and_beam_sise+220,move+357,move+430);

arc(200,200,sun_and_beam_sise+220,sun_and_beam_sise+220,move+479,move+550);

arc(200,200,sun_and_beam_sise+220,sun_and_beam_sise+220,move+585,move+691);

arc(200,200,sun_and_beam_sise+200,sun_and_beam_sise+200,move5+20,move5+88);

arc(200,200,sun_and_beam_sise+200,sun_and_beam_sise+200,move5+126,move5+193);

arc(200,200,sun_and_beam_sise+200,sun_and_beam_sise+200,move5+257,move5+335);

arc(200,200,sun_and_beam_sise+100-40,sun_and_beam_sise+220-40,move2+357,move2+430);

arc(200,200,sun_and_beam_sise+100-40,sun_and_beam_sise+220-40,move2+479,move2+550);

arc(200,200,sun_and_beam_sise+100-40,sun_and_beam_sise+220-40,move2+585,move2+691);

arc(200,200,sun_and_beam_sise+220-40,sun_and_beam_sise+100-40,move2+20,move2+88);

arc(200,200,sun_and_beam_sise+220-40,sun_and_beam_sise+100-40,move2+126,move2+193);

arc(200,200,sun_and_beam_sise+220-40,sun_and_beam_sise+100-40,move2+257,move2+335);

arc(200,200,sun_and_beam_sise+100+40,sun_and_beam_sise+220+40,move3+357,move3+430);

arc(200,200,sun_and_beam_sise+100+40,sun_and_beam_sise+220+40,move3+479,move3+550);

arc(200,200,sun_and_beam_sise+100+40,sun_and_beam_sise+220+40,move3+585,move3+691);

arc(200,200,sun_and_beam_sise+220+40,sun_and_beam_sise+100+40,move3+20,move3+88);

arc(200,200,sun_and_beam_sise+220+40,sun_and_beam_sise+100+40,move3+126,move3+193);

arc(200,200,sun_and_beam_sise+220+40,sun_and_beam_sise+100+40,move3+257,move3+335);

noStroke();

move+=6;

move2+=4;

move3+=8;

move4+=1;

move5+=10;



fill(17, 0, 255);

ellipse(200,200,sun_and_beam_sise+100,sun_and_beam_sise+100);

fill(0, 255, 17);

ellipse(200,200,sun_and_beam_sise+7,sun_and_beam_sise+-23);
ellipse(238,200,sun_and_beam_sise+7,sun_and_beam_sise+-23);
ellipse(220,216,sun_and_beam_sise+7,sun_and_beam_sise+-23);
ellipse(177,161,sun_and_beam_sise+7,sun_and_beam_sise+-23);
ellipse(177,248,sun_and_beam_sise+2,sun_and_beam_sise+-30);

fill(255, 255, 255,150);
ellipse(159,226,sun_and_beam_sise+2,sun_and_beam_sise+-30);
ellipse(250,182,sun_and_beam_sise+2,sun_and_beam_sise+-30);
ellipse(184,151,sun_and_beam_sise+2,sun_and_beam_sise+-30);
ellipse(219,191,sun_and_beam_sise+2,sun_and_beam_sise+-30);
ellipse(219,249,sun_and_beam_sise+2,sun_and_beam_sise+-30);
textSize(29.6);

fill(0, 255, 221);

text("ISAAC EMERALD ♦○♦",width/2,height/2-180);

text("ISAAC EMERALD ♦○♦",width/2,height/2-181);

textSize(30);

fill(0, 115, 255);

text("ISAAC EMERALD ♦○♦",width/2,height/2-182);

textSize(18);

fill(255, 0, 0);

text("Sharing Programs\nWorld Wide",width/2,height/2);
text("Sharing Programs\nWorld Wide",width/2,height/2);
text("Sharing Programs\nWorld Wide",width/2,height/2);

fill(148, 255, 155,20);

ellipse(197,196,sun_and_beam_sise+90,sun_and_beam_sise+90);

ellipse(193,193,sun_and_beam_sise+80,sun_and_beam_sise+80);

ellipse(190,190,sun_and_beam_sise+70,sun_and_beam_sise+70);

ellipse(188,188,sun_and_beam_sise+60,sun_and_beam_sise+60);

};
scene+=1;
if(scene>1&&LOGOSTATE===true){
    
LOGO();
}

if(scene>80&&LOGOSTATE===true){

fill(255, 255, 255);
rect(0,0,400,400);

textSize(60);
fill(0, 0, 0);
text("ASSISTANT\nDESIGNER",200,200);

}

if(scene>120&&LOGOSTATE===true){
    background(138, 138, 138);
    fill(0, 0, 255,50);
 falling+=468;
 
 fill(234, 247, 52,100);
 noStroke();
arc(200+random(-250,156),200,24,229,69,266);
    arc(237+random(-250,156),200,24,358,261,459);
  

    if (falling > 320){
        falling=0;
        
        
    }
        
    fill(49, 117, 9);
    rect(0,356,400,127);
    
    stroke(8, 0, 245);
strokeWeight(4);
for (var i = 0; i < 200; i++) {
    point(random(0, width), random(0, height)+falling);
}

stroke(0, 13, 255);
strokeWeight(1);
fill(0,0,0,0);
for (var i = 0; i < random(10,20); i++) {
    
    ellipse(random(0, width),random(360,400),20+random(0,20),10);
}
    
    
    
    
    noStroke();
    fill(97, 97, 97);
  
    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);
      
    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);
      
    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);
      
    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);
      
    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);
      
    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,394),random(14,67),100,100);

    ellipse(random(-12,392),random(-56,97),100,100);



    ellipse(random(-12,392),random(14,81),100,100);

    ellipse(random(-12,392),random(14,81),100,100);
        
        fill(36, 113, 255);
        ellipse(200,200,400+xpos5,100+xpos5);
        
        fill(46, 46, 46);
        textSize(xpos5+71.5);
        textAlign(CENTER, CENTER);
        text("Kenaniah", width/2, height/2);
        fill(34, 255, 0);
        textSize(xpos5+73);
        textAlign(CENTER, CENTER);
        text("Kenaniah", width/2, height/2);
        
        
        fill(255, 255, 255,50);
        arc(200,200,400+xpos5,100+xpos5,-135,50);
        
        xpos5+=speed5;
        if(xpos5 > 5  ) {  
        speed5 =-12; }
        if(xpos5 < -5  ) {  
        speed5 = 6; }}
        
if(scene>160&&LOGOSTATE===true){
    
fill(255, 255, 255);
rect(0,0,400,400);

textSize(60);
fill(0, 0, 0);
text("ENGINE\nDEVELOPER",200,200);

}
        
if(scene>190&&LOGOSTATE===true){
    var jacobLogo = function(x,y,sz,anime){
        var l1,l3,l4;
        if(anime){
            l1 = (frameCount<230/2?(max(0,frameCount*2-30)):200);
        l3 = (frameCount<(295+30)/4?(max(0,frameCount*4-60)):275);
        l4 = (frameCount<475/4?(max(0,frameCount*4-200)):275);
        }else{
            l1=200;
            l3=275;
            l4=275;
        }
        var Jacob = function(lx,ly){
            pushMatrix();
            translate(lx,ly);
            noFill();
            line(100,167,100,220);
            arc(50,227,100,100,0,121);
            line(67,160,100+l1,160);
            arc(147,232,80,91,35,311);
            line(175,192,184,274);
            arc(224,230,70,88,67,300);
            ellipse(284,230,60,88);
            line(335,-213+l4,335,0+l3);
            ellipse(366,230,60,88);
            popMatrix();
        };
    pushMatrix();
    translate(x,y);
    scale(sz/10);
    noStroke();
    
    fill(0, 6, 77);
    rect(0,0,400,400);
    stroke(1, 8, 61);
    /*
    strokeWeight(10+cos(millis()/10)*5);
    stroke(0, 7, 74);
    for(var i=0;i<400;i+=20){
        
        line(i,0,i,400);
        line(0,i,400,i);
        
    }*/
    strokeWeight(2);
    for(var i=0;i<400;i+=2){
        stroke(0, 6, i/2);
        line(0,i,400,i);
    }
    
    strokeWeight(20);
    stroke(1, 8, 61);
    noFill();
    rect(0,0,400,400);
    stroke(0, 43, 255);
    Jacob(-10,0);
    strokeWeight(20);
    stroke(0, 0, 15);
    Jacob(-13,0.5);
    pushMatrix();
    translate(-12,385);
    scale(1.00,-0.32);
    stroke(0, 3, 41);
    Jacob(0,0);
    popMatrix();
    
    popMatrix();
};

var s = random(10);
var x = random(400-(s*10));
var y = random(400-(s*10));
jacobLogo(0,0,10,true);    

}

if(scene>210&&LOGOSTATE===true){

fill(255, 255,255,COOL);
rect(0,0,400,400);

COOL+=10;
}

if(COOL>300&&LOGOSTATE===true){
    
LOGOSTATE = false;  
    
}

if(LOGOSTATE===true){
fill(255, 0, 0,150);
if(mouseY<70+50&&mouseX<400&&mouseY>50&&mouseX>300){
fill(255, 0, 0);
}
if(mouseIsPressed&&mouseY<70+50&&mouseX<400&&mouseY>50&&mouseX>300){
LOGOSTATE=false;    
    
}
rect(300,50,100,70,20);
fill(255, 255, 255);
textSize(20);
text("SKIP\nCREDITS",350,82);
powerState();
}
};

player.health= 1000000;
