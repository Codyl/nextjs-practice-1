import React, { Suspense } from 'react'
import ListDndData from '../components/list';

export default function Page() {
  return (
    <div>
      <h1>Monsters</h1>
        <ListDndData path='monsters' />
    </div>
  )
}