var canvas = document.getElementById("plot1");

canvas.width=document.getElementById("plot1").clientWidth;

canvas.height=document.getElementById("plot1").clientHeight;

var ctx = canvas.getContext("2d");

//setting height and width of the individual rectangles
var h = canvas.height/24;
var w = canvas.width;

//setting color of the individual rectangles
var zero = "#000000";
var one = "#030026";
var two = "#040034";
var three = "#060048";
var four = "#070058";
var five = "#090071";
var six = "#10039b";
var seven = "#1707c1";
var eight = "#2514dd";
var nine = "#1539ff";
var ten = "#2c4cff";
var eleven = "#1d62fd";
var twelve = "#0b72ff";
var thirteen = "#007ffd";
var fourteen = "#0089ff";
var fifteen = "#007ffd";
var sixteen = "#0b72ff";
var seventeen = "#1d62fd";
var eighteen = "#2c4cff";
var nineteen = "#1434eb";
var twenty = "#001dbe";
var twentyone = "#02199b";
var twentytwo = "#000f65";
var twentythree = "#000940";


    

//ctx.strokeStyle = "#000000";
//ctx.strokeWidth = 2;

//drawing rectangles

//zero
ctx.fillStyle = "#000000";
//ctx.rect(0,0,w+1,h);
ctx.fillRect(0,0,w+2,h+1);
//ctx.stroke();

//one
ctx.fillStyle = "#030026";
ctx.fillRect(0,h,w+2,h+1);

//two
ctx.fillStyle = "#040034";
ctx.fillRect(0,2*h,w+2,h+1);

//three
ctx.fillStyle = "#060048";
ctx.fillRect(0,3*h,w+2,h+1);

//four
ctx.fillStyle = "#070058";
ctx.fillRect(0,4*h,w+2,h+1);

//five
ctx.fillStyle = "#090071";
ctx.fillRect(0,5*h,w+2,h+1);

//six
ctx.fillStyle = "#10039b";
ctx.fillRect(0,6*h,w+2,h+1);

//seven
ctx.fillStyle = "#1707c1";
ctx.fillRect(0,7*h,w+2,h+1);

//eight
ctx.fillStyle = "#2514dd";
ctx.fillRect(0,8*h,w+2,h+1);

//nine
ctx.fillStyle = "#1539ff";
ctx.fillRect(0,9*h,w+2,h+1);

//ten
ctx.fillStyle = "#2c4cff";
ctx.fillRect(0,10*h,w+2,h+1);

//eleven
ctx.fillStyle = "#1d62fd";
ctx.fillRect(0,11*h,w+2,h+1);

//twelve
ctx.fillStyle = "#0b72ff";
ctx.fillRect(0,12*h,w+2,h+1);

//thirteen
ctx.fillStyle = "#007ffd";
ctx.fillRect(0,13*h,w+2,h+1);

//fourteen
ctx.fillStyle = "#0089ff";
ctx.fillRect(0,14*h,w+2,h+1);

//fifteen
ctx.fillStyle = "#007ffd";
ctx.fillRect(0,15*h,w+2,h+1);

//sixteen
ctx.fillStyle = "#0b72ff";
ctx.fillRect(0,16*h,w+2,h+1);

//seventeen
ctx.fillStyle = "#1d62fd";
ctx.fillRect(0,17*h,w+2,h+1);

//eighteen
ctx.fillStyle = "#2c4cff";
ctx.fillRect(0,18*h,w+2,h+1);

//nineteen
ctx.fillStyle = "#1434eb";
ctx.fillRect(0,19*h,w+2,h+1);

//twenty
ctx.fillStyle = "#001dbe";
ctx.fillRect(0,20*h,w+2,h+1);

//twentyone
ctx.fillStyle = "#02199b";
ctx.fillRect(0,21*h,w+2,h+1);

//twentytwo
ctx.fillStyle = "#000f65";
ctx.fillRect(0,22*h,w+2,h+1);

//twentythree
ctx.fillStyle = "#000940";
ctx.fillRect(0,23*h,w+2,h+1);

var m = 20;

ctx.fillStyle = "#ffffff";
ctx.font = "20px Arial";

//cities
ctx.fillText("Boston",5,m);

//makes following entries more transparent
ctx.fillStyle = "rgba(255, 255, 255, 0.57)";

ctx.fillText("Halifax",5,m+h)
ctx.fillText("Buenos Aires",5,m+2*h)
ctx.fillText("São Paulo",5,m+3*h);
ctx.fillText("Copenhagen",5, m+4*h);
//0 time (baseline)
ctx.fillText("London",5,m+5*h);
ctx.fillText("Rome",5,m+6*h);
ctx.fillText("Jerusalem",5,m+7*h);
ctx.fillText("Istanbul",5,m+8*h);
ctx.fillText("Dubai",5,m+9*h);
ctx.fillText("Tashkent",5,m+10*h);
ctx.fillText("Dhaka",5,m+11*h);
ctx.fillText("Jakarta",5,m+12*h);
ctx.fillText("Beijing",5,m+13*h);
ctx.fillText("Seoul",5,m+14*h);
ctx.fillText("Sydney",5,m+15*h);
ctx.fillText("Noumea",5,m+16*h);
ctx.fillText("Suva",5,m+17*h);
ctx.fillText("Apia",5,m+18*h);
ctx.fillText("Kiribati",5,m+19*h);
ctx.fillText("Anchorage",5,m+20*h)
ctx.fillText("Los Angeles",5,m+21*h);
ctx.fillText("Calgary",5,m+22*h);
ctx.fillText("Mexico City",5,m+23*h);

//times

ctx.fillStyle = "#ffffff";

ctx.fillText("00:43",w-55,m);

//for transparency
ctx.fillStyle = "rgba(255, 255, 255, 0.57)";

ctx.fillText("01:43",w-55,m+h);
ctx.fillText("02:43",w-55,m+2*h);
ctx.fillText("03:43",w-55,m+3*h);
ctx.fillText("04:43",w-55,m+4*h);
ctx.fillText("05:43",w-55,m+5*h);
ctx.fillText("06:43",w-55,m+6*h);
ctx.fillText("07:43",w-55,m+7*h);
ctx.fillText("08:43",w-55,m+8*h);
ctx.fillText("09:43",w-55,m+9*h);
ctx.fillText("10:43",w-55,m+10*h);
ctx.fillText("11:43",w-55,m+11*h);
ctx.fillText("12:43",w-55,m+12*h);
ctx.fillText("13:43",w-55,m+13*h);
ctx.fillText("14:43",w-55,m+14*h);
ctx.fillText("15:43",w-55,m+15*h);
ctx.fillText("16:43",w-55,m+16*h);
ctx.fillText("17:43",w-55,m+17*h);
ctx.fillText("18:43",w-55,m+18*h);
ctx.fillText("19:43",w-55,m+19*h);
ctx.fillText("20:43",w-55,m+20*h);
ctx.fillText("21:43",w-55,m+21*h);
ctx.fillText("22:43",w-55,m+22*h);
ctx.fillText("23:43",w-55,m+23*h);
















