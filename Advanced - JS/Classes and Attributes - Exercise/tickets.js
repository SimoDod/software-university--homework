function tickets(tickets, cmd) {
  let res = [];

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  for (const ticket of tickets) {
    let [destination, price, status] = ticket.split("|");
    price = Number(price);
    let currTicket = new Ticket(destination, price, status);
    res.push(currTicket);
  }

  switch (cmd) {
    case "destination":
       res = res.sort((a,b)=> {
          return  a.destination.localeCompare(b.destination)
        })
      break;
    case "price":
        res = res.sort((a,b)=> {
            return  a.price - b.price
          })
      break;
    case "status":
        res = res.sort((a,b)=> {
            return  a.status.localeCompare(b.status)
          })
      break;

    default:
      break;
  }

  return res;
}
tickets(
    ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
   'price'
   
);
