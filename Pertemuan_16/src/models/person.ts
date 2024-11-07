export enum Gender {
    female = 'Female',
    male = 'Male'
}

export enum Zodiac {
    Aries = 'Aries',
    Taurus = 'Taurus',
    Gemini = 'Gemini',
    Cancer = 'Cancer',
    Leo = 'Leo',
    Virgo = 'Virgo',
    Libra = 'Libra',
    Scorpio = 'Scorpio',
    Sagittarius = 'Sagittarius',
    Capricorn = 'Capricorn',
    Aquarius = 'Aquarius',
    Pisces = 'Pisces',
  }

export class Person {
    name : string
    age : number
    weight : number
    gender : Gender
    height : number
    zodiac : Zodiac
    isMarriage : boolean
    isDating : boolean


calculateBMI(): number{
    return (this.weight/(this.height* this.height)) * 10000
}
}