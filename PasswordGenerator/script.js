const CharacterAmountRange = document.getElementById('CharacterAmountRange')
const CharacterAmountNumber = document.getElementById('CharacterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')

const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR_CODES = arrayfromLowtoHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayfromLowtoHigh(97, 122)
const NUMBER_CHAR_CODES = arrayfromLowtoHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayfromLowtoHigh(33, 47).concat(arrayfromLowtoHigh(58, 64)).concat(arrayfromLowtoHigh(91, 96)).concat(arrayfromLowtoHigh(123, 126))

CharacterAmountNumber.addEventListener('input', syncCharacterAmount)
CharacterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = CharacterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols){
    let charCodes = LOWERCASE_CHAR_CODES
    if(includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if(includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if(includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

    const passwordCharacters = []
    for(let i=0; i < characterAmount; i++){
        const character = charCodes[Math.floor(Math.random()*charCodes.length)]
        passwordCharacters.push(String.fromCharCode(character))
    }
    return passwordCharacters.join('')
}

function arrayfromLowtoHigh(low, high){
    const array = []
    for (let i=low; i<=high; i++){
        array.push(i)
    }
    return array
}

function syncCharacterAmount(e){
    const value = e.target.value
    CharacterAmountNumber.value = value
    CharacterAmountRange.value = value
}