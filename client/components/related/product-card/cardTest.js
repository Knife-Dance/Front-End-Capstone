import React from 'react'
import renderer from 'react-test-renderer'
import Relate from './Related-product.jsx'

test('the modal is poping', () => {
  const component = renderer.create(
    <Relate/>
  )
})