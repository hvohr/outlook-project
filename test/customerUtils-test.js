import chai from 'chai';
const expect = chai.expect;
import { bookingsData } from '/Users/hollisvohr/turing_work/mod_2/outlook-project/src/data/bookings-sample.js';
import { displayPrevBookedRooms, findValidIDNumber } from '../src/customerUtils.js' 
import { customerData } from '/Users/hollisvohr/turing_work/mod_2/outlook-project/src/data/customers-sample-data.js';

describe('displayPrevBookedRooms', function() {
  it('should be a function', function() {
    expect(displayPrevBookedRooms).to.be.a('function')
  })
  it('should display bookings already made by users', () => {
    let prevBooked = displayPrevBookedRooms({"id":9,"name":"Faustino Quitzon"}, bookingsData)
    let expected = [{"id":"5fwrgu4i7k55hl6sz","userID":9,"date":"2022/04/22","roomNumber":15},
    {"id":"5fwrgu4i7k55hl6x4","userID":9,"date":"2022/01/27","roomNumber":6},]
    expect(prevBooked.length).to.equal(2)
    expect(prevBooked).to.deep.equal(expected)
  })
  it('should display no booking if none made by that user', () => {
    let prevBooked = displayPrevBookedRooms(24, bookingsData)
    let expected = []
    expect(prevBooked.length).to.equal(0)
    expect(prevBooked).to.deep.equal(expected)
  })
})
describe('findValidIDNumber', function() {
  it('should be a function', function() {
    expect(findValidIDNumber).to.be.a('function')
  })
  it('should return a user when a valid username is entered', () => {
    let customerUsername = findValidIDNumber(customerData, 'customer1')
    let expected = {"id":1,"name":"Leatha Ullrich"}
    expect(customerUsername).to.deep.equal(expected)
  })
  it('should return undefined when a valid username is not entered', () => {
    let customerUsername = findValidIDNumber(customerData, 'ghostman26')
    let expected = undefined
    expect(customerUsername).to.equal(expected)
  })
})