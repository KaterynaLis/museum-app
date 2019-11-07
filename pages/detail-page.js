
function Validation(name, message) {
    if (!name || !message) {
        alert('Please fill up you name and message')
        return true; 
    } 

    if (message.lenght > 5) {
        alert('Your message is too long')
        return true;
    }
    return false;
}


function submitComment(){
    const inputField = document.getElementById("name")
    const name = inputField.value
        console.log(name)

    const textArea = document.getElementById("msg")
    const message = textArea.value
        console.log(message)

    if (Validation(name, message)) {
         return null
     }

    const comment = document.createElement('section')
        console.log(comment)

    const h3 = document.createElement('h3')
        console.log(h3)    

    const p = document.createElement('p')
        console.log(p)  


    h3.innerHTML = `${name} said:`
    p.innerHTML = message
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
        console.log(comment)


    const commentSection = document.getElementById("comments")
        console.log(commentSection)

    commentSection.appendChild(comment)

    inputField.value = null;
    textArea.value = null;

    
}


