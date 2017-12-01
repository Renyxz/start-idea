import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


interface Post {
  title: string;
  content: string;
}


@Component({
  selector: 'app-browse-post',
  templateUrl: './browse-post.component.html',
  styleUrls: ['./browse-post.component.scss']
})
export class BrowsePostComponent implements OnInit {

  postId: string;
  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private afs: AngularFirestore) { }

  ngOnInit() {
    this.route.params.subscribe( prop => {
      this.postId =  prop.id;
    });

    this.postDoc = this.afs.doc(`posts/${ this.postId }`);
    this.post = this.postDoc.valueChanges();

  }


}
