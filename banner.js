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

message_nc[0]='�@<br>��<br>��<br>��<br>��<br>��<br>�O<br>��<br>��<br>'
message_nc[1]='�@<br>��<br>��<br>��<br>��<br>��<br>�O<br>�~<br>��<br>'
message_nc[2]='��<br>�q<br>��<br>��<br>��<br>��<br>�~<br>��<br>'
message_nc[3]='��<br>�D<br>�F<br>'
message_nc[4]='�@<br>�f<br>�f<br>��<br>��<br>�@<br>�@<br>�]<br>�]<br>��<br>��<br>'
message_nc[5]='�O<br>��<br>��<br>��<br>��<br>�@<br>��<br>��<br>��<br>�\<br>'
message_nc[6]='�M<br>��<br>��<br>�v<br>��<br>�N<br>�|<br>�V<br>�W<br>'
message_nc[7]='�M<br>��<br>�K<br>��<br>�N<br>�G<br>��<br>�y<br>�e<br>'
message_nc[8]='��<br>��<br>�~<br>��<br>��<br>��<br>�~<br>��<br>'
message_nc[9]='�]<br>��<br>��<br>'
message_nc[10]='�@<br>�f<br>�f<br>��<br>��<br>�@<br>�@<br>�]<br>�]<br>��<br>��<br>'
message_nc[11]='�d<br>��<br>��<br>��<br>��<br>�@<br>��<br>��<br>�k<br>'
message_nc[12]='<font size=7><b>�k<br>�P<br>��<br>�l</b></font>'

message_ie[0]='���H���Ѫ� ���U�̭W���@�w�\'
message_ie[1]='�����ղ������ �p�����`��'
message_ie[2]='�O�o�˶� �y�����Ѫ�'
message_ie[3]='�ëD �ͩR�̫᪺�ׯ�'
message_ie[4]='�Wb�o�L�����ѻP�a'
message_ie[5]='�a�����@���溦�骺��l'
message_ie[6]='�b�������R������'
message_ie[7]='�ڧ�O�в`�`�I��'
message_ie[8]='�@�p���L������ ���ݮȤH���C��'
message_ie[9]='�p�G�p�G�@�Ө�o�� �нݦն�ť'
message_ie[10]='�L�����t�W���i��'
message_ie[11]='�����B�_�@�N�ڱa��'
message_ie[12]='����p��������'
message_ie[13]='�b���ܰ_�񪺬�ɶ�'
message_ie[14]='�ڦb�o�̯d�U'
message_ie[15]='���즳�@�� ���M�Q�A�o�{'

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
    {banner.innerHTML='<b><font face="�з���" size=2 color="'+rgb+'">'+message_ie[msg]+'</font></b>';
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
