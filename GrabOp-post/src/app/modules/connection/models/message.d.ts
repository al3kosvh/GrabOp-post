declare module Models {

  interface VOMessage {
    id: string, // receiver id
    senderid: string,
    subject?: string,
    body?: string,
    sent_date?: string
  }
}
