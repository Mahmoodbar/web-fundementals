function big(arr){ ////// >>>>>>1<<<<<
    for ( var i=0; i<arr.length; i++){
      if (arr[i] > 0){
        arr[i]= 'big';
      }
    }
    return arr;
  }
  console.log(big([2,-1,5,-5]));


  function lowhigh(arr){ ////// >>>>>>>>2<<<<<<<<<
    var max=arr[0];
    var min = arr[0];
      for ( var i=0; i<arr.length; i++){
      if (max > arr[i]){
       max = arr[i];
      }
      
      if (min < arr[i]){
        min = arr[i];
      }
      
    }
    return max;
    console.log(min);
  }
  console.log(lowhigh([2,-1,5,-5,-8,9,-100]));



  function second(arr) { //////>>>3<<<
    console.log ( arr[arr.length-2]); 
  for ( var i = 0 ; i < arr.length ; i++){
  
   if ( arr [i] % 2 !=0){
  return arr[i] ;
  }
  
   }
  
  }
  
  console.log(second([13, 8, 10, 7,6]))


  function doubleVision(arr){ ////// >>>>>>4<<<<<
    var newarr=[];
    for ( var i =0 ; i < arr.length ; i++){
       var x = arr[i]*arr[i];
      newarr.push(x);
    }
    return newarr;
  }
  console.log(doubleVision([2,4,5]));

  function countpos(arr) { ///// >>>>>5<<<<<<
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
      if( arr[i] > 0) {
        counter++;
    
      }
    }
     arr[arr.length-1]=counter;
    return arr;
  }
  console.log(countpos([-1, 6, 7]));


  function evenodd(arr) { ////////>>>>6<<<<<<
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i + 2] % 2 == 0) {
        console.log('Even more so!');
      }
      if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 1 && arr[i + 2] % 2 == 1) {
        console.log('thats odd');
      }
    }
  }
  console.log(evenodd([1, 3, 5, 6, 8, 2, 7]));


  function incr(arr) { /////// >>>>> 7 <<<<<
    for (var i =0; i < arr.length ; i++){
      if ( i%2!=0){
        arr[i]=arr[i]+1;
      }
    }
    return arr;
    }
    console.log(incr([1, 3, 5, 6, 8, 2, 7]));

    function previousLengths(arr){ //// >>>>>>8<<<<<<
        for (var i = arr.length-1; i > 0; i--){
            arr[i] = arr[i-1].length;
        }
        return arr;
    }
    console.log (previousLengths([5,'high',5,'go',5]));

    function seven(arr) { ////// >>>>9<<<<
        for (var i =0; i < arr.length ; i++){
         arr[i]=arr[i]+7; 
        }
        return arr;
        }
        console.log(seven([1, 3, 5, 6, 8, 2, 7]));

 
        function RevArr(arr){  // >>>>>>>>>>>>>>>10<<<<<<<<<<<<<
  
            for (var i = 0; i <arr.length/2; i++){
               var temp = arr [ i];
               arr[i]=arr[arr.length-1-i];
               arr[arr.length-1-i]=temp;
        
            }
            return arr;
        }
        console.log(RevArr([5,8,2,1])); 



        function negatives(arr) { // >>>>>>>>11<<<<<
            var narr = [];
            for (var i = 0; i < arr.length; i++) {
               if (arr[i] >0) {
              narr[i]= arr[i]*-1;
          
            }
            else {narr.push(arr[i]); }
          
               
            }
            return narr;
          }
          console.log(negatives([5, 2, 8, 5]));



          function hungry(arr) { ////////>>>>>>>>12<<<<<
            var narr = [];
            for (var i = 0; i< arr.length; i++) {
               if (arr[i]=='food'){
                 console.log('yummy');
               }
               else { console.log('im hungry')}
               
          }
          }
          
          console.log(hungry(['food', 2, 8, 5]));


          function Center(arr){  ///////// >>>>>>>>13<<<<<
            for (var i = 0; i < arr.length/2; i+=2){
                var temp = arr[i];
                arr[i] = arr[arr.length-1-i];
                arr[arr.length-1-i] = temp;
            }
            return arr;
        }
        console.log(Center([5,2,9,7,6]));


        function scaleArr(arr, num){ /////// >>>>> 14 <<<<
            for (var i = 0; i < arr.length; i++){
                arr[i] = arr[i]*num;
            }
            return arr;
        }
        console.log(scaleArr([5,8,2,1],2));

