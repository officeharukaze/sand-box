import AppLayout from '../layouts/AppLayout';
import { Memos } from '../../api/memos/memos';
import { createContainer } from 'meteor/react-meteor-data';

const createMemo = content => {
  Memos.insert({content});
};
const removeMemo = memoId => {
  Memo.remove({_id: memoId});
};
export default createContainer(() => {
  return {
    createMemo,
    removeMemo,
    memos: Memos.find().fetch(),
  };
}, AppLayout);
