/**
 * Created by sun on 16-4-21.
 */
function creatLcdDigits(input){
    
    var digitsArray=buildDigitArray(input);

    var lcds=loadLcdDigits();
    var lcdDigits=buildLcdDigts(digitsArray,lcds);

    buildLcdDigitText(lcdDigits);
}

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

function   buildLcdDigitText(lcdDigits){
    var lcdDigitText='';
    var lcdDigitText1='';
    var lcdDigitText2='';
    var lcdDigitText3='';

    lcdDigits.forEach(function(lcdDigit){
        lcdDigitText1+=lcdDigit.lcdDigit.firstline+' ';
        lcdDigitText2+=lcdDigit.lcdDigit.secondline+' ';
        lcdDigitText3+=lcdDigit.lcdDigit.thirdline+' ';
    });
    lcdDigitText=lcdDigitText1+'\n'+lcdDigitText2+'\n'+lcdDigitText3;
    console.log(lcdDigitText);
}