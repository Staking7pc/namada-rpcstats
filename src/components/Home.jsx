import React from "react";
import "./Home.css";
export default function Cards() {
  return (
    <body>
      <div class="container">
        <div class="heading">
          <h4>Namada tools by Brightlystake</h4>
        </div>
        <div class="row">
          <div class="card">
            <div class="card-header">
              <h3>RPC STATUS</h3>
            </div>
            <div class="card-body">
              <p>Check the status of public rpc endpoints</p>
              <a target="_blank" rel="noopener noreferrer" href="/rpc-status" class="btn">
                Click here
              </a>
            </div>
          </div>
          {/* <div class="card">
            <div class="card-header">
              <h3>INDEXER STATUS</h3>
            </div>
            <div class="card-body">
              <p>Check the status of public indexer endpoints</p>
              <a target="_blank" rel="noopener noreferrer" href="/indexer-status" class="btn">
                Click here
              </a>
            </div>
          </div> */}
          <div class="card">
            <div class="card-header">
              <h3>SEEDS PEERS STATUS</h3>
            </div>
            <div class="card-body">
              <p>Check the status of peers and seeds using tmp2p</p>
              <a target="_blank" rel="noopener noreferrer" href="/seed-peer-status" class="btn">
                Click here
              </a>
            </div>
          </div>
          {/* <div class="card">
            <div class="card-header">
              <h3>SELF TEST</h3>
            </div>
            <div class="card-body">
              <p>Test your end point if its active or inactive.</p>
              <a target="_blank" rel="noopener noreferrer" href="self-test" class="btn">
                Click here
              </a>
            </div>
          </div> */}

        </div>
      </div>
    </body>
  );
}
