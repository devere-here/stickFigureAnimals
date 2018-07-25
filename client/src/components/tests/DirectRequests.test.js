import React from "react"
import DirectRequests from '../DirectRequests'
import enzyme, { shallow } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('DirectRequests', () => {

  let shallowDirectRequests

  const directRequests = () => {
    if (!shallowDirectRequests){
      shallowDirectRequests = shallow(<DirectRequests />)
    }
    return shallowDirectRequests
  }

  beforeEach(() => {
    directRequests()
  })

  it('renders correctly', () => {
    const divs = shallowDirectRequests.find('div')
    expect(divs.length).to.equal(1)
  })
})