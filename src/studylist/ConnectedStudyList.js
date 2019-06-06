import { connect } from 'react-redux';

import StudyListWithData from './StudyListWithData.js';
import { setLoadingBar } from './../redux/actions.js';

const isActive = a => a.active === true;

const mapStateToProps = state => {
  const activeServer = state.servers.servers.find(isActive);

  return {
    server: activeServer,
    user: state.oidc.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoadingBar: options => {
      dispatch(setLoadingBar(options));
    },
  };
};

const ConnectedStudyList = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyListWithData);

export default ConnectedStudyList;
