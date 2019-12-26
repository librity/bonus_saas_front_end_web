import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '~/services/api';

import MembersTypes from '../ducks/members';

export function* getMembers() {
  const response = yield call(api.get, 'members');

  yield put(MembersTypes.getMembersSuccess(response.data));
}

export function* updateMember({ id, roles }) {
  try {
    yield call(api.put, `members/${id}`, {
      roles: roles.map(role => role.id),
    });

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Membro atualizado!',
        message: 'O membro foi ataulizado com sucesso.',
        timeOut: 300,
        progressBar: true,
      })
    );
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Erro na operação!',
        message: 'Houve um erro, tente novamente.',
        timeOut: 300,
        progressBar: true,
      })
    );
  }
}
