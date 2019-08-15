import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Skill {
    skill: string;
    percentage: string;
}

@Injectable()
export class SkillsService {
  constructor(private http: HttpClient) { }

  skillsData = '../assets/skills.json';

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>
    (this.skillsData)
  }
}

