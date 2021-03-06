import { Injectable } from '@angular/core'

import * as io from 'socket.io-client'

@Injectable()

export class SocketProvider {
  public socketUri: string
  public socket: io

  constructor() {
    this.socketUri = 'http://75367d8c.ngrok.io'
    this.connectClientSocket()
  }

  public emit(event: string, data?: any) {
    this.socket.emit(event, data)
  }

  public on(event: string, callback: Function) {
    this.socket.on(event, callback)
  }

  public off(events: Array<string>) {
    if (!events) {
      return
    }

    events.forEach(event => this.socket.off(event))
  }

  private connectClientSocket() {
    this.socket = io.connect(this.socketUri, {
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000
    })
  }
}