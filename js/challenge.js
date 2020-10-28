
// the pause button should then show the text "resume."

// When 'resume' is clicked, it should restart the counter and re-enable the buttons. 
//5. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

// Hint for the timer
// If you're not sure how to create or pause a timer, look into: setTimeout setInterval clearinterval



// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.

document.addEventListener("DOMContentLoaded", function(e){
    
    let timer = setInterval(function(){
        const counter = document.querySelector('#counter')
        const currentTime = parseInt(counter.textContent)
        counter.textContent = currentTime + 1
    }, 1000)
    
    document.addEventListener("click", function(e){
        const counter = document.querySelector('#counter')
        const currentTime = parseInt(counter.textContent)
        
        function likeCounter(){
            //know what current time it is
            
            //find the DOM ul object
            const ulParent = document.querySelector('ul.likes')
            //add an li associated with that current time
            const likesLi = document.createElement('li')
            // debugger
            let likes = 1;
            likesLi.className = `t${currentTime}`
            likesLi.innerHTML = `${currentTime} was liked <span>${likes}</span> times!`
            // debugger
            if (ulParent.querySelector(`.${likesLi.className}`)) {
                
                // debugger
                let likedNum = parseInt(ulParent.querySelector(`.${likesLi.className}`).querySelector('span').textContent)
                ulParent.querySelector(`.${likesLi.className}`).querySelector('span').textContent = likedNum + 1
                
            } else {
                ulParent.append(likesLi)
                
            }
            // likesLi.textContent 
            // if this current time was already liked then increment to THAT li if not create a new li
            //`${currentTime} was liked {currentlikes}`
            //li has a attribute associated with it's current time
            //append li object to ul object parent
            // ulParent.append(likesLi)
        }
        
        if (e.target.id === 'minus'){
            counter.textContent = currentTime - 1
        } else if (e.target.id === 'plus'){
            counter.textContent = currentTime + 1
        } else if (e.target.id === 'heart'){
            likeCounter()
        } else if (e.target.id === 'pause'){
            clearInterval(timer)
            
            document.querySelector('#minus').disabled = true
            document.querySelector('#plus').disabled = true
            document.querySelector('#heart').disabled = true
            document.querySelector('#submit').disabled = true

            e.target.textContent = 'resume'
            e.target.id = 'resume'
            
            
            
        }else if (e.target.id === 'resume'){
            let timer = setTimeout(function(){
                const counter = document.querySelector('#counter')
                const currentTime = parseInt(counter.textContent)
                counter.textContent = currentTime + 1
                
            }, 1000)

            document.querySelector('#minus').disabled = false
            document.querySelector('#plus').disabled = false
            document.querySelector('#heart').disabled = false
            document.querySelector('#submit').disabled = false

            e.target.textContent = 'pause'
            e.target.id = 'pause'
            
        }


    })

    document.addEventListener('submit', function(e){
        e.preventDefault()
        const form = e.target
        const comment = form.comment.value 
        const commentP = document.createElement('p')
        commentP.textContent = comment
        document.querySelector('#list').append(commentP)
        form.reset()



    })
    
    
    
    
    
    
})






// As a user, I should see the timer increment every second once the page has loaded.
// As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// As a user, I can pause the counter, which should
// pause the counter
// disable all buttons except the pause button