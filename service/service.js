

const URLBACK = 'https://reqbin.com/echo/'

export function getForecastToday(){
    fetch(`${URLBACK}/cuotas`, { method: 'GET' }).then( (res) => {
        return res.json()
    } ).catch( (e) => console.error(e));
}


export function getForecastYesterday(){
    fetch(`${URLBACK}/ayers`, { method: 'GET' }).then( (res) => {
        return res.json()
    } ).catch( (e) => console.error(e));
}