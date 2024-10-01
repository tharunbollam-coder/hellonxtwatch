import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Header from './components/Header'
import NavigationBar from './components/NavigationBar'
import ProtectedRoute from './components/ProtectedRoute'

import Context from './context/Context'
import './App.css'

class App extends Component {
  state = {
    activeTab: 'Home',
    isDarkTheme: false,
    savedVideos: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  changeActiveTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  render() {
    const {activeTab, isDarkTheme, savedVideos} = this.state
    return (
      <Context.Provider
        value={{
          changeActiveTab: this.changeActiveTab,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
          savedVideos,
          activeTab,
          isDarkTheme,
        }}
      >
        <div>
          <Header />
          <div className="content-container">
            <NavigationBar />
            <Switch>
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </Context.Provider>
    )
  }
}

export default App
