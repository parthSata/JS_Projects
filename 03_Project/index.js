const clock = document.getElementById('clock')

setInterval(() => {
    const date = new Date()
    console.log(date.toLocaleString())
},1000)
