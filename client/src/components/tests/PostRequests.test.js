import React from "react"
import PostRequests from '../PostRequests'
import enzyme, { shallow } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('PostRequests', () => {

  let shallowPostRequests

  const postRequests = () => {
    if (!shallowPostRequests){
      shallowPostRequests = shallow(<PostRequests />)
    }
    return shallowPostRequests
  }

  beforeEach(() => {
    postRequests()
  })

  it('renders correctly', () => {
    const divs = shallowPostRequests.find('div')
    expect(divs.length).to.equal(1)
  })
})
