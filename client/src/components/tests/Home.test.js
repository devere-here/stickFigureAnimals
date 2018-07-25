import React from "react"
import Home from '../Home'
import enzyme, { shallow } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Home', () => {

  let shallowHome

  const home = () => {
    if (!shallowHome){
      shallowHome = shallow(<Home />)
    }
    return shallowHome
  }

  beforeEach(() => {
    home()
  })

  it('renders correctly', () => {
    const divs = shallowHome.find('div')
    expect(divs.length).to.equal(1)
  })
})
