


function makeAnswer(num){
   var result = [];
   var minMax = [];
   (function checkNumberMinMax(num){

      var maxNumber = '1',
          minNumber = '1';

      for(var i = 0; i < num; i++){
         maxNumber += 0;
      }

      for(var i = 0; i < num-1; i++){
         minNumber += 0;
      }

      minMax.push(maxNumber-1,+minNumber);
   })(num);

   function checkNumberEven(num){
      num = num.length;
      // console.log(num);

      if(num % 2 == 0){
         return checkNumberLength(number);
      }

      return false;
   }

   function checkNumberLength(num){
      num = String(num);
      var numLength = String(num).length;

      for(var i = 0, j = numLength-1; i < numLength; i++, j--) {
         if(!(num[i] == num[j])) return false;


      }

      return true;
   }

   for(var i = minMax[1]; i <= minMax[0]; i++) {

      for(var j = minMax[1]; j <= minMax[0]; j++ ) {
         var number = j * i;
         
         if(checkNumberEven(String(number))){          

               result.push([number, `${i} * ${j}`]);
              
         }

      }

   }

   result.sort(function(a,b){
      return b[0] - a[0];
   })

   if(!result.length) return 'Нету здесь такого!';
   
   return `Ответ: ${result[0][0]+'\n'}Произведение: ${result[0][1]}`
}

console.log(makeAnswer(2));