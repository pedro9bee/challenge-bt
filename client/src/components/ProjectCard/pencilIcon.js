import React from 'react'
import { createIcon } from '@chakra-ui/react'
// using `path`
export const PencilIcon = createIcon({
  displayName: 'UpDownIcon',
  viewBox: '0 0 200 200',
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path d='M95.1 165l-8.4-8.4 54.1-54.1c.8-.8.8-2.2 0-3-.8-.8-2.2-.8-3 0l-54.1 54.1-2.4-2.4 75.9-75.9L171 89.1 95.1 165zM66.3 180l12.3-26.1 13.8 13.8zM174.5 85.5l-13.8-13.8 8.3-8.3c1.3-1.3 3.3-1.3 4.6 0l9.2 9.2c1.3 1.3 1.3 3.3 0 4.6l-8.3 8.3zM66.3 184h117.5v3.5H66.3z' />
  ),
})
