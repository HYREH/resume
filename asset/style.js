function init() {
    let d = new Date();
    if (d.getHours() > 17 ) {
        document.getElementById("time").innerHTML = 'Good Evening'
        document.getElementById("name").innerHTML = 'Kalejaiye Omotoyosi'
    } else if(d.getHours() <= 12) {
        document.getElementById("time").innerHTML = 'Good Morning'
        document.getElementById("name").innerHTML = 'Kalejaiye Omotoyosi'
    }else {
        document.getElementById("time").innerHTML = 'Good Afternoon'
        document.getElementById("name").innerHTML = 'Kalejaiye Omotoyosi'
    }
}
window.onload = init;