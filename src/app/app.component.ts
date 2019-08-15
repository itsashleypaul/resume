import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SkillsService, Skill } from './skills.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ SkillsService ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
error: any;
headers: string[];
skills: Skill[];

  constructor(private skillsService: SkillsService) {}
  title = 'its-ashley-paul';

  ngOnInit() {
    this.showSkills();
  }

  showSkills() {
    this.skillsService.getSkills()
      .subscribe(skills => {
        this.skills = skills;
        console.log('this.skills1', this.skills);
      });
  }
}
