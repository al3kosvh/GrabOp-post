declare module Models {

  interface VOMessage {
    id: number, // receiver id
    senderid: string,
    subject?: string,
    body?: string,
    sent_date?: string
  }
}
