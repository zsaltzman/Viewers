import { connect } from 'react-redux';

import StudyListWithData from './StudyListWithData.js';
import { toggleLoadingBar } from './../redux/actions.js';

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
    toggleLoadingBar: () => {
      dispatch(toggleLoadingBar());
    },
  };
};

const ConnectedStudyList = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyListWithData);

export default ConnectedStudyList;
