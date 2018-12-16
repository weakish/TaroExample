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
      list: [],
      statusCode: 0,
      ErrorMessage: "恭喜你踩到了代码的坑。快来这里报告吧：https://github.com/weakish/TaroExample/issues"
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
          statusCode: res.statusCode,
          list: res.data,
        })
      } else {
        this.setState({
          statusCode: res.statusCode,
          ErrorMessage: `很不幸，碰到了网络问题(${res.statusCode}错误)。建议过一会儿重试一下。`
        })
      }
    });
  }

  componentWillUnmount () { }

  componentDidShow () {}

  componentDidHide () {}

  render () {
    if (this.state.statusCode === 200) {
      return (
        <View className='container'>
          <View className='tickets'>
            <Text className='heading'>选择票种</Text>
            {this.state.list.map(ticket => {

              let quotaMessage  
              let description
              if (ticket.quota === 0) {
                quotaMessage = "售罄"
                description = (
                  <View className='ticketDescription'>
                    <Text className='aboutType'>{ticket.description}</Text>
                    <Text className='aboutQuota'>{quotaMessage}</Text>
                  </View>
                )
              } else if (ticket.quota > 0 && ticket.quota <10) {
                quotaMessage = `仅剩${ticket.quota}张`
                description = (
                  <View className='ticketDescription'>
                    <Text className='aboutType'>{ticket.description}</Text>
                    <Text className='aboutQuota'>{quotaMessage}</Text>
                  </View>
                )
              } else {
                description = (
                  <View className='ticketDescription'>
                    <Text className='aboutType'>{ticket.description}</Text>
                  </View>
                )
              }
              return (
                  <View className='ticketAvailable'>
                    <Text className='ticketLabel'>{ticket.label}</Text>
                    {description}
                    <Text className='ticketPrice'>{ticket.price} 元</Text>
                  </View>
              )
            })}
          </View>
        </View>
      )
    } else {
      return (
        <Text>{this.state.ErrorMessage}</Text>
      )
    }
  }
}

