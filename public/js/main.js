let time = document.querySelector('.time');
let country = document.querySelector('.country')
let tableTime = document.querySelectorAll('.table__time');
let tableCountry = document.querySelectorAll('.table__country');
let icon = document.querySelector('.first');
let iconSecond = document.querySelector('#name-icon')

const tickets = [
    {country: 'Germany', time: '2022-04-04'},
    {country: 'USA', time: '2022-04-20'},
    {country: 'Russia', time: '2022-05-12'},
    {country: 'Japan', time: '2022-03-19'},
    {country: 'Canada', time: '2022-04-22'},
    
];

country.addEventListener('click',function(event){
    icon.style.opacity ='0'
    if(event.target.classList.contains('no_sort')){
        alphabet();
        country.classList.remove('no_sort')
        country.classList.add('aligned')
        iconSecond.style.opacity = '1'
    }else if(event.target.classList.contains('aligned')){
        notAlphabet();
        country.classList.remove('aligned')
        country.classList.add('notAlphabetically')
        iconSecond.style.opacity = '1'
        iconSecond.innerText = 'expand_less'

    }
    else if(event.target.classList.contains('notAlphabetically')){
        alphabet();
        country.classList.remove('notAlphabetically')
        country.classList.add('aligned')
        iconSecond.style.opacity = '1'
        iconSecond.innerText = 'expand_more'

    }
    function alphabet(){
        let count = [];
        for(let i =0;i<tableCountry.length;i++){
            count.push(tableCountry[i].innerText);
        }
        count.sort();
        for(let i = 0;i< count.length;i++){
            let adults = tickets.filter(ticket =>{
                if(ticket.country == count[i]){
                    return true
                }
            })
            adults.forEach(elem => {
                tableTime[i].innerText = elem.time;
                tableCountry[i].innerText = elem.country;  
            });
        }
    }
    function notAlphabet(){
        let count = [];
        for(let i =0;i<tableCountry.length;i++){
            count.push(tableCountry[i].innerText);
        }
        count.sort();
        count.reverse();
        for(let i = 0;i< count.length;i++){
            let adults = tickets.filter(ticket =>{
                if(ticket.country == count[i]){
                    return true
                }
            })
            adults.forEach(elem => {
                tableTime[i].innerText = elem.time;
                tableCountry[i].innerText = elem.country;   
            });
            for(let n = 0;n< adults.length;n++){
            }
        }
    }
})

time.addEventListener('click',function(event){
    iconSecond.style.opacity ='0'
    if(event.target.classList.contains('no_sort')){
        sortingIncrease();
        time.classList.remove('no_sort')
        time.classList.add('increase')
        icon.style.opacity = '1'
    }else if(event.target.classList.contains('increase')){
        sortingDescending()
        time.classList.remove('increase')
        time.classList.add('descending')
        icon.style.opacity = '1'
        icon.innerText = 'expand_less'
    }else if(event.target.classList.contains('descending')){
        sortingIncrease();
        time.classList.remove('descending')
        time.classList.add('increase')
        icon.style.opacity = '1'
        icon.innerText = 'expand_more'
    }

    console.log(event.target)
    function sortingIncrease(){

        let array =[];
        tickets.forEach(ticket => {
            array.push(ticket.time)
        });

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
            adults.forEach(elem => {
                tableTime[i].innerText = elem.time;
                tableCountry[i].innerText = elem.country;   
            });

        }
    }
    function sortingDescending(){
        let array =[];
        for(let i = 0;i<tickets.length;i++){
            array.push(tableTime[i].innerText)
        }
    
        array.reverse()
        

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
