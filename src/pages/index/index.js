import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'



export default class Index extends Component {

  config = {
    navigationBarTitleText: '活动报名'
  }

  constructor() {
    super(...arguments)
    this.state = {
      list: []
    }
  }

  componentWillMount () {}

  componentDidMount () {
    Taro.request({
      url: 'http://127.0.0.1:8080/'
    }).then(res => {
      if (res.statusCode === 200) {
        console.log(res.data.length);
        this.setState({
          list: res.data
        })
      } else {
        console.log(res.statusCode)
      }
    });
  }

  componentWillUnmount () { }

  componentDidShow () {}

  componentDidHide () {}

  render () {
    console.log("logging")
    return (
      <Text>test: {this.state.list.length}</Text>
    )
  }
}

