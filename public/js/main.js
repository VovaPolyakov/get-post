let time = document.querySelector('.time');
let tableTime = document.querySelectorAll('.table__time');
let tableCountry = document.querySelectorAll('.table__country');



const tickets = [
    {country: 'Germany', time: 12},
    {country: 'USA', time: 9},
    {country: 'Russia', time: 13},
    {country: 'Japan', time: 24},
    {country: 'Canada', time: 17},
    
];

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
    for(let i = 0;i< array.length;i++){
        let adults = tickets.filter(ticket =>{
            if(ticket.time == array[i]){
                return true
            }
        })
        for(let n = 0;n< adults.length;n++){
            tableTime[i].innerText = adults[n].time;
            tableCountry[i].innerText = adults[n].country;   
        }
    }
})