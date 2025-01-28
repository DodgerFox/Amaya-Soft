export interface UserDTO {
  id: number
  fullname: string
}

export class User {
  public id: number
  public fullname: string

  constructor(data: Partial<UserDTO>) {
    this.id = data.id ?? self.crypto.randomUUID()
    this.fullname = data.fullname
  }

  public merge(data: Partial<UserDTO>) {
    this.id = data.id ?? this.id
    this.fullname = data.fullname ?? this.fullname
  }

  public toDTO() {
    return {
      id: this.id,
      fullname: this.fullname,
    }
  }
}
