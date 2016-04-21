/**
 * Created by sun on 16-4-21.
 */
describe("lcd_digits",function(){
    var lcds;

    beforeEach(function(){
        lcds=loadLcdDigits();
    });

    it("should get the correct result",function(){

        spyOn(console, 'log');

        printLcdDigits("910");

        expectText='._. ... ._. '+'\n'
            +'|_| ..| |.| '+'\n'
            +'..| ..| |_| ';

        expect(console.log).toHaveBeenCalledWith(expectText);


    });

});


describe("buildDigitArray()",function(){

   it("should print correct array",function(){

       var digitArray=buildDigitArray("910");
       expect(digitArray).toEqual(['9','1','0']);
   })
});

describe("buildLcdDigits()",function(){

    it("should get the correct LCD_digits",function(){

        var digitArray=['9','1','0'];
        var lcds=lcdDigits();
        
        var lcdDigts=buildLcdDigts(digitArray,lcds);

        var expectResult=[{lcdDigit:{
            firstline:'._.',
            secondline:'|_|',
            thirdline:'..|'

        }},{
            lcdDigit:{
                firstline:'...',
                secondline:'..|',
                thirdline:'..|'

            }
        },{lcdDigit:{
            firstline:'._.',
            secondline:'|.|',
            thirdline:'|_|'

        }}];

        expect(lcdDigts).toEqual(expectResult);
    });
    
});

describe(" buildLcdDigitsPrint()",function(){
    
    it("should print correct digits",function(){

        var lcdDigits=[{lcdDigit:{
            firstline:'._.',
            secondline:'|_|',
            thirdline:'..|'

        }},{
            lcdDigit:{
                firstline:'...',
                secondline:'..|',
                thirdline:'..|'

            }
        },{lcdDigit:{
            firstline:'._.',
            secondline:'|.|',
            thirdline:'|_|'

        }}];

        spyOn(console, 'log');
        buildLcdDigitsPrint(lcdDigits);
        expectText='._. ... ._. '+'\n'
                  +'|_| ..| |.| '+'\n'
                  +'..| ..| |_| ';
        expect(console.log).toHaveBeenCalledWith(expectText);

    })
    
});
