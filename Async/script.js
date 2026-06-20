// async function dataloa(){
//   let response =await fetch('https://picsum.photos/v2/list')
//   let data = await response.json()
//   console.log(data)
// }

// dataloa()


// understanding the resolve reject and then in promise
function orderFood(){
  let myOrder = new Promise(function(resolve,reject){
    console.log('your order is coming..')
    let orderStatus = false 
    setTimeout(function(){
      if(orderStatus){
        console.log("Delivery man is here")
        resolve()
      }else{
        console.log("order failed")
        reject()
      }
    },3000)
  })
  
  myOrder.then(function(){
    console.log("Now make a payment");
  }).catch(function(){
    console.log('complain karo');
    })
}

orderFood()