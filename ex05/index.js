const {EventEmitter} = require('events')
module.exports = class Connection {
    
  //! 暗号: 搜索算法
  constructor() {
    this.events = new EventEmitter();
  }

  onConn(fn) {
    this.events.on('some_event', fn);
  }

  connection(...args) {
    this.events.emit('some_event', ...args);
  }

}
