class Video{
    constructor(title ,uploader ,time ){
        this.title =title;
        this.uploader=uploader;
        this.time =time;
    }

    watch(){
        return `${this.uploader} watched all ${this.time} of ${this.title}`;
    }
}

vv = new Video('test','tt',6);
console.log(vv.watch());

vv2 = new Video('aa','bb',8);

const videoData = [
    { title: "Learn React", uploader: "Charlie", time: 600 },
    { title: "Node.js ", uploader: "Dana", time: 720 },
    { title: "Python ", uploader: "Eve", time: 480 },
    { title: "HTML ", uploader: "Frank", time: 540 },
    { title: " JavaScript", uploader: "Grace", time: 900 }
  ];
  
  const videos = videoData.map(data => new Video(data.title, data.uploader, data.time));
  videos.forEach(video => video.watch());
