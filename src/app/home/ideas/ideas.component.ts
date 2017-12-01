import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


interface Post {
  title: string;
  content: string;
}

interface PostId extends Post {
  id: string;
}


@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {

  postsCollection: AngularFirestoreCollection<Post>;
  posts: any;


  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.postsCollection = this.afs.collection('posts');
    this.posts = this.postsCollection.snapshotChanges()
    .map( actions => {
      // console.log(actions);
      return actions.map( a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { data, id };
      });
    });
  }


}
