import { reviews } from "@/api/api.endpoints";
import { instance } from "@/api/api.interceptor";
import { IReview, IReviewField } from "@/store/reviews/types";

class ReviewsService {
  async getAllReviews() {
    return instance<IReview[]>({
      url: `${reviews.all}`,
      method: "GET",
    });
  }

  async create(data: IReviewField, productId: string) {
    return instance<IReview>({
      url: `${reviews.create}${productId}`,
      method: "POST",
      data,
    });
  }
  async getAverageReview(productId: number) {
    return instance<{ avg_rating: number }>({
      url: `${reviews.average}${productId}`,
      method: "GET",
    });
  }
}

export const Reviews = new ReviewsService();
