var z=0;
var red=0;
var green=0;
var blue=0;
var msg=0;
var rgb=0;
var message_nc= new Array();
var message_ie= new Array();
var value=0;
var convert = new Array()
var hexbase= new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");

var color="#ffffff";

message_nc[0]='一<br>個<br>遙<br>遠<br>的<br>夢<br>是<br>兒<br>時<br>'
message_nc[1]='一<br>串<br>豪<br>放<br>的<br>笑<br>是<br>年<br>少<br>'
message_nc[2]='我<br>從<br>兒<br>時<br>走<br>到<br>年<br>少<br>'
message_nc[3]='知<br>道<br>了<br>'
message_nc[4]='一<br>口<br>口<br>的<br>飯<br>　<br>一<br>瓢<br>瓢<br>的<br>水<br>'
message_nc[5]='是<br>父<br>親<br>的<br>汗<br>　<br>母<br>親<br>的<br>淚<br>'
message_nc[6]='然<br>後<br>白<br>髮<br>我<br>將<br>會<br>染<br>上<br>'
message_nc[7]='然<br>後<br>皺<br>紋<br>將<br>佈<br>滿<br>臉<br>龐<br>'
message_nc[8]='我<br>打<br>年<br>少<br>走<br>到<br>年<br>老<br>'
message_nc[9]='也<br>把<br>那<br>'
message_nc[10]='一<br>口<br>口<br>的<br>飯<br>　<br>一<br>瓢<br>瓢<br>的<br>水<br>'
message_nc[11]='留<br>給<br>我<br>的<br>兒<br>　<br>我<br>的<br>女<br>'
message_nc[12]='<font size=7><b>︻<br>感<br>恩<br>︼</b></font>'

message_ie[0]='陰沈的天空 落下最苦的一滴淚'
message_ie[1]='不曾閣眼的思念 如海的深邃'
message_ie[2]='是這樣嗎 流浪的天空'
message_ie[3]='並非 生命最後的終站'
message_ie[4]='踉蹌在這無垠的天與地'
message_ie[5]='蒼茫的雲　渴望漲潮的日子'
message_ie[6]='在極遠極靜的岸邊'
message_ie[7]='我把記憶深深埋葬'
message_ie[8]='一如擱淺的貝殼 等待旅人的青睞'
message_ie[9]='如果如果　來到這裡 請豎耳傾聽'
message_ie[10]='微風中孤獨的告白'
message_ie[11]='輕輕拾起　將我帶走'
message_ie[12]='歲月如落葉側側'
message_ie[13]='在浪濤起伏的砂粒間'
message_ie[14]='我在這裡留下'
message_ie[15]='直到有一天 赫然被你發現'

for (x=0; x<16; x++){
for (y=0; y<16; y++){
convert[value]= hexbase[x] + hexbase[y];
value++;
}
}

redx=color.substring(1,3)
greenx=color.substring(3,5)
bluex=color.substring(5,7)
hred=eval(parseInt(redx,16))
hgreen=eval(parseInt(greenx,16))
hblue=eval(parseInt(bluex,16))


function banner_run(){
eval(layerName+"['banner']"+layerStyle+".left=-10")
timer1=window.setInterval('run()',50)
}

function run(){
if ((red+5)<hred){
red+=5;
redx = convert[red]
}
if ((green+5)<hgreen){
green+=5;
greenx = convert[green]
}
if ((blue+5)<hblue){
blue+=5;
bluex = convert[blue]
}
rgb = "#"+redx+greenx+bluex;
if (z<59){
if(ns4){
document.layers["banner"].document.writeln('<P align="left"><b><font  size=5 color="'+rgb+'">'+message_nc[msg]+'</font></b></P>')
document.layers["banner"].document.close();
eval(layerName+"['banner']"+layerStyle+".left+=2")
       }
else
    {banner.innerHTML='<b><font face="標楷體" size=2 color="'+rgb+'">'+message_ie[msg]+'</font></b>';
eval(layerName+"['banner']"+layerStyle+".left=(-10+2*z)");
     }
z++
            }

else
{
window.clearInterval(timer1);
if((msg<message_nc.length-1)){
msg++
z=0
red=0;
green=0;
blue=0;
window.setTimeout('banner_run()',500);
                                           }
else{
msg=0
z=0
red=0;
green=0;
blue=0;
window.setTimeout('banner_run()',1000);
        }
                                             }
}
