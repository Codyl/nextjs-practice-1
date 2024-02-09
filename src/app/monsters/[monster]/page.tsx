import React from 'react'
import { getDndData } from '../../utils/api-requests';
import SingleMonster from '@/app/components/monster';
import Link from 'next/link';

export default async function Page({ params }: { params: any }) {
  const monster: Monster = await getDndData('monsters/' + params.monster.toLowerCase())
  // console.log(monster)
  return (
    <div>
      <Link href='/monsters'>Back</Link>
      <h1>Monster page</h1>
      {/* <ListDndData /> */}
      <SingleMonster monster={monster} />
    </div>
  )
}