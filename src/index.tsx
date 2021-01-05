import './style.sass';

import { render } from 'react-dom';
import React from 'react';
import { ZapparCamera, ImageTracker, ZapparCanvas } from '@zappar/zappar-react-three-fiber';
import targetFile from 'example-tracking-image.zpt'

export default function App() {
    return (
      <ZapparCanvas>
        <ZapparCamera rearCameraMirrorMode="css" />
        <ImageTracker
          onNotVisible={(anchor) => console.log(`Not visible ${anchor.id}`)}
          onNewAnchor={(anchor) => console.log(`New anchor ${anchor.id}`)}
          onVisible={(anchor) => console.log(`Visible ${anchor.id}`)}
          targetImage={targetFile}
        >
          <mesh position={[0, 0, -5]}>
            <sphereBufferGeometry />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </ImageTracker>
        <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
      </ZapparCanvas>
    );
}

render(<App />, document.getElementById('root'));
