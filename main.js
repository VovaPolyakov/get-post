let time = document.querySelector('.time');
let tableTime = document.querySelectorAll('.table__time');
let tableCountry = document.querySelectorAll('.table__country');

time.addEventListener('click',function(event){
    let array =[];
    for(let i = 0;i<tickets.length;i++){
        array.push(tickets[i].time)
    }
    sorting(array)

    function sorting(tickets){
        for(let n =0;n<array.length;n++){
            for(let i = 0;i<tickets.length;i++){
                if(tickets[i] >tickets[i+1]){
                    const array = tickets[i]
                    tickets[i] = tickets[i+1]
                    tickets[i+1] = array
                }
            }
        }
    }
    for(let i =0;i < tickets.length;i++){
        let adults = tickets.filter(ticket =>{
            if(ticket.time == array[i]){
                return true
            }
        })
        console.log(adults)
    }
    for(let i = 0;i< tableTime.length;i++){
        tableTime[i].innerText = adults[i].time;
        tableCountry[i].innerText = adults[i].country;   
    }
})