'use client'

import { useSearchParams } from 'next/navigation'

export default function GetURLDate(dataType: string) {
    const searchParams = useSearchParams()
    let result
    if (dataType === 'year') {
        let result = searchParams.get('year')
    }
    else if (dataType === 'month') {
        let result = searchParams.get('month')
    }
    else if (dataType === 'day') {
        let result = searchParams.get('day')
    }

  return result
}