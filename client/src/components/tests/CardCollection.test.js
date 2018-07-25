import React from "react"
import CardCollection from '../CardCollection'
import enzyme, { shallow } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('CardCollection', () => {

  let shallowCardCollection

  const cardCollection = () => {
    if (!shallowCardCollection){
      shallowCardCollection = shallow(<CardCollection />)
    }
    return shallowCardCollection
  }

  beforeEach(() => {
    cardCollection()
  })

  it('renders correctly', () => {
    const divs = shallowCardCollection.find('div')
    expect(divs.length).to.equal(1)
  })
})