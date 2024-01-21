import React from 'react'

interface TextProps {
  children: string
}

export default function Text({ children }: TextProps) {
  const message = children.split('\n').map((str, idx, array) => {
    return (
      <React.Fragment key={idx}>
        {str} {idx === array.length - 1 ? null : <br />}
      </React.Fragment>
    )
  })

  return <div>{message}</div>
}
