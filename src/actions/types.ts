import { Types, ActionBuilder } from 'typesafe-actions';
import * as Actions from './index'
export type ActionTypes=ActionBuilder<typeof Actions>
