declare module Models {

  interface VOConnection extends Models.SOUser {
    connectionId: number,
    connectionStatus: number,
    connectionStatusDate: string,
    trusted: boolean,
  }

  interface VOConnectionRequest {
    id: number,
    sender: number,
    receiver: number,
    status: number,
    statusDate: string
  }
}
