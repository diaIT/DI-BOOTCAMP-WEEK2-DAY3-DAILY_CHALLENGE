
    const numbers = [5,0,9,1,7,4,2,6,3,8];

//* Using the .toString() method convert the array to a string.
    numbers.toString();

//*Using the .join()method convert the array to a string. Try passing different values into the join.
    console.log(numbers.join("+"));  //* 5+0+9+1+7+4+2+6+3+8
    console.log(numbers.join(" "));  //*  5 0 9 1 7 4 2 6 3 8
    console.log(numbers.join(""));  //* 5091742638


//*Bonus : To do this Bonus look up how to work with nested for loops
//*Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).

    const arr = [5,0,9,1,7,4,2,6,3,8];

    for(let i = 0; i<arr.length;i++){
    
        for(j=0;j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
            let tmp= arr[j];
            arr[j]=arr[j+1];
            arr[j+1]= tmp
            
             } 
       
        }
       console.log(arr)
    }
 