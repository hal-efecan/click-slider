function Slideshow() {
    arr = [
        {index: 0, isActive: false}, 
        {index: 1, isActive: false}, 
        {index: 2, isActive: false}
    ]
    const slides = document.querySelector('#slideshow').children
    
    this.init = function() {
        // sets first slide on initialisation
        slides[0].classList.add('active')
        arr[0].isActive = true
        console.log('OG', arr)
    }
    this.print = function(newArr, orgArr=arr) {
        console.log('copy', newArr, 'OG', arr)
    }
    this.prev = function() {
        let newArr = JSON.parse(JSON.stringify([ ...arr ])) // to deep copy nested Objects
        // let curr;
        let idx;
            newArr.forEach( (ele, index) => {
                if(ele.isActive === true) {
                    idx = index
                }
            })

        if(idx === 0) {
            return
        }
        if(idx === 1) {
            newArr[idx].isActive = false
            newArr[0].isActive = true
            slides[1].classList.remove('active')
            slides[0].classList.add('active')
        }
        if(idx === 2) {
            newArr[idx].isActive = false
            newArr[1].isActive = true
            slides[2].classList.remove('active')
            slides[1].classList.add('active')
        }
        // set original arr to copied array
        slideshow.print(newArr)
        arr = newArr
    }
    this.next = function() {
        let newArr = JSON.parse(JSON.stringify([ ...arr ])) // to deep copy nested Objects
        // let curr;
        let idx;
            newArr.forEach( (ele, index )=> {
                if(ele.isActive === true) {
                    idx = index
                }
            })

        if(idx === 0) {
            newArr[idx].isActive = false
            newArr[1].isActive = true
            slides[0].classList.remove('active')
            slides[1].classList.add('active')
        }
        if(idx === 1) {
            newArr[idx].isActive = false
            newArr[2].isActive = true
            slides[1].classList.remove('active')
            slides[2].classList.add('active')
        }
        if(idx === 2) {
            return
        }
        // set original arr to copied array
        slideshow.print(newArr)
        arr = newArr
    }
    this.to = function(idx) {
        // for direct linking to slide
        let newArr = JSON.parse(JSON.stringify([ ...arr ])) // to deep copy nested Objects
        let curr;
        let wanted;
            newArr.forEach((ele, index)=> {
                // slide wanted
                if(index === idx) {
                    wanted = ele
                }
                // current active slide
                if(ele.isActive === true) {
                    curr = ele
                }
            })

        let currIndex = curr.index
        let wantIndex = wanted.index

        if(currIndex === 0) {
            newArr[currIndex].isActive = false
            newArr[wantIndex].isActive = true

            slides[currIndex].classList.remove('active')
            slides[wantIndex].classList.add('active')
        }
        if(currIndex === 1) {
            newArr[currIndex].isActive = false
            newArr[wantIndex].isActive = true

            slides[currIndex].classList.remove('active')
            slides[wantIndex].classList.add('active')
        }
        if(currIndex === 2) {
            newArr[currIndex].isActive = false
            newArr[wantIndex].isActive = true
            
            slides[currIndex].classList.remove('active')
            slides[wantIndex].classList.add('active')
        }
        // set original arr to copied array
        slideshow.print(newArr)
        arr = newArr
    }
}

// instantiate new slideshow
let slideshow = new Slideshow()
slideshow.init()

const nextBtn = document.querySelector('#nextBtn')
nextBtn.addEventListener('click', (ev) => {
    slideshow.next()
})

const prevBtn = document.querySelector('#prevBtn')
prevBtn.addEventListener('click', (ev) => {
    slideshow.prev()
})

const btnOne = document.querySelector('#btnOne')
btnOne.addEventListener('click', (ev) => {
    slideshow.to(0)
})

const btnTwo = document.querySelector('#btnTwo')
btnTwo.addEventListener('click', (ev) => {
    slideshow.to(1)
})

const btnThree = document.querySelector('#btnThree')
btnThree.addEventListener('click', (ev) => {
    slideshow.to(2)
})
