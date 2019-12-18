
export interface PostComments {
    username: string;
    comment: string;
}

export interface PostDetails {
    id: number;
    description: string;
    iconUrl: string;
    imageUrl: string;
    username: string;
    comments: PostComments[];
    likes: number;

    //likedby: string[];
}

