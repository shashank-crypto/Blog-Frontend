// var s = window.prompt();
// var c1,c2,c3,c4,c_total = 0;

// for(let i=0 ; i<parseInt(s) ; i++) {
//     var group = window.prompt();
//     switch (parseInt(group)) {
//         case 1:
//             c1++;
//             break;

//         case 2:
//             c2++;
//             break;
        
//         case 3: 
//             c3++;
//             break;

//         case 4:
//             c4++;
//             break;

//         default:
//             console.log('wrong input')
//     }
// }

// c_total = c4 + c3 + Math.ceil(c2/2)
// if(c1 <= c3) c1=0
// if(c1 > c3) c1-=c3
// if(c2%2 === 0) c1-=2
// if(c1 > 0) c_total += Math.ceil(c1/4)

// console.log(c_total)
// let pebbles = 9034;
// let j = 2;
// let count = pebbles;

// while(pebbles!==1){
//     while(pebbles%j !== 0) {
//         if(j>=Math.sqrt(pebbles)){count+=1; pebbles=1; break;}
//         j++;
//     }
//     if (pebbles===1) break;
//     count+=(pebbles/j);
//     pebbles = pebbles/j;
//     j=2;
// }

// console.log(count);

// readline();
// const prices = readline().split(' ');
// const days = readline();

// const canBuy = (j,i,count)=>{
//     if(j<=i) count++
// }

// for(let i=0;i<days;i++){
//     let i = readline();
//     let count = 0;
//     // prices.forEach(canBuy())
//     for(let j=0;j<prices.length;i++){
//         canBuy(prices[j],i,count)
//     }
//     print(count)
// }

// readline();
// const prices = readline().split(' ');
// const days = readline();

// for(let i=0;i<days;i++){
//     let i = readline();
//     let count = 0;
//     prices.forEach((j)=>{
//         if(j<=i) count++
//     })
//     print(count)
// }

