import React from 'react'
import PageHeader from '../template/pageHeader'

function paragrafo() {
  var p = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Asperiores ipsa error praesentium doloremque aliquid
  recusandae architecto illo officia, deleniti temporibus
  dignissimos impedit nisi officiis eius voluptates totam
  deserunt nostrum accusantium.`

  return p
}

export default props => (
  <div>
    <PageHeader name='Sobre' small='Nós' />
    <h2>Nossa História</h2>
    <p>{paragrafo()}</p>
    
    <h2>Missão e Visão</h2>
    <p>{paragrafo()}</p>

    <h2>Impressa</h2>
    <p>{paragrafo()}</p>
  </div>
)