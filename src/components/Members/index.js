import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MembersActions from '~/store/ducks/members';

import Modal from '../Modal';
import Button from '~/styles/components/Button';

import { MembersList } from './styles';

class Members extends Component {
  static propTypes = {
    closeMembersModal: PropTypes.func.isRequired,
  };

  render() {
    const { closeMembersModal } = this.props;

    return (
      <Modal size="big">
        <h1>Membros</h1>

        <form>
          <MembersList>
            <li>
              <strong>Luisito</strong>
            </li>
          </MembersList>

          <Button onClick={closeMembersModal} filled={false} colors="gray">
            Cancelar
          </Button>
        </form>
      </Modal>
    );
  }
}

// const mapStateToProps = state => ({
//   activeTeam: state.teams.active,
//   projects: state.projects,
// });

const mapDispatchToProps = dispatch =>
  bindActionCreators(MembersActions, dispatch);

export default connect(null, mapDispatchToProps)(Members);
