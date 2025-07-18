export interface UserEventsProp {
      userID: { type: string },
    events: [
        {
            date: { type: string },
            event: [
                {
                    name: { type: string }, 
                    scanned: { type: boolean } 
                }
            ]
        } 
    ]
}