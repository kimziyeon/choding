export type myProjectPostType = {
    date: string,
    overview: string,
    position: string[],
    postId: number,
    title: string,
    userId: string,
    goal: string,
    link: string[],
    member: string[],
    stack: string[],
    imgSrc: string,
    comments: myProjectCommentType[]
}

export type myProjectCommentType = {
    userId: string,
    comment: string,
    date: string
}