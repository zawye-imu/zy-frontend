import React from 'react'
import { useHookstate } from '@hookstate/core'
import { globalState } from '../states/GlobalState'

export default function Second() {
    const state = useHookstate(globalState);
    


  return (
    <div>Second
        <br>
        </br>
        Name: {state.name.get()}
    </div>
  )
}
