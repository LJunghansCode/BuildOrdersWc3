import { connect } from 'react-redux'
import { loginToServer,updateLoginMessage,updateLoginMessageTimed } from './../actions/user'
import Login from '../components/Login/Login';

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginToServer: user => {
      dispatch(loginToServer(user))
    },
    updateLoginMessage: (message, time) => {
      dispatch(updateLoginMessageTimed(message, time))
    }
  }
}

const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginPage;