import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.scss']
})
export class AddIdeaComponent implements OnInit {

  constructor(private router: Router,
              private afs: AngularFirestore) { }

  title: string;
  content: string;


  ngOnInit() {
  }

  addPost() {
    const promise = this.afs.collection('posts')
    .add({
      title: this.title,
      content: this.content
    });

    promise.then(() => {
      alert('Added new post!');
      this.router.navigate(['']);
    });

    promise.catch((error) => {
      console.log(error);
    });
  }

  submit() {
    (this.content.length > 50) ? this.addPost()
    : alert('Content needs to be longer than 50 characters.');
  }

}
