let array = []
let inputt = document.querySelector('.cardno')
let output = document.querySelector('.card-number')
inputt.addEventListener('input', () => {
    let card = document.querySelector('.card')
    card.setAttribute('style', 'transform: translateY(-190px) rotateY(0deg);',)

    for (var i =0; i<16; i++) {
        array[i]=inputt.value[i]

        a1=array.slice(0,4)
        aw1 = a1.join(' ')
        a1mini = array.slice(0,2)
        aw1mini = a1mini.join(' ')
        a2 = array.slice(4, 8)
          aw2 = a2.join(' ')
          a3 = array.slice(8, 12)
          aw3 = a3.join(' ')
          a4 = array.slice(12, 16)
          aw4 = a4.join(' ')
    }
})