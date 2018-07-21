import React from 'react'
import NumberFormPanel from './panels/numberFormPanel'
import { LoadingPanel } from '../fizzbuzz/panels'

const NumberForm = () =>
  <div>
    <NumberFormPanel />
    <LoadingPanel />
  </div>

export default NumberForm
