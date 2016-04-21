/**
 * Created by sun on 16-4-21.
 */
function printLcdDigits(input){
    
    var digitsArray=buildDigitArray(input);

    var lcds=loadLcdDigits();
    var lcdDigits=buildLcdDigts(digitsArray,lcds);

    buildLcdDigitsPrint(lcdDigits);


}

/**
 * Created by sun on 16-4-21.
 */
function loadLcdDigits(){

    return[
        {
            digit:'0',
            lcdDigit:{
                firstline:'._.',
                secondline:'|.|',
                thirdline:'|_|'

            }
        },
        {
            digit:'1',
            lcdDigit:{
                firstline:'...',
                secondline:'..|',
                thirdline:'..|'

            }
        },
        {
            digit:'2',
            lcdDigit:{
                firstline:'._.',
                secondline:'._|',
                thirdline:'|_.'

            }
        },
        {
            digit:'3',
            lcdDigit:{
                firstline:'._.',
                secondline:'._|',
                thirdline:'._|'

            }
        },
        {
            digit:'4',
            lcdDigit:{
                firstline:'...',
                secondline:'|_|',
                thirdline:'|_|'

            }
        },
        {
            digit:'5',
            lcdDigit:{
                firstline:'._.',
                secondline:'|_.',
                thirdline:'._|'

            }
        },
        {
            digit:'6',
            lcdDigit:{
                firstline:'._.',
                secondline:'|_.',
                thirdline:'|_|'

            }
        },
        {
            digit:'7',
            lcdDigit:{
                firstline:'._.',
                secondline:'..|',
                thirdline:'..|'

            }
        },
        {
            digit:'8',
            lcdDigit:{
                firstline:'._.',
                secondline:'|_|',
                thirdline:'|_|'

            }
        },
        {
            digit:'9',
            lcdDigit:{
                firstline:'._.',
                secondline:'|_|',
                thirdline:'..|'

            }
        }

    ]
}







function　buildDigitArray(input){
    var digitsArray=[];

    digitsArray=input.split("");

    return digitsArray;
}



function findLcdDigits(digit,lcds){
    for(var i=0;i<lcds.length;i++){
        if(digit===lcds[i].digit)
            return lcds[i];
    }
}

function buildLcdDigts(digitsArray,lcds){

    var lcdDigits=[];

    digitsArray.forEach(function(digit){

       var lcd=findLcdDigits(digit,lcds);

        if(lcd){
            lcdDigits.push({lcdDigit:lcd.lcdDigit});
        }

    });
    return lcdDigits;
    
}

function   buildLcdDigitsPrint(lcdDigits){
    var lcdDigitText='';

    lcdDigits.forEach(function(lcdDigit){
        lcdDigitText+=lcdDigit.lcdDigit.firstline+' ';
    });

    lcdDigitText+='\n';

    lcdDigits.forEach(function(lcdDigit){
        lcdDigitText+=lcdDigit.lcdDigit.secondline+' ';
    });

    lcdDigitText+='\n';

    lcdDigits.forEach(function(lcdDigit){
        lcdDigitText+=lcdDigit.lcdDigit.thirdline+' ';
    });

    console.log(lcdDigitText);

}