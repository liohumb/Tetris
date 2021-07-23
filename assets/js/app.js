document.addEventListener('DOMContentLoaded', () => {

    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const scoreDisplay = document.querySelector ('#score')
    const startBtn = document.querySelector('#start-button')
    const width = 10
    let nextRandom = 0
    let timerId
    let score = 0
    const colors = [
        'orange',
        'red',
        'purple',
        'green',
        'blue'
    ]


    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
      ]
    
      const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1]
      ]
    
      const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
      ]
    
      const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
      ]
    
      const iTetromino = [
          [1,width+1,width*2+1,width*3+1],
          [width,width+1,width+2,width+3],
          [1,width+1,width*2+1,width*3+1],
          [width,width+1,width+2,width+3]
      ]

      const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

      let currentPosition = 4
      let currentRotation = 0

      console.log(theTetrominoes[0][0])

      let random = Math.floor(Math.random()*theTetrominoes.lenght)
      let current = theTetrominoes[random][currentRotation]

      function draw() {
          current.forEach(index => {
              squares[currentPosition + index].classList.add('tetromino')
              squares[currentPosition + index].style.backgroundColor = colors[rendom]
          })
      }

      function undraw() {
          current.forEach(index => {
              squares[currentPosition + index].classList.remove('tetronimo')
              squares[currentPosition + index].style.backgroundColor = ''
          })
      }

      function control(e) {
          if (e.keyCode === 37) {
              moveLeft()
          } else if (e.keyCode === 38) {
              rotate()
          } else if (e.keyCode === 39) {
              moveRight()
          } else if (e.keyCode === 40) {
              moveDown()
          }
      }

      document.addEventListener('keyup', control)

      

})