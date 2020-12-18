import { render } from 'react-dom';
import React, { useRef } from 'react';
import { ZapparCamera, ImageTracker, ZapparCanvas } from '@zappar/zappar-react-three-fiber';

export default function App() {
    const zapparCamera = useRef();
    const targetFile = require('file-loader!./example-tracking-image.zpt').default;

    return (
      <ZapparCanvas>
        <ZapparCamera ref={zapparCamera} rearCameraMirrorMode="css" />
        <ImageTracker
          onNotVisible={(anchor) => console.log(`Not visible ${anchor.id}`)}
          onNewAnchor={(anchor) => console.log(`New anchor ${anchor.id}`)}
          onVisible={(anchor) => console.log(`Visible ${anchor.id}`)}
          targetImage={targetFile}
          camera={zapparCamera}
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
