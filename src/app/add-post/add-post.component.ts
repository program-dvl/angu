import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostApiService } from '../post-api.service';
import { ActivatedRoute, Router } from "@angular/router";



@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
    editId: any;

    constructor(private formBuilder: FormBuilder,private api: PostApiService,private activatedRoute: ActivatedRoute,private router:Router) { }

    ngOnInit() {
        this.editId = (this.activatedRoute.snapshot.params.id) ? this.activatedRoute.snapshot.params.id : false;
        this.registerForm = this.formBuilder.group({
            title: ['', Validators.required],
            body: ['', Validators.required],
        });
        if(this.editId){
          this.api
          .getArticle(this.editId)
          .subscribe(resp => {
            this.registerForm.controls['title'].setValue(resp['title']);
            this.registerForm.controls['body'].setValue(resp['body']);
          });
        }
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }

        if(this.editId){
          this.api
          .updateData(this.registerForm.value,this.editId)
          .subscribe(resp => {
            this.router.navigate(['/']);
          });
        }else{
          this.api
          .postData(this.registerForm.value)
          .subscribe(resp => {
            this.router.navigate(['/']);
          });
        }
        
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
