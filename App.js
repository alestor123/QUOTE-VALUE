module.exports = (value,start,stop) => {
if(!value) throw ('Expected value not found')
if(!(typeof value == 'string')) throw Error('Expected value should be string')
if (typeof value === 'string') return (start || '"') + value + (stop || '"')
}