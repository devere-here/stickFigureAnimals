import React from "react"
import Header from '../Header'
import enzyme, { shallow } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Header', () => {

  let shallowHeader

  const header = () => {
    if (!shallowHeader){
      shallowHeader = shallow(<Header />)
    }
    return shallowHeader
  }

  beforeEach(() => {
    header()
  })

  it('renders correctly', () => {
    const divs = shallowHeader.find('div')
    expect(divs.length).to.equal(1)
  })
})
