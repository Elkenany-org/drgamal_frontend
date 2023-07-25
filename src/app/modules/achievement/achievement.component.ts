import { Component, HostListener } from '@angular/core';
import { ImagePopupComponent } from '../image-popup/image-popup.component';
import { Title } from '@angular/platform-browser';
import { AchivementsService } from 'src/app/_services/achivements/achivements.service';
import { Achievements } from 'src/app/interfaces/achievements';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent {
all_achievements!:Achievements
  constructor(
    private titleService:Title,private achievements:AchivementsService
    ) {
      titleService.setTitle('Achievements');
    }

    ngOnInit(): void {
      this.achievements.all_achievements().subscribe(
        res=>{
            this.all_achievements=res
        },
        err=>{
          console.log(err);
        }
      )
    }
}
