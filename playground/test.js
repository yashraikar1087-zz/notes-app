var md5 = require('md5');
var randomstring = require("randomstring");


    // console.log(md5("madwire"));
    // yourNumber = parseInt("b", 16);
    // var chars = "overpopulation".split('');
    // console.log(chars);

    

    var compareHashes=(string1,string2)=>{
        char1=string1.split("");
        char2=string2.split("");
        var result=0;
        for(i=0;i<char1.length;i++){
            char1[i]= parseInt(char1[i], 16);
           // console.log(char1[i],char2[i])
            char2[i]= parseInt(char2[i], 16);
            result +=Math.abs(char1[i]-char2[i]);
        }
        return result;
    }

   // console.log(compareHashes("3b2f","78a2"));
    var controller=(num,string1)=>{
        var startTime=Date.now();
        var md5String1=md5(string1);
        var timeRun = Date.now()+num;
        var least=10000;
        var bestString='';
        var totalTimeRun=0;
        var timesCompared=0;
        while(timeRun>Date.now()){
            var random=randomstring.generate({
                length:10
            });
            var number=compareHashes(md5String1,md5(random));
            if(number<least){
                    least=number;
                    bestString=random;
            }
            timesCompared++;
        }
        totalTimeRun=Date.now()-startTime;
        console.log("Best String:",bestString,"\n","Difference:",least,"\n","Total Time Run:",totalTimeRun,"\n",timesCompared);
    }
    controller(3000,"madwire");