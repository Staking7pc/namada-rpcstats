import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div>
      <ul>
        <li className='li'>
          <a class="" href="https://brightlystake.com">Brightlystake</a>
        </li>
        {/* <li className='li-r'><a class="active" href="/rpc-status">rpc-status</a></li>
        <li className='li-r'><a class="active" href="/indexer-status">indexer-status</a></li>
        <li className='li-r'><a class="active" href="/seed-status">seeds/peers-status</a></li>
        <li className='li-r'><a class="active" href="/seed-status">self-test</a></li>
        <li className='li-r'><a class="active" href="/seed-status">add-endpoint</a></li> */}
        <li className='li-r'><a class="active" href="/">Home</a></li>

      </ul>
    </div>
  )
}
