import React from 'react'

export default function Logo () {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={require('../images/logo.svg')}
        width={88}
        height={35}
        alt='Olist logo'
      />
    </div>
  )
}
