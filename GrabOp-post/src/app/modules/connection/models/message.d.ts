declare module Models {

  interface VOMessage {
    id: number, // receiver id
    senderid: number,
    subject?: string,
    body?: string,
    sent_date?: string
  }
}
