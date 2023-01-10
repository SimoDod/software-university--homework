function solution() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }

    toString() {
      return `Post: ${this.title}\nContent: ${this.content}`;
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
    }

    addComment(value) {
      return this.comments.push(value);
    }

    toString() {
      let buffer = "";
      buffer += `Post: ${this.title}\nContent: ${this.content}\nRating: ${
        this.likes - this.dislikes
      }\nComments:\n`;
      for (let comment of this.comments) {
        buffer += ` * ${comment}\n`;
      }

      return buffer.trimEnd();
    }
  }

  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = views;
    }

    view() {
      this.views++;
      return this;
    }

    toString() {
      return `Post: ${this.title}\nContent: ${this.content}\Views: ${this.views}`;
    }
  }

  return {
    Post,
    SocialMediaPost,
    BlogPost,
  };
}

const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());
