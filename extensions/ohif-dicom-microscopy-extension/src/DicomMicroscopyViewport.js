import React, { Component } from 'react';
import { api } from 'dicom-microscopy-viewer';

const microscopyViewer = api.VLWholeSlideMicroscopyImageViewer;

class DicomMicroscopyViewport extends Component {
  state = {
    error: null
  };

  viewer = null;

  constructor(props) {
    super(props);

    this.container = React.createRef();
  }

  // install the microscopy renderer into the web page.
  // you should only do this once.
  installOpenLayersRenderer(container, displaySet) {
    const dicomWebClient = displaySet.dicomWebClient;

    const searchInstanceOptions = {
      studyInstanceUID: displaySet.studyInstanceUid,
      seriesInstanceUID: displaySet.seriesInstanceUid
    };

    dicomWebClient
      .searchForInstances(searchInstanceOptions)
      .then(instances => {
        const promises = [];
        for (let i = 0; i < instances.length; i++) {
          const sopInstanceUID = instances[i]['00080018']['Value'][0];
          const retrieveInstanceOptions = {
            studyInstanceUID: displaySet.studyInstanceUid,
            seriesInstanceUID: displaySet.seriesInstanceUid,
            sopInstanceUID
          };

          const promise = dicomWebClient
            .retrieveInstanceMetadata(retrieveInstanceOptions)
            .then(metadata => {
              const imageType = metadata[0]['00080008']['Value'];
              if (imageType[2] === 'VOLUME') {
                return metadata[0];
              }
            });
          promises.push(promise);
        }
        return Promise.all(promises);
      })
      .then(metadata => {
        metadata = metadata.filter(m => m);

        this.viewer = new microscopyViewer({
          client: dicomWebClient,
          metadata
        });

        this.viewer.render({ container });
      });
  }

  componentDidMount() {
    const { displaySet } = this.props.viewportData;

    this.installOpenLayersRenderer(this.container.current, displaySet);
  }

  render() {
    const style = { width: '100%', height: '100%' };
    const DicomViewer = (
      <div className={'DicomMicroscopyViewer'} style={style}>
        {this.state.error ? (
          <h2>{JSON.stringify(this.state.error)}</h2>
        ) : (
          <div style={style} ref={this.container} />
        )}
      </div>
    );

    if (this.viewer) {
      this.viewer.resize();
    }

    return DicomViewer;
  }
}

export default DicomMicroscopyViewport;
