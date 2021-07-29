import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-films',
  templateUrl: './header-films.component.html',
  styleUrls: ['./header-films.component.scss'],
})
export class HeaderFilmsComponent implements OnInit {
  searchForm= this.formBuilder.group({
    query: '',
  });
  constructor(private formBuilder: FormBuilder,private router: Router) { }
  onSubmit(): void {
    // Process checkout data here
    if(this.searchForm.value.query){
      this.router.navigate(['/search',this.searchForm.value.query]);
      console.warn('Your order has been submitted', this.searchForm.value.query);
      this.searchForm.reset();
    }

  }
  ngOnInit() {}

}
