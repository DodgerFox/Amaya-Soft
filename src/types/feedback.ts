import { User } from './user'
import type { UserDTO } from './user'

export interface FeedbackDTO {
  id: number
  rate: number
  cover?: string
  text: string
  user: UserDTO
}

export class Feedback {
  public id: number
  public rate: number
  public cover: string
  public text: string
  public user: string

  constructor(data: Partial<FeedbackDTO>) {
    this.id = data.id ?? self.crypto.randomUUID()
    this.rate = data.rate ?? 0
    this.cover = data.cover
    this.text = data.text
    this.user = new User(data.user)
  }

  public merge(data: Partial<FeedbackDTO>) {
    this.id = data.id ?? this.id
    this.rate = data.rate ?? this.rate
    this.cover = data.cover ?? this.cover
  }

  public toDTO() {
    return {
      id: this.id,
      rate: this.rate,
      cover: this.cover,
      text: this.text,
      user: this.user,
    }
  }
}
