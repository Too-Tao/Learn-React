import Hello from '../components/Hello'
import * as actions from '../actions/index'
import { StoreState } from '../types/index'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName
  }
}

export function mapDispathToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm())
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Hello)