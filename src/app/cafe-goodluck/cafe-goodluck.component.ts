import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CafeGoodluckInterface } from '../interfaces/cafe-goodluck';
import { CafeGoodluckService } from './cafe-goodluck.service';
import * as data from '../../data/data.json';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-cafe-goodluck',
  templateUrl: './cafe-goodluck.component.html',
  styleUrls: ['./cafe-goodluck.component.css']
})
export class CafeGoodluckComponent implements OnInit {
  cafeData: any = {};
  objData: any;

  totalVotes: number;
  reviewVoteAvg: number;

  ratingArr: [];
  totalOfRating: number;
  reviewRatingAvg: number;



  constructor(private cafeGoodluckService: CafeGoodluckService,
              private httpClient: HttpClient) {
    this.objData = data;
    this.cafeData = this.objData.default;

    this.reviewVoteAvg = (this.cafeData.review_rating.total) / (this.cafeData.review_rating.votes.length);
    this.totalVotes = this.cafeData.review_rating.total;

    this.ratingArr = this.cafeData.review_rating.votes;
    this.reviewRatingAvg = this.ratingArr.reduce((sum, {rating} ) => sum + rating, 0 ) / (this.cafeData.review_rating.votes.length);

  }

  onRate($event: {oldValue: number, newValue: number, starRating: StarRatingComponent}) {
    this.reviewRatingAvg = $event.newValue;
  }

  ngOnInit() {

    // sumOfRating(this.ratingArr);
    // this.cafeGoodluckService.getCafeGoodluckData().subscribe((response) => {
    //   console.log('cafe', response);
    //   this.cafeGoodluck = response;
    // });
  }

}
