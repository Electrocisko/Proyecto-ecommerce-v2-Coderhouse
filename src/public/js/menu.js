


let eventList = document.querySelectorAll('.addCart')

eventList.forEach( (element) => {
    element.addEventListener('click', e => {
        e.preventDefault()
        let prod = element.value
        console.log(prod)
        
    })  
}

)