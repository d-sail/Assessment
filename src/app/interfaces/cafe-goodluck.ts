import { VotesInterface } from './votesInterface';
import { FeatureRating } from './feature-rating';

export interface CafeGoodluckInterface {
    name: string;
    area: string;
    city: string;
    category: [];
    coverImage: string;
    review_rating: VotesInterface [];
    total: number;
    feature_ratings: {
        [key: string]: FeatureRating;
    };
}
