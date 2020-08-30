import getShortText from './getShortText'

it('Generates proper text shortcuts', () => {
    expect(getShortText('Event Detection')).toBe('ED')
    expect(getShortText('Vertical Lift Performance')).toBe('VLP')
    expect(getShortText('Diagnostics')).toBe('Dia')
})
