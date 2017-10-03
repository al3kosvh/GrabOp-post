declare module Models {

  interface VOConnection extends Models.SOUser {
    connection_id: number,
    connection_status: number,
    connection_status_date: string,
    trusted: boolean,
  }

  interface VOConnectionRequest {
    "id": number,
    "sender": number,
    "receiver": number,
    "status": number,
    "status_date": string
  }
}
