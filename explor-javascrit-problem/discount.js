// 1. if ticket number is les than 100, per ticket 100 tk
// 2. if ticket number is more than 100,but less 200, per ticket 90 tk
// 3.  if you purchase morr then 200 ticket , pricr 70 tk
// first 100----->100tk
// 100- 200----->90tk
// 300+ ----->70tk

 function ticketPrice(ticketQuantity){
    const first100Rate=100;
    const second100Rate=90;
    const threed100Rate=70;
    if(ticketQuantity <= 100){
        const price=ticketQuantity * first100Rate;
        return price
    }
    else if(ticketQuantity <= 200){

        const first100Price = 100 * first100Rate;
        const restTicketQuantity =ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
         const totalPric =first100Price + restTicketPrice;
         return totalPric;
        
    }else{
        const first100Price = 100 * first100Rate;
        const second100Pric = 100 * second100Rate;
        const restTicketQuantity =ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * threed100Rate;
         const totalcost =first100Price + second100Pric + restTicketPrice;
         return totalcost;
    }
 }
 const price=ticketPrice(201)

 console.log(price)