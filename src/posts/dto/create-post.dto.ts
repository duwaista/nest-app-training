export class CreatePostDto {
  _id: string;
  avatarUrl: string;
  email: string;
  uid: string;
  posts: string;
  type: 'image' | 'video';
  createdAt: Date;
}
