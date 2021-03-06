let w = window.innerWidth - 40;
let h = window.innerHeight - 100




function setup () {
    createCanvas(w, h)
    angleMode(DEGREES)
    rectMode (CENTER)
    frameRate()

   
}


document.addEventListener(onresize , () => {
  console.log('resize')
  w = window.innerWidth - 40;
  h = window.innerHeight - 40
  resizeCanvas()
})

let rand = Math.floor(Math.random * 256)

//default values from range sliders 

let r1 = 300
let r2 = 700
let r3 = 10
let r4 = 1
let r5 = 200

// listens to the values being input by the range sliders 

document.addEventListener('input' , () => {
    r1 = document.getElementById('r1').value
    r2 = document.getElementById('r2').value
    r3 = document.getElementById('r3').value
    r4 = document.getElementById('r4').value
    r5 = document.getElementById('r5').value
})

function draw () {
    background(10 , 20 , 30 )
    noFill()
    stroke(255)
    
    

    translate(width /2, height /2)

    // for loop generates up to hundreds of different sized ellipses
    // r5 variable changes the amount of ellipses generated by the loop
    // each ellipse rotates slightly faster in relationship to the value of i
    // i is multiplied by the values of the various r variables to change the shape of the ellipse as well as the speeds of their rotations generating the patterns
    // sin is the curve in which their rotated and multiplying that by the frame count is what generates the animation effect

    for (let i = 0; i < r5 ; i++) {
        
        push()
        
        rotate(sin(frameCount + i * r3) * r4 )

        ellipse(0, 0, r1 - i * 3, r2 - i * 3, 100 - i)

        pop()

        rotate(sin(frameCount / i) * 3)
    }



}


function windowResized() {
  resizeCanvas(w, h);
}
