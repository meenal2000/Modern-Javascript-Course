const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const date = now.toDateString()
    // const day = now.getDay();
    const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span> 
    <div>${date}</div>
    `;
    clock.innerHTML = html;

};

setInterval(tick, 1000);