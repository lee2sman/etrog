let instructions = []

function setup(){
  noCanvas()

  instructions = loadStrings('tweets.txt', pickCaption)

  let btn = select('#logo')
  btn.mousePressed(pickCaption)
}


function pickCard(){
  let e = int(random(146))

  if (e < 10){
    e = '00' + str(e)
  } else if (e < 100){
    e = '0' + str(e)
  } else {
    e = str(e)
  }

  let card = select('#card')
    
  card.attribute('src','./assets/etrogs/'+e+'.jpg')
  cardResize()

}

function pickCaption(){
  let c = int(random(146))
  let cText = instructions[c]

  let caption = select('#caption')

  caption.html(cText)

  pickCard()
}

function cardResize(){
  let card = select('#card')
  let w
  if (windowWidth > windowHeight){
    w = windowHeight
  } else {
    w = windowWidth
  }
  card.size(w,w)

}

function windowResized(){
  cardResize()
}

