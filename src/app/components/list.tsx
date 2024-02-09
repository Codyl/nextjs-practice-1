import React, { Suspense } from 'react'
import { getDndData } from '../utils/api-requests';
import Link from 'next/link';

export default async function ListDndData({ path }: { path: string }) {
  const monsters = await getDndData(path)
  return (
    <Suspense fallback={<div />}>
      {monsters.results.map((monster: { name: string; index: string; url: string; }) =>
      (<Link href={`monsters/${monster.name}`} className='block' key={monster.index}>
        {monster.name}
      </Link>))}
    </Suspense>
  )
}