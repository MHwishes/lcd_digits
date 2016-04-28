describe("lcd_digits", function () {
    var lcds;

    beforeEach(function () {
        lcds = loadLcdDigits();
    });

    it("should get the correct result", function () {

        spyOn(console, 'log');

        creatLcdDigits("910");

        expectText = '._. ... ._. ' + '\n'
            + '|_| ..| |.| ' + '\n'
            + '..| ..| |_| ';

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});


describe("buildDigitArray()", function () {

    it("should print correct array", function () {

        var digitArray = buildDigitArray("910");
        expect(digitArray).toEqual(['9', '1', '0']);
    })
});

describe("buildLcdDigits()", function () {

    it("should get the correct LCD_digits", function () {

        var digitArray = ['9', '1', '0'];
        var lcds = loadLcdDigits();

        var lcdDigts = buildLcdDigts(digitArray, lcds);

        var expectResult = [['._.', '|_|', '..|'], ['...', '..|', '..|'], ['._.', '|.|', '|_|']];

        expect(lcdDigts).toEqual(expectResult);
    });
});

describe(" buildLcdDigitText()", function () {

    it("should print correct digits", function () {

        var lcdDigits = [['._.', '|_|', '..|'], ['...', '..|', '..|'], ['._.', '|.|', '|_|']];

        spyOn(console, 'log');
        buildLcdDigitText(lcdDigits);
        expectText = '._. ... ._. ' + '\n'
            + '|_| ..| |.| ' + '\n'
            + '..| ..| |_| ';
        expect(console.log).toHaveBeenCalledWith(expectText);

    })
});
