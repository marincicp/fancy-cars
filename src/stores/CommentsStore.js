import { makeAutoObservable, runInAction } from "mobx";
import { fetchAllComments, postComment } from "../apis/api";

export class CommentsStore {
  allComments = [];

  constructor() {
    makeAutoObservable(this);
    this.getAllComments();
  }

  async getAllComments() {
    try {
      const data = await fetchAllComments();

      runInAction(() => {
        return this.setComments(data);
      });
    } catch (err) {
      console.error(err);
    }
  }

  setComments(comments) {
    return (this.allComments = comments);
  }

  async createComment(id, autor, content) {
    try {
      let commentData = {
        car_id: id,
        author: autor,
        content: content,
      };

      const data = await postComment(commentData);
      runInAction(() => {
        this.allComments.unshift(data);

        return data;
      });
    } catch (err) {
      console.error(err);
    }
  }
}
