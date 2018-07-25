import React from "react"
import NewCardPurchase from '../NewCardPurchase'
import enzyme, { shallow } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('NewCardPurchase', () => {

  let shallowNewCardPurchase

  const newCardPurchase = () => {
    if (!shallowNewCardPurchase){
      shallowNewCardPurchase = shallow(<NewCardPurchase />)
    }
    return shallowNewCardPurchase
  }

  beforeEach(() => {
    newCardPurchase()
  })

  it('renders correctly', () => {
    const divs = shallowNewCardPurchase.find('div')
    expect(divs.length).to.equal(1)
  })
})
