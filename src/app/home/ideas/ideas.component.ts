import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


interface Post {
  title: string;
  content: string;
}


@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {

  postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;


  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.postsCollection = this.afs.collection('posts');
    this.posts = this.postsCollection.valueChanges();
  }


}
