const dict = {
    mt: 'margin-top',
    mb: 'margin-botton',
    ml: 'margin-left',
    mr: 'margin-right',
    
    s: 'solid',
    d: 'double',
}

const style = 'mt-10vw color-red border-s-#000-3px'
const style1 = 'mt-27.5px color-#f00 border-d-white-1px'


function stringToCss(style) {
    const parseOne = style.split(' ')
    let parseTwo = parseOne.map((item) => {
        return item.split('-')
    })
    let styles = {}
    for (let k of parseTwo) {
        for (let i = 0; i < k.length; i++) {
            if (dict[k[i]] !==  undefined) {
                k[i] = dict[k[i]]
            }
        }
        styles[k[0]] = k.slice(1).join(' ')
    }
    return styles
}

console.log(stringToCss(style))
console.log(stringToCss(style1))
