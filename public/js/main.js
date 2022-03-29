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
    if(event.target.classList.contains('no_sort')){
        sortingIncrease();
        time.classList.remove('no_sort')
        time.classList.add('increase')
    }else if(event.target.classList.contains('increase')){
        sortingDescending()
        time.classList.remove('increase')
        time.classList.add('descending')
    }else if(event.target.classList.contains('descending')){
        sortingIncrease();
        time.classList.remove('descending')
        time.classList.add('increase')
    }

    console.log(event.target)
    function sortingIncrease(){

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
    }
    function sortingDescending(){
        let array =[];
        for(let i = 0;i<tickets.length;i++){
            array.push(tickets[i].time)
        }
    
        array.sort((a, b) => b - a);

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
    }
})
