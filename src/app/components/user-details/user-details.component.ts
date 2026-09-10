import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {

  id!: string;

  constructor(private userService: UserService, private activatedroute:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.paramMap.get("id")!;
    this.userService.getUser(Number(this.id)).subscribe(user => console.log(user));
  }

}
