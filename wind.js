
ie4 = ((navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4 ))
ns4 = ((navigator.appName == "Netscape") && (parseInt(navigator.appVersion) >= 4 ))
if (ie4) {
    layerName="document.all";
    layerStyle=".style";
           } else {
    layerName="document.layers";
    layerStyle="";
           }       

function leaf(idSelect,start,end,step) 
{
   if (start<end)
   {
     eval(layerName+"['"+idSelect+"']"+layerStyle+".left = (365-start);")
     eval(layerName+"['"+idSelect+"']"+layerStyle+".top = (185+start/2);")
           start=start+step;
       IDTimer=setTimeout("leaf('"+idSelect+"',"+start+","+end+","+step+")",50)
   }
else{
eval(layerName+"['title']"+layerStyle+".visibility=\"hidden\"")
eval(layerName+"['regret']"+layerStyle+".visibility='visible'")
window.status="½Ð«ö¤U¡i´Ý¸­¡jÂ÷¶}";return true;
        }
}

function fly(layerID, begin, end, step, speed){  
eval(layerName+"['leaf']"+layerStyle+".visibility='visible'");
eval(layerName+"['leaf2']"+layerStyle+".visibility='visible'");
    if (begin < end){ 
      eval(layerName + '["' + layerID +'"]' + layerStyle + '.left =(begin-250)');
      eval(layerName + '["' + layerID +'"]' + layerStyle + '.top =(-begin/4)');
     begin=begin+step; 
     setTimeout("fly('"+layerID+"',"+begin+","+end+","+step+","+speed+")",speed); 
    }   
else{
banner_run();
setTimeout("title('title',0,100,1,10)",50000);

        }
               }  

function title(layerID, begin, end, step, speed){  
eval(layerName+"['title']"+layerStyle+".visibility='visible'")
    if (begin < end){ 
      eval(layerName + '["' + layerID +'"]' + layerStyle + '.left =65');
      eval(layerName + '["' + layerID +'"]' + layerStyle + '.top =(420-begin)');
     begin=begin+step; 
     setTimeout("title('"+layerID+"',"+begin+","+end+","+step+","+speed+")",speed); 
                          }   
else{
leaf('leaf',0,600,10);
        }
                                  }