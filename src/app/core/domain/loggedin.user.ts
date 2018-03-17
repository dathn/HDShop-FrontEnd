export class LoggedInUser {
  constructor(access_token: string, username: string, fullname: string, email: string, avatar: string) {
    this.access_token = access_token;
    this.username = username;
    this.fullname = fullname;
    this.avatar = avatar;
    this.email = email;
  }
  public id: string;
  public access_token: string;
  public username: string;
  public fullname: string;
  public email: string;
  public avatar: string;
}
