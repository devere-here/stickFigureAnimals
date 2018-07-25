import React from "react"
import FindFriends from '../FindFriends'
import enzyme, { shallow } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('FindFriends', () => {

  let shallowFindFriends

  const findFriends = () => {
    if (!shallowFindFriends){
      shallowFindFriends = shallow(<FindFriends />)
    }
    return shallowFindFriends
  }

  beforeEach(() => {
    findFriends()
  })

  it('renders correctly', () => {
    const divs = shallowFindFriends.find('div')
    expect(divs.length).to.equal(1)
  })
})
