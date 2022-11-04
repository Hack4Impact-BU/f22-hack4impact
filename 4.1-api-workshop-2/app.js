let button = document.getElementById('activity')

button.onclick = () => {
    const api_url = 'http://www.boredapi.com/api/activity/'

    async function get() {
        
        const response = await fetch(api_url); 
        const data = await response.json();
        const { activity } = data;
        document.getElementById('s').textContent = activity;
    }

    get()
}
