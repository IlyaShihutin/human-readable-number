let one = [  "","one ", "two ", "three ", "four ", 
                 "five ", "six ", "seven ", "eight ", 
                 "nine ","ten ", "eleven ", "twelve ", 
                 "thirteen ", "fourteen ", "fifteen ", 
                 "sixteen ", "seventeen ", "eighteen ", 
                 "nineteen "
    ];         
    let ten = [ "","","twenty", "thirty", "forty", 
                 "fifty", "sixty", "seventy", "eighty", 
                 "ninety"];
module.exports = function toReadable (number) {
number = String(number).split('');
    let str=''; 
    if (number[0]==0) return "zero";
    if (number.length==3) 
        { 
            str+=one[number[0]]+'hundred' + ' ';
            number.shift();
        }
    if (number.length==2 && number[0]>=2 )
        { 
            str+=ten[number[0]]+' ';
            number.shift(); 
        }
    else if (number.length==2)
        { 
            var g=number[0]+number[1];
            str+=one[Number(g)];
            return str.trim(); 
        }
    if (number[0]!=0)str+=one[number[0]];
    return str.trim();  
}
