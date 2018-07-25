import React from "react"
import SeeRequests from '../SeeRequests'
import enzyme, { shallow } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('SeeRequests', () => {

  let shallowSeeRequests

  const seeRequests = () => {
    if (!shallowSeeRequests){
      shallowSeeRequests = shallow(<SeeRequests />)
    }
    return shallowSeeRequests
  }

  beforeEach(() => {
    seeRequests()
  })

  it('renders correctly', () => {
    const divs = shallowSeeRequests.find('div')
    expect(divs.length).to.equal(1)
  })
})
