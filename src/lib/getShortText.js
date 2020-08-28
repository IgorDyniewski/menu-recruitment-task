const getShortText = (text) => {
    const wordsArray = text.split(' ')

    // For one word texts
    if (wordsArray.length === 1) return text.slice(0, 1).toUpperCase() + text.slice(1, 3).toLowerCase()

    // From two and more words texts
    let result = ''
    for (let i = 0; i < 3; i++) result += wordsArray[i] ? wordsArray[i][0].toUpperCase() : ''

    return result
}

module.exports = getShortText
